const { app } = require('electron')
const { wom } = require('maxwhere')
const path = require('path')
const scenePath = path.join(__dirname, 'static', 'scene')

wom.setConfig({
  width: 1280,
  height: 720,
  title: 'Maxwhere - Boilerplate App',
  'display-mode': 'maximized',
  navigation: 'coginav-lite',
  show: false
})
  wom.load(path.join(scenePath, 'where.json')).once('ready', () => {
  wom.showWindow()
   
 })
wom.on('quit', app.quit)