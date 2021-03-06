<root>
  <node
    position={{ x: 0, y: 0, z: 0 }}
    orientation={{ x: 0, y: 0, z: 0, w: 1 }}>
    <light {...{ lighttype: 'directional' }}
      direction={{ x: 0.5, y: 1.0, z: 0.25}}
      diffuse={{ r: 0.45, g: 0.5, b: 0.55, a: 1 }}
      specular={{ r: 0.1, g: 0.1, b: 0.1, a: 1 }}>
    </light>
  </node>

  <node
    position={{ x: 0, y: 0, z: 0 }}
    orientation={{ x: 0, y: 0, z: 0, w: 1 }}>
    <light {...{ lighttype: 'directional' }}
      direction={{ x: -0.75, y: -1.0, z: -0.75}}
      diffuse={{ r: 0.8, g: 0.8, b: 0.8, a: 1 }}
      specular={{ r: 1, g: 1, b: 1, a: 1 }}>
    </light>
  </node>
  <node
    position={{ x: 0, y: -100, z: 0 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh url= 'Ocean.mesh'>
    </mesh>
  </node>

  <maze x={387} y={50} z={-125} />

  <node
    position={{ x: 875, y: 0, z: -250 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-C' {...{ url: 'Block_C_.mesh' }} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
                      shape: 'box',
                      mass: 1.0,
                      offset: {x:0.0, y:-0.15,  z:0.0},
                      width: 5.0,
                      height: 0.3,
                      depth: 7.5
                      })

                   m.addPhysicalShape({
                      shape: 'box',
                      mass: 1.0,
                      offset: {x:0.0, y:2.49,  z:-1.25},
                      width: 5.0,
                      height: 0.02,
                      depth: 5.0
                      })

                   m.addPhysicalShape({
                        shape: 'box',
                        mass: 1.0,
                        offset: {x:0.0, y:1.1,  z:-3.68},
                        width: 5.0,
                        height: 2.8,
                        depth: 0.12
                        })

                   m.addPhysicalShape({
                        shape: 'box',
                        mass: 1.0,
                        offset: {x:2.44, y:1.1,  z:-1.25},
                        width: 0.12,
                        height: 2.8,
                        depth: 5.0
                        })

                   m.addPhysicalShape({
                      shape: 'box',
                      mass: 1.0,
                      offset: {x:1.87, y:2.49,  z:2.50},
                      width: 1.25,
                      height: 0.02,
                      depth: 2.50
                      })
      }}
  />
  </node>

  <node
    position={{ x: 1062.5, y: 125, z: 250 }}
    orientation={{ x: -0, y: 8.74228e-8, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-straight-stairs' {...{ url: 'StraightStair_.mesh'}} autophysical={true}>
    </mesh>
  </node>
  <node
    position={{ x: 375, y: 0, z: -375 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-B' {...{ url: 'Block_B_.mesh'}} physical={{raycast: true}}
        done={ m => {m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:-0.15,  z:1.25},
        width: 5.0,
        height: 0.3,
        depth: 7.5
        })

        m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:2.49,  z:-1.25},
        width: 5.0,
        height: 0.02,
        depth: 2.5
        })

        m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:1.1,  z:-2.43},
        width: 5.0,
        height: 2.8,
        depth: 0.12
        })}
      }/>
  </node>

  <node
    position={{ x: 0, y: 0, z: -250 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-A' {...{ url: 'Block_A_.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:-0.15,  z:0.0},
        width: 2.5,
        height: 0.30,
        depth: 7.5
      })

      m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:2.49,  z:0.0},
        width: 2.5,
        height: 0.02,
        depth: 7.5
      })}
    }
    />
  </node>

  <node
    position={{ x: 875, y: 250, z: 750 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-D' {...{ url: 'Block_D_.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
                 shape: 'box',
                 mass: 1.0,
                 offset: {x:0.0, y:-0.15,  z:0.0},
                 width: 5.0,
                 height: 0.3,
                 depth: 7.5
               })

              m.addPhysicalShape({
                 shape: 'box',
                 mass: 1.0,
                 offset: {x:0.0, y:2.34,  z:2.5},
                 width: 5.0,
                 height: 0.3,
                 depth: 2.5
              })

              m.addPhysicalShape({
                 shape: 'box',
                 mass: 1.0,
                 offset: {x:-1.25, y:2.34,  z:0.0},
                 width: 2.5,
                 height: 0.3,
                 depth: 2.5
              })

              m.addPhysicalShape({
                 shape: 'box',
                 mass: 1.0,
                 offset: {x:1.25, y:2.50,  z:-1.25},
                 width: 2.5,
                 height: 0.07,
                 depth: 5.0
              })

              m.addPhysicalShape({
                shape: 'box',
                mass: 1.0,
                offset: {x:-2.44, y:3.60,  z:-0.0},
                width: 0.12,
                height: 2.8,
                depth: 2.5})

              m.addPhysicalShape({
                shape: 'box',
                mass: 1.0,
                offset: {x:-1.25, y:3.60,  z:-1.19},
                width: 2.5,
                height: 2.8,
                depth: 0.12})

              m.addPhysicalShape({
                shape: 'box',
                mass: 1.0,
                offset: {x:1.25, y:4.99,  z:-0.0},
                width: 7.5,
                height: 0.02,
                depth: 2.5})
            }
      }
    />
  </node>

  <node
    position={{ x: 1250, y: 250, z: 750 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-stairs' {...{ url: 'Block_Stair_.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
                shape: 'box',
                mass: 1.0,
                offset: {x:0.0, y:-0.15,  z:0.0},
                width: 2.5,
                height: 0.3,
                depth: 2.5})

             m.addPhysicalShape({
                shape: 'box',
                mass: 1.0,
                offset: {x:0.0, y:1.25,  z:-1.20},
                width: 2.5,
                height: 2.5,
                depth: 0.1})

             m.addPhysicalShape({
                shape: 'box',
                mass: 1.0,
                offset: {x:0.0, y:1.25,  z:1.20},
                width: 2.5,
                height: 2.5,
                depth: 0.1})
      }}
    />
  </node>


  <node
    position={{ x: 875, y: 500, z: 1375 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh id='movable-Block-E' {...{ url: 'Block_E_.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:-0.15,  z:1.25},
        width: 5.0,
        height: 0.3,
        depth: 2.5})

        m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:-0.63, y:-0.15,  z:-1.25},
        width: 3.75,
        height: 0.3,
        depth: 2.5})

        m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.06, y:1.10,  z:1.25},
        width: 0.12,
        height: 2.8,
        depth: 2.5})

        m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:1.25, y:2.49,  z:1.25},
        width: 2.5,
        height: 0.02,
        depth: 2.5})
      }}
    />
  </node>

  <node
    position={{ x: 538.749, y: 0, z: -300 }}
    orientation={{ x: -0, y: -0.92388, z: -0, w: -0.382683 }}
    scale={{ x: 100, y: 100, z: 100}}>
    <mesh {...{ url: 'House_Plant.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:0.22,  z:0.0},
        width: 0.42,
        height: 0.44,
        depth: 0.42})
      }}
    />
  </node>

  <node
    position={{ x: 1050, y: 500, z: 450 }}
    orientation={{ x: -0, y: -0.707107, z: -0, w: -0.707107 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh {...{ url: 'House_Plant.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:0.22,  z:0.0},
        width: 0.42,
        height: 0.44,
        depth: 0.42})
      }}
    />
  </node>
  <node
    position={{ x: 700, y: 500, z: 1550 }}
    orientation={{ x: -0, y: -1, z: -0, w: 2.98023e-8 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh {...{ url: 'House_Plant.mesh'}} physical={{raycast: true}}
      done={ m => {m.addPhysicalShape({
        shape: 'box',
        mass: 1.0,
        offset: {x:0.0, y:0.22,  z:0.0},
        width: 0.42,
        height: 0.44,
        depth: 0.42})
      }}
    />
  </node>
  <node
    position={{ x: 0, y: -3000, z: 9.651619999999999e-15 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh {...{ url: 'Cloud_A_.mesh'}}>
    </mesh>
  </node>
  <node
    position={{ x: 0, y: 800, z: 9.651619999999999e-15 }}
    orientation={{ x: -0, y: -0, z: -0, w: -1 }}
    scale={{ x: 100, y: 100, z: 100 }}>
    <mesh {...{ url: 'Cloud_B_.mesh' }}>
    </mesh>
  </node>
</root>
