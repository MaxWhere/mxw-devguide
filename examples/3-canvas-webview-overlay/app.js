// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 3-canvas-webview-overlay
 * Rendering canvas and webview into 3d scene and overlay
 */
const { wom } = require('maxwhere')
const { app } = require('electron')
const path = require('path')

wom.start({
  title: '3-canvas-webview-overlay',
  // right click for switch between 3d and 2d
  navigation: 'coginav-lite'
}, () => {
  // add resource folder of test image
  wom.addResources(path.resolve(
    __dirname, '..', 'resources'
  ))

  // render basic in-game Canvas
  let cig = wom.create('canvas', {
    location: 'in-game', // can be omitted
    width: 40,
    height: 40,
    'resolution-width': 400,
    'resolution-height': 400,
    position: {x: -50, y: 0, z: -100},
    // accept mouse events to make it orbit-able
    physical: {raycast: true},
    // paint image in it when it's created
    done: c => {
      // transparency applies
      c.loadPicture('logo.png')
    }
  })
  wom.render(cig)

  // render basic overlay Canvas
  let co = wom.create('canvas', {
    location: 'overlay',
    width: 100,
    height: 100,
    metrics: 'pixels',
    // position origin is bottom-right corner
    'horizontal-align': 'right',
    'vertical-align': 'bottom',
    // relative to bottom-right corner
    left: -100,
    top: -100,
    done: c => {
      // transparency applies
      c.loadPicture('logo.png')
    }
  })
  wom.render(co)

  // render Webview
  let wv = wom.create('webview', {
    location: 'in-game', // can be omitted
    width: 80,
    height: 60,
    'resolution-width': 800,
    'resolution-height': 600,
    position: {x: 20, y: -10, z: -100},
    // accept mouse events to make it orbit-able
    physical: {raycast: true},
    // URL to load
    url: 'http://youtube.com',
    // accept input events when hovered
    inputDisabled: false
  })
  wom.render(wv)

  // render Overlay
  let ov = wom.create('overlay', {
    // size will be relative
    metrics: 'relative',
    // position origin is top-left corner
    'horizontal-align': 'left',
    'vertical-align': 'top',
    width: 1.0, // whole window length
    height: 0.2, // 10% window height
    'resolution-width': 1280,
    'resolution-height': 144,
    // URL to load
    url: 'http://github.com',
    // accept input events when hovered
    inputDisabled: false
  })
  wom.render(ov)
})
// terminate when window is closed
.on('quit', app.quit) 