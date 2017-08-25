/**
 * Example 7-animations
 * Showing animation capabilities of Node and Light
 */
const { app } = require('electron')
const { wom } = require('maxwhere')

wom.load({
  title: '7-animations',
  navigation: 'coginav-lite',
  local: '../resources'
}, () => {
  wom.render(
    <node
     position={{x: 0, y: 0, z: -100}}>
      <light
       y={100}
       done={ l => {
         l.animate('diffuse', {
          from: [{r: 1, g: 1, b: 1}, {r: 1, g: 1, b: 1}, {r: 1, g: 1, b: 1}],
          to: [{r: 1, g: 0, b: 0}, {r: 0, g: 1, b: 0}, {r: 0, g: 0, b: 1}],
          repeat: true // every step starts from white color
         })
         l.animate('specular', {
           to: {r: 1, g: 1, b: 0},
           loop: true // to yellow and back
         })
       }}
      />
      <mesh
       url='ball.mesh'
       x={-50}
       done={ m => {
         m.animate('position', {
           reference: 'relative',
           to: [{x: 0, y: 20, z: -10}, {x: 20, y: -40, z: 40}],
           duration: [ 1, 1.5 ],
           loop: true, // both moves are played backward
           cubic: 'ease-out-circ'
         })
       }}
      />
      <mesh
       url='ball.mesh'
       done={ m => {
         m.animate('scale', {
           to: {x: 0.5, y: 3, z: 1}, // string out with scale
           duration: 1.5,
           cubic: 'ease-in-quad',
           loop: true,
         })
       }}
      />
      <mesh
       url='ball.mesh'
       x={50}
       done={ m => {
         m.animate('orientation', {
           reference: 'relative',
           to: {w: 0.707, x: 0, y: 0.707, z: 0},
           repeat: true, // will rotate for ever and never back back
           cubic: [0, 0, 1, 1], // linear
           duration: 1
         })
       }}
      />
    </node>
  )
})
.on('quit', app.quit)
