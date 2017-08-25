// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 13-websockets
 * Moving 3d object according to data received from
 * node server via websockets.
 * The server can be started/stopped from UI but
 * could be any distant service.
 */
const { app, ipcMain } = require('electron')
const { wom } = require('maxwhere')
const path = require('path')
const WebSocket = require('ws') // for websocket

wom.load({
  title: '13-websockets',
  navigation: 'coginav-lite',
  local: '../resources',
  // For better look on ball in origin
  camera: {
    position: {z: 300}
  }
}, () => {
  // Build scene
  wom.render(
  <node>
    <light
     y={300}
    />
    <overlay
      id='websockets-ui'
      url={path.resolve(__dirname, 'index.html')}
      inputDisabled={false}
      resolution-width={200}
      resolution-height={200}
      width={200}
      height={200}
    />
  </node>)
  const m = (
    <mesh
      url='ball.mesh'
      scale={5}
      autophysical={true}
   />
  )
  wom.render(m)
  // Opens developer tools on overlay
  // wom.select('#websockets-ui').browserWindow.webContents.openDevTools({detach: true})
  // Add listener to websocket
  ipcMain.on('server-started', (event, port) => {
    const socket = new WebSocket(`ws://127.0.0.1:${port}`)
    socket.on('message', (data) => {
      console.log(data) // -> mxw-core.log
      // move ball according to received data
      m.animate('position', {
        to: JSON.parse(data),
        duration: 0.5
      })
    })
  })
})
.on('quit', app.quit)
