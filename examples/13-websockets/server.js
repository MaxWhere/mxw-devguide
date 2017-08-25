// Copyright (C) 2016-2017 MISTEMS Ltd.

const { ipcRenderer } = require('electron')
const WebSocket = require('ws')
const port = 1337
let sending = true
let wss = null

startServer = function() {
  if (wss) {
    sending = true
  } else {
    // create the server
    wss = new WebSocket.Server({ port: port })
    wss.on('connection', function connection(ws) {
      setInterval(() => {
        if (sending) {
          // console.log('sending data')
          ws.send(JSON.stringify({
            x: Math.random() * 400 - 200,
            y: Math.random() * 200 - 100, 
            z: Math.random() * 400 - 200
          }))
        }
      }, 500)
    })
    // notify app to connect client
    ipcRenderer.send('server-started', port)
  }
}
stopServer = function() {
  if (wss) {
    sending = false
  }
}