// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 8-event-handle
 * Using event listeners of wom and 3d objects
 */
const { app } = require('electron')
const { wom } = require('maxwhere')

wom.load({
  title: '8-event-handle',
  navigation: 'coginav-lite',
  local: '../resources'
}, () => {
  // render scene
  let m = (
  <mesh
    position={{x: 60, y: 0, z: -200}}
    url='ball.mesh'
    scale={5}
    autophysical={true}
  />)
  wom.render(m)
  wom.render(
    <node position={{x: -60, y: 0, z: -200}}>
      <mesh
       id='my-mesh'
       url='ball.mesh'
       scale={5}
       autophysical={true}
      />
      <light
       y={300}
      />
    </node>
  )

  // add listeners to Mesh objects
  m.on('click', event => {
    let pos = m.getPosition()
    let t = {
      x: event.spacePos.x - pos.x,
      y: 0,
      z: event.spacePos.z - pos.z
    }
    // translate mesh with x/z vector pointing from
    // origin to clicked point
    m.translate(t)
  })
  let m2 = wom.select('#my-mesh') // select by id
  m2.on('mouseenter', () => {
    m2.animate('scale', {
      to: {x: 1, y: 1, z: 1},
      duration: 2
    })
  })
  m2.on('mouseleave', () => {
    m2.deanimate('scale')
    m2.setScale(5)
  })

  // add listener to generic events
  wom.on('input-keyboard', event => {
    // key logger
    console.log(event.keyName) // -> mxw-core.log
  })
})
.on('quit', app.quit)
