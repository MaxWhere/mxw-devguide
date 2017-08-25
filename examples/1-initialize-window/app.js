/**
 * Example 1-initialize-window
 * Initialize and manipulate maxwhere window
 */
const { wom } = require('maxwhere')
const { app } = require('electron')

// pass window properties
wom.start({
  title: '1-initialize-window',
  'display-mode': 'maximized',
  // right click for switch between 3d and 2d
  navigation: 'coginav-lite'
}, () => {
  // manipulate created window
  setTimeout( () => {
    wom.setBackground({
      r: 0.0, g: 0.484, b: 0.964
    })
    wom.unmaximize()
  }, 3000)
})
// terminate when window is closed
.on('quit', app.quit) 