// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 5-jsx-syntax
 * Rendering objects into 3d scene using jsx syntax
 */
const { wom } = require('maxwhere')
const { app } = require('electron')
const path = require('path')

wom.load({
  title: '5-jsx-syntax',
  navigation: 'coginav-lite',
  // easier resource definition with wom.load
  local: path.resolve(__dirname, '..', 'resources')
}, () => {
  // Same scene as in 2-mesh-light
  // Every jsx tag evaluates into a wom.create call
  // Nested tags becomes children in 3d scene
  // Only one tag can be passed, thus attach mesh and light to
  // a parent node. It eases positioning, too.
  wom.render(
    <node position={{x: 0, y: 0, z: -200}}>
      <mesh
       url='ball.mesh'
       scale={5}
       autophysical={true}
      />
      <light
       y={300}
      />
    </node>
  )
})
.on('quit', app.quit)