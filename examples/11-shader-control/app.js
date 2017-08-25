// Copyright (C) 2016-2017 MISTEMS Ltd.
/**
 * Example 11-shader-control
 * Access shader paramters through mesh object
 */
const { app } = require('electron')
const { wom } = require('maxwhere')

wom.load({
  title: '11-shader-control',
  navigation: 'coginav-lite',
  local: '../resources',
}, () => {
  wom.render(<node z={-70} >
    <light y={500} />
    <mesh
      url='ball.mesh'
      autophysical={true}
      done={m => {
        const mc = m.material(m.subvisual(0))
        // Retrieve initial shader parameter value
        let surfcol = [
          mc.shaderValue('SurfacecolorbiasR'),
          mc.shaderValue('SurfacecolorbiasG'),
          mc.shaderValue('SurfacecolorbiasB'),
        ]
        // Change material by adjusting shader parameters
        mc.setSpecular({r: 1, g: 0, b: 0, a: 1})
        setTimeout(() => {
          mc.setShader('Diffusemap', 'tiny_grey.tga')
          mc.setShader('Normalmap', 'tiny_straight_normal.tga')
        }, 10000)
        setInterval(() => {
          surfcol[0] += 0.05
          surfcol[1] += 0.1
          surfcol[2] += 0.15
          surfcol = surfcol.map( i => {
            if(i > 1.0) return 0.0
            return i
          })
          mc.setShader('SurfacecolorbiasR', surfcol[0] )
          mc.setShader('SurfacecolorbiasG', surfcol[1] )
          mc.setShader('SurfacecolorbiasB', surfcol[2] )
        }, 500)
      }}
    />
  </node>)
})
.on('quit', app.quit)
