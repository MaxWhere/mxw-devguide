const { wom } = require('maxwhere')
const THREE = require('three')
const _ = require('lodash')

'use strict'

const TILT_MAX_DEG = 15
const TILT_MOUSE_TO_DEG = 0.1
const P = 0.9 / 0.083
let mazeNode = null
let isGaming = false
let tiltAngle = {x: 0, y: 0}
let baseQ = new THREE.Quaternion()
let targetQ = new THREE.Quaternion()
let tableLookFromPos = new THREE.Vector3(0, 120, 20) // local offset from table
let tableLookFromOri = new THREE.Quaternion() // auto-calculated

const tiltTable = event => {
  if (!isGaming) return
  tiltAngle = _.mapValues(tiltAngle, (value, key) => {
    value += (event.deltaPosPixels[key] * TILT_MOUSE_TO_DEG)
    return _.clamp(value, -TILT_MAX_DEG, TILT_MAX_DEG)
  })
  targetQ.setFromEuler(new THREE.Euler(
    THREE.Math.degToRad(tiltAngle.y),
    0,
    THREE.Math.degToRad(-tiltAngle.x),
    'XYZ'
  ))
}

const approachTable = () => {
  wom.camera.animate('position', {
    from: wom.camera.getPosition(),
    to: tableLookFromPos,
    duration: 1,
    cubic: 'ease-in-out-quad',
    reference: 'absolute',
    space: 'world'
  })
  wom.camera.animate('orientation', {
    from: wom.camera.getOrientation(),
    to: tableLookFromOri,
    duration: 1,
    cubic: 'ease-in-out-quad',
    reference: 'absolute',
    space: 'world'
  }, () => {
    isGaming = true
    wom.setSpatialControl(false, false)
    wom.once('contextMenu', e => {
      isGaming = false
      wom.setSpatialControl(true)
    })
  })
}

module.exports = {
  resources: `${__dirname}/resources`,
  isGaming () {
    return isGaming
  },
  init (opts) {
    console.log('ball_maze init')
  },
  done (n) {
    console.log('ball_maze done')
  },
  render (props) {
    return <node {...props}
    physical={{
      raycast: true,
      'link-type': 'ghost'
    }}
    done={ n => {
      n.addPhysicalShape({
        shape: 'box',
        width: 100,
        height: 100,
        depth: 100
      })
      n.on('mousedown', e => {
        wom.on({
          object: n.physical,
          type: 'mouseMove'
        }, tiltTable)
      })
      n.on('mouseup', e => {
        wom.removeListener({
          object: n.physical,
          type: 'mouseMove'
        }, tiltTable)
      })
      n.on('dblclick', e => {
        approachTable()
      })
    }}>
      <mesh
      url='maze.mesh'
      id='maze-node'
      physical={{
        raycast: false,
        'link-type': 'draggable',
        coefficients: {
          restitution: 0.2,
          friction: 0.3,
          'rolling-friction': 0
        }
      }}
      done={ n => {
        n.addPhysicalShape({
          shape: 'mesh',
          mesh: 'maze_phy.obj'
        })
        mazeNode = n
        const no = n.getOrientation()
        baseQ.set(no.x, no.y, no.z, no.w)
        const np = n.getPosition()
        var npth = new THREE.Vector3(np.x, np.y, np.z)
        tableLookFromPos.add(npth).applyQuaternion(baseQ)
        tableLookFromOri.setFromUnitVectors(
          new THREE.Vector3(0, 0, -1),
          (npth.clone().sub(tableLookFromPos)).normalize()
        )
        // velocity control loop
        setInterval(() => {
          var o = mazeNode.getOrientation()
          var qActualInv = new THREE.Quaternion(o.x, o.y, o.z, o.w).inverse()
          var qDiff = targetQ.clone().multiply(qActualInv)
          var sinAngle = Math.sqrt(qDiff.x * qDiff.x + qDiff.y * qDiff.y + qDiff.z * qDiff.z)
          var angularVelocity = new THREE.Vector3()
          if (sinAngle > 0.001) {
            var axis = new THREE.Vector3(qDiff.x, qDiff.y, qDiff.z).divideScalar(sinAngle)
            angularVelocity.copy(axis.multiplyScalar(Math.atan2(sinAngle, qDiff.w) * P))
          } else {
            angularVelocity.set(0, 0, 0)
          }
          mazeNode.physical.SetVelocity(angularVelocity, 'angular')
          mazeNode.physical.SetVelocity({x: 0, y: 0, z: 0}, 'linear')
        }, 83)
      }}/>
      <mesh
      url='ball.mesh'
      id='ball-node'
      position={{x: 5, y: 0, z: 5}}
      scale={0.25} // Screws up material!
      physical={{
        raycast: false,
        'link-type': 'ghost',
        coefficients: {
          restitution: 0.3,
          'linear-damping': 0.8,
          'angular-damping': 0.8,
          friction: 0.3,
          'rolling-friction': 0.1
        }
      }}
      done={ n => {
        n.setPhysicalType('dynamic')
        n.addPhysicalShape({
          shape: 'sphere',
          radius: 10
        })
      }}
      />
    </node>
  }
}
