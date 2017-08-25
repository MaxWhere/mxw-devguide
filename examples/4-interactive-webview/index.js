const { ipcRenderer } = require('electron')
const step = 20

// ball variable is available because it was injected here in app.js
moveUp = function() {
  ball.translate(0, step, 0)
}
moveDown = function() {
  ball.translate(0, -step, 0)
}
moveRight = function() {
  ball.translate(step, 0, 0)
}
moveLeft = function() {
  ball.translate(-step, 0, 0)
}
// using ipc channel
turnOffLight = function() {
  ipcRenderer.send('light-switch', false)
}
turnOnLight = function() {
  ipcRenderer.send('light-switch', true)
}