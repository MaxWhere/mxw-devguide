# wom

The `wom` object is the main module in a Minwhere app's lifecycle. It's used to load an app's initial state, create `Node`s and serves as the root `Node` for any application built with wom. Using `wom`, it will launch a native window, where the app can be loaded.

``` js
const wom = require('minwhere').wom

wom.load().on('ready', () => {
  let ball = wom.create('mesh', { url: 'ball.mesh', z: -100 })

  wom.add(ball)
})
```

## Properties
#### `isNativeReady`
A `Boolean` indicating that the native window has been loaded successfully.

#### `isReady`
A `Boolean` indicating that the WOM has been set up successfully and ready to use.

#### `config`
An `Object` storing the configuration properties of the loaded where. It is either read from a `.json` file or an object passed to `wom.load` directly.

#### `configURL`
A `String` that is the absolute URL of the configuration file, if there is one.

#### `camera`
A `Node` that is the camera node of the 3D scene.

## Events
#### `'native ready'`
Indicates that the native window has been loaded successfully.

#### `'ready'`
Indicates that the WOM has been set up successfully and ready to use. Initial objects are presented in the scene.

#### `'quit'`
Indicates that the native window has been closed.

## Methods
If the return value is not specified for a method, the method returns the `Node` itself.

#### `Wom.Component(path)`
Returns a *WOM Component* from the given directory, `component.json` or `.jsx` file `path`.

#### `wom.load(config)`
Clears the current state of the WOM and loads a new one with the given `config`. If `config` is an object it may contain:
- `title`: `String`, the title of the native window, default: *Minwhere Application*
- `width`: `Number`, the width of the native window in pixels, default: *1280*
- `height`: `Number`, the height of the native window in pixels, default: *720*
- `show`: `Boolean`, whether the native window should be displayed, default: *false*
- `resources`: an `[String]`, which are the urls of the resource files (note that not directories) to be loaded to the *cache of Minwhere*.
- `local`: an `[String]`, which are the urls of *directories of resources* to be added to the running app
- `cache`: a `Boolean`, whether the app should use *Minwhere's cache*, default: *true*

#### `wom.clear()`
Clears the whole WOM tree and the cache as well.

#### `wom.reload()`
Clears the WOM and loads back the current configuration.

#### `wom.start(callback)`
Starts the native window.

#### `wom.create(name, options, ...child)`
Creates a new entity or component with the given `options` and `children`. Returns the created `Node`. Note that at this point the `Node` isn't created as a native node. It will only be created when it's added to a parent `Node`.

Supported built-in entities and components:
- [`canvas`](./canvas.md)
- [`light`](./light.md)
- [`mesh`](./mesh.md)
- [`node`](./node.md)
- [`webview`](./webview.md)
- [`component`](./component.md)

#### `wom.addResources(resources)`
Adds the supplied `resources` (a `String` or an array of `String`s), which are **one ore more directories**, to the native rendering.

#### `wom.installComponent(path, name)`
Adds the specified component to the WOM on the given `name` (so you can create these components directly from WOM after this call). The `path` can be a:
- `String`, where it's either the component's `.js<x>` file path directly, or a `component.json` file path, which is a description of the component, or a directory path containing a `component.json` file
- `Object`, where it's either the component object (e.g. a required `.jsx` file), or the component descriptor object.

#### `wom.getAvailableMaterialNames()`
Returns every material name which is ready to use (referenced and parsed by Render module) as Object where property keys are name of resource groups and values are `[String]`s holding material names belonging to that group

#### `wom.setConfig(c)`
sets the app-configuration of wom. Call this method _before_ `wom.load`
`c` contains the following properties:
- `title`: `String`, the title of the native window, default: *Minwhere Application*
- `width`: `Number`, the width of the native window in pixels, default: *1280*
- `height`: `Number`, the height of the native window in pixels, default: *720*
- `'display-mode'`: `String`, the display mode of native window. Possible values are `'maximized'`, `'fullscreen'`, `'manual'`. Default is *'manual'*
- `'display-position'`: Object of {x,y}, position of native window on the screen. Default is the calculated screen center.
- `navigation`: String, name of navigation modes. Possible values are `'coginav'`, `'mixed'`
- `'near-clip'`: Number, near clipping distance of the scene
- `'far-clip'`: Number, far clipping distance of the scene
- `'camera-position'` {x,y,z} Object, initial position of the camera
- `'camera-orientation'` {w,x,y,z} or {angle, axis:{x,y,z}} Object, initial orientation of the camera
- `mediafolder`: `String` default folder of resources
- `show`: `Boolean` whether the native window is visible. Default is *true*

#### `wom.getConfig()`
Returns the appliation-level configuration of wom

#### `wom.setFog(mode, color)`
Sets fog properties in the scene. `mode` shows whether fog is presented (0-off, 1-exp, 2-exp2, 3-linear), `color` is {r,g,b,a} color.

#### `wom.getFog()`
Returns fog settings of the scene as {mode, {r,g,b,a}} Object

#### `wom.setAmbient(o)`
Sets the ambient color of the scene to `o` {r,g,b,a} color

#### `wom.getAmbient()`
Gets the ambient color of the scene as {r,g,b,a} Object

#### `wom.setSkyBox(o)`
Sets the skybox of the scene. `o` is Object of {`enable`: Bool, `material`: String, `distance`: Number}

#### `wom.getSkyBox()`
Gets the skybox properties of the scene as Object of {enable, material, distance}

#### `wom.setBackground(o)`
Sets the background color of the viewport to `o` {r,g,b,a} color

#### `wom.getBackground()`
Gets the background color of the viewport as {r,g,b,a} Object

#### `wom.setFullScreen(enable)`
Sets the native window's full-screen mode. (`enable`: `Boolean`)

#### `wom.getFullScreen()`
Returns whether the native window is in full-screen. (`Boolean`)

#### `wom.setDisplay(display)`
Moves rendering window to `display` which is defined as [`Display`](http://electron.atom.io/docs/api/screen/#the-display-object) object

#### `wom.getDisplay()`
Returns the best matching [`Display`](http://electron.atom.io/docs/api/screen/#the-display-object) for rendering window

#### `wom.setMaximized(enable)`
Maximizes or restires the native window. (`enable`: `Boolean`)

#### `wom.getMaximized()`
Returns whether the native window is maximized. (`Boolean`)
