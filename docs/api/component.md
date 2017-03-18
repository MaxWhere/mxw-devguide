# Component

Components are essential building blocks of WOM, they can encapsulate resources, overlays, renders and logic into one WOM element so they can be easily rendered and reused.

#### An example:
``` jsx
module.exports = {
  init () {
    console.log('Initializing duck!')
  },
  done (r) {
    console.log('Duck done!')
  },
  render (props, children) {
    return <mesh url='duck.mesh' {...props} scale={0.2}>
      {children}
    </mesh>
  },
  animate (sec) {
    this.nativeRender.animate('scale', {
      to: [ { x: 2, y: 2, z: 2 }, { x: 0.3, y: 0.3, z: 0.3 } ]
      , duration: [ 2, 1 ], loop: true
      , cubic: 'ease-in-out-sine'
    })
  }
}
```

As seen from the example, when you write components, you write plain Javascript `Object`s, with the necessary methods implemented. **Every component has to implement the `render` method,** which returns the native render of the component. Besides render there are two built-in methods you can implement:
- `init`: in this you can initialize things for the component
- `done`: this method gets called after the component is rendered on native side.

Additionally you can implement custom methods, like `animate` above. In every method, the `this` property is the corresponding Component.

#### component.json
Every component can have a JSON descriptor, similar to a `package.json` file in a node.js module. The fields available:
- `main`: `String`, path to the `.js`, `.jsx` file of the component, **required**
- `name`: `String`, the name of the component
- `description`: `String`, a short description of the component
- `resources`: `String` or `[String]`, that specifies the directories of the resources.

``` json
{
  "name": "duck"
  , "main": "index.jsx"
  , "resources": "./resources"
}
```

#### Using a component
You use a component just like any other WOM Node.

``` jsx
const Duck = require('./Duck')

wom.load().on('ready', () => {
  wom.render(<Duck
    scale={2}
    done={ d => d.animate(5) }
  />)
})
```

## Properties
#### `nativeRender`
A native `Node`, which is the value returned by the `render` function. This can be used e.g. in the `done` callback.

#### `overlayURL`
A `String`, which is the path of the overlay `.html` file.

#### `overlayNode`
The native `Overlay` node of the overlay.

## Methods
#### `c = Component(definition)`
Returns a new component defined by `definition`. `definition` can be a `String`, a path to a Javascript file, to a `component.json` or to a directory containing a `component.json`.
