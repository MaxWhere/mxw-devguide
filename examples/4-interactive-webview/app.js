// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 4-interactive-webview
 * Using UI overlay to manipulate wom objects from HTML
 */
const { wom } = require('maxwhere')
const { app, ipcMain } = require('electron')
const path = require('path')

wom.start({
  title: '4-interactive-webview',
  // right click for switch between 3d and 2d
  navigation: 'coginav-lite'
}, () => {
  // render ball
  wom.addResources(path.resolve(
    __dirname, '..', 'resources'
  ))
  let m = wom.create('mesh', {
    url: 'ball.mesh',
    position: {x: 0, y: 0, z: -200},
    scale: 5,
    autophysical: true
  })
  wom.render(m)
  // add light
  let l = wom.create('light', {
    position: {x: 0, y: 300, z: -200}
  })
  wom.render(l)
  
  // using ipc listeners
  ipcMain.on('light-switch', (event, enable) => {
    enable ? l.show() : l.hide()
  })

  // render UI
  let ov = wom.create('overlay', {
    metrics: 'relative',
    'horizontal-align': 'left',
    'vertical-align': 'top',
    width: 1.0,
    height: 0.2,
    'resolution-width': 1280,
    'resolution-height': 144,
    url: path.resolve(__dirname, 'index.html'),
    inputDisabled: false
  })
  // Inject Node into renderer process.
  ov.injectNode('ball', m)

  wom.render(ov)
})
// terminate when window is closed
.on('quit', app.quit) 