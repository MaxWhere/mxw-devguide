/**
 * Example 2-mesh-light
 * Rendering objects into 3d scene
 */
const { wom } = require('maxwhere')
const { app } = require('electron')
const path = require('path')

wom.start({
  title: '2-mesh-light',
  // right click for switch between 3d and 2d
  navigation: 'coginav-lite'
}, () => {

  // TODO: update sdk!!!!
  wom.resourcePaths = []

  // add mesh resources
  wom.addResources(path.resolve(
    __dirname, '..', 'resources'
  ))
  // create Mesh
  let m = wom.create('mesh', {
    // define mesh file
    url: 'ball.mesh',
    // define Node position
    position: {x: 0, y: 0, z: -200},
    // define Node scaling
    scale: 5,
    // create auto AABB as physical to make it orbit-able
    autophysical: true
  })
  // add Mesh to 3d scene
  wom.render(m)
  // create Light
  let l = wom.create('light', {
    // position above the ball
    position: {x: 0, y: 300, z: -200}
  })
  // add Light to 3d scene
  wom.render(l)
})
// terminate when window is closed
.on('quit', app.quit)