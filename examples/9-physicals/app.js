// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 9-physicals
 * Demonstrating physical object capabilities.
 * Press 'F8' to toggle the physical view of 3d scene!
 * It presents a ball grid where balls can be dropped
 * by moving mouse over them. Start or Reset on UI.
 */
const { app, ipcMain } = require('electron')
const { wom } = require('maxwhere')
const path = require('path')

// grid size constants to make it look OK for any number of elements
const gridElemLength = 7
const gridDispos = 25
const gridSize = (gridElemLength - 1) * gridDispos

wom.load({
  title: '9-physicals',
  navigation: 'coginav-lite',
  local: '../resources',
  // halfspace to stop any ball falling off the static plane
  'physical-limits': {
    'y': {'min': -gridSize - gridDispos }
  }
}, () => {
  // render base node
  // it positioned as the left-bottom corner of ball grid
  // it contains a light and UI overlay by default
  // For physical representation a static plane (narrow box)
  // is added to it for collide with falling balls
  let base = (
  <node
    position={{
      x: -gridSize / 2,
      y: -gridSize / 2,
      z: -gridSize - gridDispos}}
    physical={{
      'link-type': 'static',
      raycast: false,
      collision: true
    }}
    done={ n => {
      n.addPhysicalShape({
        shape: 'box',
        width: gridSize * 2,
        height: 0.1,
        depth: gridSize * 2,
        offset: {
          x: gridSize / 2,
          y: -gridSize / 2,
          z: 0}
      })
    }}
  >
    <light y={gridSize}/>
    <overlay
      url={path.resolve(__dirname, 'index.html')}
      inputDisabled={false}
      resolution-width={200}
      resolution-height={50}
      width={200}
      height={50}
    />
  </node>)
  // Store ball positions to move them back when reset
  let positions = {}
  // Append balls to base node and add
  // sphere physical shape to them
  for (var i = 0; i < gridElemLength; ++i) {
    for (var j = 0; j < gridElemLength; ++j) {
      let idij = `ball-${i}${j}`
      positions[idij] = {
        x: i * gridDispos,
        y: j * gridDispos,
        z: 0
      }
      base.appendChild(<mesh
        id={idij}
        url='ball.mesh'
        position={positions[idij]}
        physical={{
          'link-type': 'ghost',
          coefficients: {
            restitution: 0.3,
            'linear-damping': 0.8,
            'angular-damping': 0.8,
            friction: 0.3,
            'rolling-friction': 0.1
          },
          raycast: true,
          collision: true
        }}
        done={ m => {
          m.addPhysicalShape({
            shape: 'sphere',
            radius: 10
          })
        }}
      />)
    }
  }
  // Render the whole thing
  wom.render(base)
  // React to UI events
  ipcMain.on('physicals-switch', (event, enable) => {
    wom.selectAll('mesh').forEach( m => {
      if (enable) {
        // Start: balls will fall when mouse hovers them
        m.on('mouseenter', () => {
          m.setPhysicalType('dynamic')
        })
      } else {
        // Reset: mouse doesn't effect balls.
        // Fallen ones move back to initial position
        m.removeAllListeners('mouseenter')
        if (m.getPhysicalType() === 'dynamic') { // TODO: update sdk!! 2x
          m.setPhysicalType('ghost')
          m.animate('position', {
            to: positions[m.id]
          })
        }
      }
    })
  })
})
.on('quit', app.quit)
