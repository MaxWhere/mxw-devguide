// Copyright (C) 2016-2017 MISTEMS Ltd.
const { ipcRenderer } = require('electron')

start = function() {
  ipcRenderer.send('physicals-switch', true)
}
restart = function() {
  ipcRenderer.send('physicals-switch', false)
}