// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 6-load-config
 * Rendering initial 3d scene by loading json
 */
const { wom } = require('maxwhere')
const { app } = require('electron')
const path = require('path')

// Same scene as in 2-mesh-light loaded from config file
wom.load('config.json')
.on('ready', () => {
  // if initial scene is defined use this callback
  // to be sure every mesh is loaded
  console.log('meshes ready') // -> mxw-core.log
  // app goes here
})
.on('quit', () => {
  console.log('quit') // -> mxw-core.log
  app.quit()
})

// config.json can contain any option processed by wom.load
// Here we're using some settings for environment and camera.
// (For "main" main-view.js can be used as well, just to show how to
// define scene without jsx syntax)