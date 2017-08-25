/**
 * Example 10-mesh-animator
 * Plays animation of Ogre mesh files.
 */
const { app } = require('electron')
const { wom } = require('maxwhere')

wom.load({
  title: '10-mesh-animator',
  navigation: 'coginav-lite',
  local: '../resources',
  camera: {
    position: {y: 100},
    orientation: {angle: -30, axis: {x: 1}}
  }
}, () => {
  // Renders the scene and register listeners for mesh animations:
  // - Start/Pause: Mouse enter/leave
  // - Stop: click
  // Three types of animations are used here:
  // - penguin.mesh: Skeletal animation
  // - plane.mesh: Morph animation
  // - cube.mesh: Pose animation
  wom.render(<node z={-150}>
    <light y={100} />
    <mesh
      url='penguin.mesh'
      autophysical={true}
      done={ m => {
        const amuse = m.animator('amuse')
        console.log(amuse.getLength()) // -> mxw-core.log
        console.log(amuse.getTimePos()) // -> mxw-core.log
        m.on('mouseenter', () => amuse.start())
        m.on('mouseleave', () => amuse.pause())
        m.on('click', () => amuse.stop())
      }}
    />
    <mesh
      url='plane.mesh'
      x={-80}
      autophysical={true}
      done={ m => {
        const a = m.animator('test')
        m.on('mouseenter', () => a.start())
        m.on('mouseleave', () => a.pause())
        m.on('click', () => a.stop())
      }}
    />
    <mesh
      url='cube.mesh'
      x={80}
      scale={10}
      autophysical={true}
      done={ m => {
        const a = m.animator('default_poses')
        m.on('mouseenter', () => a.start())
        m.on('mouseleave', () => a.pause())
        m.on('click', () => a.stop())
      }}
    />
  </node>)
})
.on('quit', app.quit)
