const { ipcRenderer } = require('electron')

start = function() {
  ipcRenderer.send('physicals-switch', true)
}
restart = function() {
  ipcRenderer.send('physicals-switch', false)
}