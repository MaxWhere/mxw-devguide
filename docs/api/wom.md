# wom

> The `wom` object is the main module of a maxwhere app. 

It's used to manage app lifecycle, access maxwhere engine resources and features and populate 3d scene. It is subclass of [`Node`](node.md) class and serves as a root node for every object in the 3d scene. 

_`Node` methods can be called on `wom` object. As a root node, changes applied to `Node`'s children will be applied for every object in the scene._

``` js
const { wom } = require('maxwhere')
const { app } = require('electron')
wom.start({
  title: 'Hello 3D scene!'
}).on('quit', app.quit)
```

## Events

#### `'native ready'`
Indicates that the native window has been loaded successfully.

#### `'ready'`
Indicates that the `wom` has been set up and ready to use. Initial objects are successfully added to the scene.

#### `'inserted'`
Indicates that a node is inserted into 3d scene by `Node.create`

 * Event `Node` The inserted `Node` object

#### `'loading-state-changed'`
Indicates that state of the `Mesh` loading process has been changed

 * Event Object
   * `loaded` Number Number of already loaded `Mesh` objects
   * `total` Number Total number of `Mesh` objects to load
   * `percent` Number Current state of `Mesh` loading process in [0-1] interval

#### `'unloading-state-changed'`
Indicates that state of the `Mesh` unloading process has been changed

 * Event Object
   * `unloaded` Number Number of already unloaded `Mesh` objects
   * `total` Number Total number of `Mesh` objects to unload
   * `percent` Number Current state of `Mesh` unloading process in [0-1] interval

#### `'clear-complete'`
Emitted when `wom.clear` successfully finished with unloading the scene

#### `'resize'`
Indicates that the native window has been resized. When emitted `wom.appConfig` already has up-to-date `width` and `height` values.

 * Event Object
   * `w` Number New window width in pixels
   * `h` Number New window height in pixels

#### `'dpi-change'`
Indicates that the pixel scale factor of native high-DPI window has been changed. When emitted `wom.appConfig` already has up-to-date `displayDPI` value.

 * Event Object
   * `dpi` New scale factor

_Even is emitted only if high-DPI is enabled (appConfig.highDPI)_

#### `'before-close'`
Called before engine is shut down by `wom.close`. In this stage the 3D scene and `wom` tree are still intact.

#### `'after-close'`
Called after engine is shut down by `wom.close`. In this stage the 3D scene and `wom` tree are already cleared.

#### `'quit'`
Indicates that the native window has been closed.

## Properties

#### `wom.camera`
A `Node` that is the camera node of the 3D scene.

#### `wom.appConfig`
An Object storing the configuration properties of the app. It is either read from a `.json` file or an object passed to `wom.load` or `wom.start` directly.

It can contain the following properties:
* `title` String - Window title. Default `MaxWhere`
* `width` Number - Window width in pixels. Default `1280` _Not applied if less than `minWidth`_
* `height` Number - Window height in pixels. Default `720` _Not applied if less than `minHeight`_
* `show` Boolean - Is window visible. Default `true`
* `displayMode` String - Displaying mode of window. Possible values: `manual`(default), `maximized`, `fullscreen`. For non-`manual` display modes `width` and `height` are calculated automatically!
* `displayPosition` Object {x, y} - Window's position in the frame of displays. Default is the center of the primary display.
* `displayDPI` Number (Positive) - Pixel scale factor of the window.  Default is the scale factor of primary display
* `highDPI` Boolean - Enable high-DPI resolution display. Default `true` _If disabled, `displayDPI` is initialized to `1.0`_
* `worldResolutionScale` Number (Positive) - Scale of 3d scene (world) resolution according to window (overlay) full resolution. Default is `1 / displayDPI` _For high-DPI displays it's usually unnecessary to render 3d world in full resolution_
* `navigation` String - The 3D navigation mode. Possible values: `'coginav-lite'` (default), `coginav`
* `navigationAutoSwitch` Boolean - Is 3D navigation automatically switched for right click. Default `true` _Should be `false` for full control over navigation states_
* `crosshair` Boolean - Is crosshair enabled in 3D navigation mode. Default `true`
* `minWidth` Number - Minimum window width in pixels. Default `800`
* `minHeight` Number - Minimum window height in pixels. Default `600`
* `logFolder` String - Path to folder where the log file should be generated. Default is `%appdata%` (`C:\Users\<username>\AppData\Roaming`) on Windows and `/Users/<username>/Library/Preferences` on MacOS
* `splash` Object - Splash screen options. Splash screen is displayed during the startup if defined. Default is undefined. _Splash is displayed from start until the first appearance of the native window. If the window is visible it's `'native ready'`, otherwise it's the first call of `wom.showWindow`_
  * `url` String - URL of splash screen html to display.
  * `width` Number - Width of slash screen in pixels. Default `640`
  * `height` Number - Height of slash screen in pixels. Default `480`
* `AAType` String - Spatial anti-aliasing mode of 3d scene. Possible values are `OFF` (default), `FXAA` and `MSAA`
* `AAHint` Number - `MSAA` multisampling option. Possible values are `2`, `4`, `8` (default)

#### `wom.whereConfig`
An Object storing the configuration properties of the loaded where. It is either read from a `.json` file or an object passed to `wom.load` directly. It's a superset of `wom.appConfig` and passed to `wom.start` after processing.

It can contain the following properties:
* `local` String[] - Resource folder paths of the where (absolute path or relative to `.json` containing folder). Default is empty
* `environment`: Object - Environmental configuration
  * `background` Object {r, g, b, a} - Viewport background color. Default `{r: 0.4, g: 0.4, b: 0.4, a: 1}`
  * `ambient` Object {r, g, b, a} - Scene ambient light color. Default `{r: 0.3, g: 0.3, b: 0.3, a: 1}`
  * `fog` Object - Fog properties
    * `mode` Number - Fog density mode. Possible values describing the fog density increase: `0`(default): fog disabled, `1`: Exponential, `2`: Squared exponential, `3`: Linear.
    * `color` Object {r, g, b, a} - Fog color. Default `{r: 1, g: 1, b: 1, a: 1}`
    * `expDensity` Number - Fog density in mode `1`, `2`. Value range is `[0-1]`. Default `0.001`
    * `linearStart` Number - Fog start distance in mode `3`. Default `0.0`
    * `linearEnd` Number - Fog full density distance in mode `3`. Default `1.0`
  * `skybox` Object - Skybox of the scene
    * `material` String - Name of the material the skybox will use 
    * `enable` Boolean Is skybox enabled. Default is `false` and is automatically `true` if `material` is defined
    * `distance` Number - Distance from the camera to each plane of the skybox. Default `5000`
* `camera` Object - Camera of the scene
  * `position` Object  {x, y, z} - Camera position in world coordinates. Default `{x: 0, y: 0, z: 0}`
  * `orientation` Object {w, x, y, z} or {angle: Number, axis: {x, y, z}} - Camera orientation in world frame. Default `{w: 1, x: 0, y: 0, z: 0}`.
  * `limits` Object - Movement boundaries of camera. If distance between `min` and `max` is zero, no limits are set.
    * `min` Object {x, y, z} - Left-bottom-far corner of bounding box. Default `{x: 0, y: 0, z: 0}`
    * `max` Object {x, y, z} - Right-top-near corner of bounding box. Default `{x: 0, y: 0, z: 0}`
  * `nearClip` Number - Near clip distance of camera. Default `1.0`
  * `farClip` Number - Far clip distance of camera. Default `50000.0`
  * `fovY` Number - Vertical field of view angle in degrees. Default `45.0`
* `physicalLimits` Object - Physical limits for 3D objects of the scene. Every value adds one physical boundary separately directed to scene origin. Default is empty. _Effects object with attached physical hitshape only_
  * `x` Object - Physical boundaries along `x` axis.
    * `min` Number
    * `max` Number
  * `y` Object - Physical boundaries along `y` axis.
    * `min` Number
    * `max` Number
  * `z` Object - Physical boundaries along `z` axis.
    * `min` Number
    * `max` Number
* `components` Object - Key-Value Map of components to install. Installed components can be used in initial scene description in `main` Default is empty
    * `<component name>...` String - Component path as String
* `main` String - Script describing initial scene to load. js or jsx files are accepted. _Content of script will be required and passed to `wom.render`_
* <+ any `appConfig` property>

#### `wom.whereConfigURL`
A String that is the absolute URL of the where configuration files (if read from a `.json`, it's automatically assigned to the containing folder).

#### `wom.resourcePaths`
An Object of Resource groups and corresponding resource folder paths added to `wom` (keys: String - group name, values: String[] resource locations)

#### `wom.isNativeReady`
A Boolean indicating that the native window has been loaded successfully. _When turns true, `'native ready'` event is emitted_

#### `wom.isReady`
A Boolean indicating that the `wom` has been set up successfully and ready to use.

#### `wom.isQuitting`
A Boolean indicating that the maxwhere engine is quitting. _When turns true, `'quit'` event is emitted_

## Methods

If the return value is not specified the method returns `wom` itself.

### lifecycle methods

#### `wom.start([opts, callback])`
Starts maxwhere engine using provided options. Opens a new native window with an empty scene.

* `opts` Object (optional) - Options for the app, can contain the same properties as `wom.appConfig`
* `callback` Function (optional) - Called when maxwhere engine is successfully started

Example
```js
wom.start({
  displayMode: 'maximized',
  title: 'MaxWhere',
  navigation: 'coginav-lite',
  navigationAutoSwitch: false,
  crosshair: false,
  highDPI: process.platform !== 'darwin', // disable retina
  AAType: 'MSAA',
  AAHint: 8,
  splash: {
    width: 800,
    height: 450,
    url: path.join(__dirname, 'splash.html')
  },
  show: false
}, () => { /* ready */ })
```

#### `wom.load([config, callback])`
Starts maxwhere engine and load initial scene using provided options. Opens a new native window with the initial scene. Clears the current scene if not empty!

* `config` Object | String
  - Configuration object, which can contain the same properties as `wom.config`
  - Path to `.json` file containing configuration object
* `callback` Function (optional) - Called when the initial 3d scene is built in `wom`. _This state not necessarily means that object creation is finished (use `'ready'` callback for react when every `mesh` is loaded)_

Example
```js
// Extracted example for a `wom.load(path/to/where.json)`
wom.load({
  main: 'index.jsx',
  environment: {
    background: { r: 0.12, g: 0.16, b: 0.24, a: 1 },
    ambient: { r: 0.12, g: 0.16, b: 0.24, a: 1 },
    skybox: { material: 'Erad_skybox' }
  },
  camera: {
    position: {
      x: -368.279052734375,
      y: 421.9214782714844,
      z: -605.9902954101562
    },
    orientation: {
      w: -0.23730319738388062,
      x: 0.03828200697898865,
      y: 0.9582870602607727,
      z: 0.15462137758731842
    },
    fovY: 60
  },
  local: './resources',
  components: {
    'material-painter': './components/material-painter/component.json'
  }
})
```

#### `wom.clear()`
Clears the entire 3d scene by removing every child node of `wom`

#### `wom.reload([callback])`
Reloads the scene by calling `wom.load` with the current configuration. This means that the scene will be cleared and only objects described in `whereConfig` will be created again.

* `callback` Function (optional) - Called when the scene is reloaded. _This state not necessarily means that object creation is finished (use `'ready'` callback for react when every `mesh` is loaded)_

#### `wom.close()`
Shuts down the maxwhere engine and clears the 3d scene (destroys `wom` tree). _During the run of this function 'before-close' and 'after-close' are emitted_

### wom management

#### `wom.create(name, opts[, children])`
Creates an element with the provided type and options. The created element becomes a child of `wom` root node.

 _The created element is not rendered into the 3d scene automatically! For built-in types the created element is an object in `wom` tree, while for custom types rendering is up to provided `render` function_

* `name` String | Object | Function 
  - Name of the element type to create. Type name can be built-in element or installed component.
  - Create element from a plain component descriptor object. Provided object is passed to `Component` constructor then `init` (with `(opts)`) and `render` (with `(opts, children)`) is called on returned component.
    * `init` Function
    * `render` Function
  - Functional element builder. It will be called with `(opts)` then if returned object has `render` attribute (Function) `render` will be called with `(opts, children)`
* `opts` Object - Options passed to constructor of element type. For built-in elements consult the documentation of the specific type for complete attribute list. For installed components and functional builders see the user-defined description of the specific type.
* `children` Object[] (optional) - An array of child elements to append to the created element.

Returns `element` - An instance of a built-in element types or an installed component type.

Supported built-in types and components:
- [`node`](./node.md)
- [`mesh`](./mesh.md)
- [`light`](./light.md)
- [`canvas`](./canvas.md)
- [`webview`](./webview.md)
- [`overlay`](./overlay.md)
<!-- - [`browser`](./browser.md) -->
- [`component`](./component.md)

```js
wom.load({
  local: './resources' // contains ball.mesh
}).on('ready', () => {
  let ball = wom.create('mesh', {
     url: 'ball.mesh',
     z: -100
  })
  wom.render(ball) // inherited from `Node`
})
```

_Alias: `wom.createElement(name, opts[, children])`_

#### `wom.installComponent(path, name[, type])`
Installs the specified component as available `wom` element type. After installing components they can be created directly with `wom.create`.
* `path` String | Object 
  - Path of component descriptor file. Can point to `.js<x>` file directly or a `.json` file which is a description of the component. If points to a folder function will look for `component.json` file in it.
  - Component descriptor object or a component object (e.g. a required `.jsx` file)
* `name` String - The name of the component to install
* `type` String (optional) - Type of component. If it's `'internal'`, every Where can use installed component. Otherwise `wom.clear` will uninstall it. Default is `'where'` (non-internal)

#### `wom.setAppConfig(config[, done])`
Appends the specified configuration object to `wom`'s current `appConfig` (overwriting common properties) and applies it.
* `config` Object - Application configuration to set (For property list see `wom.appConfig`)
* `done` Function (optional) - Called when the configuration is set successfully.

#### `wom.resetAppConfig(config[, done])`
Resets `appConfig` to its default state appended with the specified configuration and applies it.
* `config` Object - Application configuration to set (For property list see `wom.appConfig`)
* `done` Function (optional) - Called when the configuration is set successfully.

#### `wom.setWhereConfig(config[, done])`
Appends the specified configuration object to `wom`'s current `whereConfig` (overwriting common properties) and applies it.
* `config` Object - Where configuration to set (For property list see `wom.whereConfig`)
* `done` Function (optional) - Called when the configuration is set successfully.

#### `wom.resetWhereConfig(config[, done])`
Resets `whereConfig` to its default state appended with the specified configuration and applies it.
* `config` Object - Where configuration to set (For property list see `wom.whereConfig`)
* `done` Function (optional) - Called when the configuration is set successfully.

### resource management

#### `wom.addResources(paths[, base, done])`
Adds folder paths to collection of resource containing paths. It creates and initializes a new resource group and append paths to that group. Any resource used by `wom` elements should be available in one of resource folders at the time of element creation (e.g. mesh and physical obj files)
* `paths` String | String[] - Resource folder paths to add. They can be relative path or absolute path. If given with a single String it will be converted to String[].
* `base` String (optional) - Base folder for relative paths if `paths` are defined relatively. Not used otherwise.
* `done` Function (optional) - Called after the resource group is initialized and populated successfully in maxwhere engine.

Returns String - The random generated ID of the created resource group.

#### `wom.removeResources([groupid, done])`
Removes resource group and associated folder paths in maxwhere engine.
* `groupid` String (optional) - ID of resource group to remove. If no group ID is specified every resource group is removed!
* `done` Function (optional) - Called after the resource group is destroyed and every associated folder path is removed

#### `wom.getAvailableMaterialNames()`
Returns every material name which is available to use by `wom` elements.

Returns Object - Key-Value Map of available material names. Keys are resource group names and values are material names belong to the group
  * `<resource group name>...` String - Material names in String[] contained by the resource group

### maxwhere engine access

#### `wom.setFullScreen(enable)`
Enables or disables native window's fullscreen mode.
* `enable` Boolean - Enable or disable fullscreen mode.

#### `wom.isFullScreen()`
Returns Boolean - Is native window in fullscreen mode currently.

#### `wom.setDisplay(display)`
Moves the native window to the center of specified display and resizes it to the size of the display.
* `display` [Display](https://electronjs.org/docs/api/structures/display) - Descriptor of display to move the native window to.
  * `bounds` Object - Position and size description of display
    * `width` Number
    * `height` Number
    * `x` Number
    * `y` Number

#### `wom.getDisplay()`
Gets the current display of the native window. Matching display is calculated from native window's position and size

Returns [Display](https://electronjs.org/docs/api/structures/display)

#### `wom.setAmbient([color])`
Sets the color of scene's ambient light 
* `color` Object (optional) - The color of scene's ambient light. {r, g, b, a} Default `{r: 1, g: 1, b: 1, a: 1}`

#### `wom.getAmbient()`
Returns Object {r, g, b, a} - The current color of scene's ambient light.

#### `wom.setFog([mode, color, expDensity, linearStart, linearEnd])`
Sets fog properties of the scene.
* `mode` Object | Number (optional)
  - Fog options. Containing every other parameter as attributes.
  - Fog density mode. Possible values describing the fog density increase: `0`(default): fog disabled, `1`: Exponential, `2`: Squared exponential, `3`: Linear.
* `color` Object (optional) - Fog color. {r, g, b, a} Default `{r: 1, g: 1, b: 1, a: 1}`
* `expDensity` Number (optional) - Fog density in mode `1`, `2`. Value range is `[0-1]`. Default `0.001`
* `linearStart` Number (optional) - Fog start distance in mode `3`. Default `0.0`
* `linearEnd` Number (optional) - Fog full density distance in mode `3`. Default `1.0`

#### `wom.getFog()`
Returns Object - The current fog properties of the scene. Containing the following attributes:
  * `mode` Number (optional) - Fog density mode. `0` means fog is disabled.
  * `color` `Color` (optional) - Fog color.
  * `expDensity` Number (optional) - Fog exponential density.
  * `linearStart` Number (optional) - Fog linear start distance.
  * `linearEnd` Number (optional) - Fog linear full density distance.

#### `wom.setBackground([color])`
Sets the background color of 3d viewport.
* `color` Object (optional) - The background color of native window to set. {r, g, b, a} Default `{r: 1, g: 1, b: 1, a: 1}`

#### `wom.getBackground()`
Returns Object {r, g, b, a} - The current background color of 3d viewport.

#### `wom.setSkyBox([props])`
Sets the skybox of the scene with the specified options.
* `props` Object (optional)
  * `enable` Boolean (optional) - Is skybox enabled. Default `true`
  * `material` String (optional) - Name of the material the skybox will use 
  * `distance` Number (optional) - Distance from the camera to each plane of the skybox. Default `5000`

#### `wom.getSkyBox()`
Returns Object - The current skybox options of the scene. Containing the following properties:
  * `enable` Boolean - Is skybox enabled.
  * `material` String - Material name of skybox.
  * `distance` Number - Distance of skybox

#### `wom.getCameraFov()`
Returns Number - The vertical angle of `wom` camera's Field of View in degrees.

#### `wom.setCameraFov(fovy)`
Set vertical field of view angle
* `fovy` Number - New field of view angle in degree

#### `wom.getCameraLimits()`
Return Object - the movement boundaries of 3d scene's camera
  * `min` Object {x, y, z} - Left-bottom-far corner of bounding box.
  * `max` Object {x, y, z} - Right-top-near corner of bounding box.

#### `wom.setCameraLimits(limits)`
Sets the movement boundaries of 3d scene's camera
* `limits` Object - Limit of movement
    * `min` Object {x, y, z} - Left-bottom-far corner of bounding box.
    * `max` Object {x, y, z} - Right-top-near corner of bounding box.

#### `wom.getCameraClipDistances()`
Return Object - The clipping distances of 3d scene's camera. _Objects behind far clip distance or before near clip distance are not rendered_
  * `near` Number - Near clip distance of camera.
  * `far` Number - Far clip distance of camera.

#### `wom.setCameraClipdistances(near, far)`
Set clipping distances of 3d scene's camera. _Objects behind far clip distance or before near clip distance are not rendered_
* `near` Number - Near clip distance of camera.
* `far` Number - Far clip distance of camera.

#### `wom.getPhysicalLimits()`
Returns Object - Physical limits for 3d objects of the scene. _Effects object with attached physical hitshape only_
  * `x` Object - Physical boundaries along `x` axis.
    * `min` Number
    * `max` Number
  * `y` Object - Physical boundaries along `y` axis.
    * `min` Number
    * `max` Number
  * `z` Object - Physical boundaries along `z` axis.
    * `min` Number
    * `max` Number

#### `wom.setPhysicalLimits(limits)`
Set phyiscal limits for 3d objects of the scene. _Effects object with attached physical hitshape only_
* `limits` Object
  * `x` Object - Physical boundaries along `x` axis.
    * `min` Number
    * `max` Number
  * `y` Object - Physical boundaries along `y` axis.
    * `min` Number
    * `max` Number
  * `z` Object - Physical boundaries along `z` axis.
    * `min` Number
    * `max` Number

#### `wom.setSpatialControl(enable)`
Enables or disables spatial control in maxwhere. Mouse movement behavior and visiblity of 2D mouse cursor and 3D crosshair (if enabled) changes according to the spatial control state. Camera is not manipulated in 2D cursor mode (set `false`) but mouse events are sent to navigation controller in 3D crosshair mode (set `true` - Coginav rotates the camera).
* `enable` Boolean - Enable or disable spatial control in maxwhere.

Spatial Control | `true` | `false`
---|---|---
Camera manipulation  |  :white_check_mark:  |  :x:  |
3d crosshair  |  :white_check_mark:  |  :x:  |
Overlay manipulation  |  :x:  |  :white_check_mark:  |
2d cursor  |  :x:  |  :white_check_mark:  |

#### `wom.isSpatialControlEnabled()`
Gets the current state of spatial control. 2D cursor mode returns `false` while 3D crosshair mode returns `true`

Returns Boolean - Is spatial control enabled.

#### `wom.holdSpatialControl(hold)`
Holds the spatial control of 3d scene. Disable/enable **every** input event propagation in the maxwhere engine.
* `hold` Boolean - Enable or disable spatial control

#### `wom.setCursor(type[, data, w, h, x, y, scale])`
Sets the mouse cursor style in maxwhere. Final look depends on OS iconset.
* `type` String - Cursor type. Possible values: `default`, `context-menu`, `text`, `wait`, `crosshair`, `progress`, `nwse-resize`, `nw-resize`, `se-resize`, `nesw-resize`, `sw-resize`, `ne-resize`, `ew-resize`, `w-resize`, `e-resize`, `na-resize`, `s-resize`, `n-resize`, `move`, `all-scroll`, `pointer`, `custom`
* `data` `Buffer` (optional) - Image data of `custom` type cursor provided as RGB bitmap. Default `null`
* `w` Number (optional) - Width of `custom` type cursor image. Default `0`
* `h` Number (optional) - Height of `custom` type cursor image. Default `0`
* `x` Number (optional) - Horizontal position of `custom` type cursor in screen coordinates. Default `0`
* `y` Number (optional) - Vertical position of `custom` type cursor in screen coordinates. Default `0`
* `scale` Number (optional) - Scale of cursor.  Default `1`

#### `wom.setCrosshairEnabled(enable)`
Enables or disables the default native crosshair of maxwhere. If disabled, 3D crosshair mode will show nothing on the screen center but still will activate mouse movement capture and manipulate camera. _Useful for costumizing crosshair's look_
* `enable` Boolean - Enable or disable native crosshair.

#### `wom.isCrosshairEnabled()`
Returns Boolean - Is default native crosshair enabled.

#### `wom.showWindow()`
Shows the native window.

#### `wom.hideWindow()`
Hides the native window.

#### `wom.isWindowVisible()`
Returns Boolean - whether the native window is visible

#### `wom.getWindowSize()`
Returns Object - The current size of native window. _Window size is in raw pixels, which is multiplied with pixel scale factor_
  * `width` Number
  * `height` Number

#### `wom.setWindowSize(width, height)`
Sets the size of native window. _Window size should be in raw pixels, which is multiplied with pixel scale factor_
* `width` Number - Width of window in pixels
* `height` Number - Height of window in pixels

#### `wom.getWindowPixelScaleFactor()`
Return the native window's pixel scale factor. _Factor is automatically adjusted when the window is moved or changed display. See 'dpi-changed' event_

#### `wom.getWindowTitle()`
Returns String - the current title of the native window

#### `wom.setWindowTitle(title)`
Sets the title of native window
* `title` String

#### `wom.maximize()`
Maximizes the native window

#### `wom.unmaximize()`
Restore the native window if it's maximized.

#### `wom.isMaximized()`
Returns Boolean - Is native window maximized.

#### `wom.setInputGrab(enable)`
Enables or disables mouse input grab on native window. When mouse is grabbed by the window user is not able to leave the window's working area with the cursor.
* `enable` Boolean - Enable or disable mouse input grab on native window.

#### `wom.isInputGrabbed()`
Returns Boolean - Is mouse input grabbed by native window.

#### `wom.setWorldRendering(render)`
Sets whether the 3d scene should be rendered or not. _Overlays are keep rendered even when 3d scene is not_
* `render` Boolean - Enable or disable 3d rendering

#### `wom.isWorldRendering()`
Returns Boolean - Whether the 3d scene is rendering. _Overlays are keep rendered even when 3d scene is not_

#### `wom.setCurrentSession(sessionName)`
Sets the current session of `wom`. _Sessions are used for managing browser local data_
* `sessionName` String - Name of session to use.

#### `getCurrentSession()`
Returns [`Session`](https://electronjs.org/docs/api/session#class-session) - The currently used session of `wom`.

<!--  Use installComponent instead -->
<!-- ### component

#### `wom.Component(path)`
Creates a builder function of a new component from the provided descriptor file.
* `path` String - Path of component descriptor file. Can point to `component.json` or `.js<x>` file.

Returns Function - The builder function for a new `wom` component. It creates new `Component` by passing `path` to component's constructor, then initializes and returns it. The function can be called with `opts` parameter and returns `c` where:
  * `opts` any - Containing initializer parameters passed to created component's `init` function
  * `c` `Component` - The created `wom` component

```js
example required
```
-->
## Maxwhere engine event listeners
Listeners can be registered both for `wom`'s own event types and for events emitted from 3d scene by the engine. `wom`'s own events are described in `Events` section, while 3d events are listed in listener functions specifically.

#### `wom.on(eventName, handler)`
Registers an event listener. Handler function will be called every time when the specified event is fired in maxwhere engine or `wom`.
* `eventName` Object | String
  - As Object: Event type descriptor
    * `type` String - Event name to handle. Possible values are the same as for String type `eventName`
    * `subject` String (optional) - Name of event's subject to register. Listener will be called only if event's subject matches this name. 
    * `object` Object (optional) - Subject of event to register for `input-mouse` type events. Listener will be called only if mouse cursor is over the specified item. Object type is wrapped maxwhere engine object. `canvas` and `physical` type `wom` elements can be passed here using `nativeRender` attribute.
    <!-- TODO: we can pass object attrib here for targeted event subscription!!! -->
  - As String: Event name to handle. It can be the name of any maxwhere or `wom` event. If a maxwhere event with this name exists the function will register listener to maxwhere engine, otherwise it register listener to `wom` itself. Accepted `wom` events are listed in `Events` section. Accepted maxwhere event names are the followings:
    * `node-create`
    * `node-delete`
    * `node-position`
    * `node-orientation`
    * `node-pose`
    * `node-scale`
    * `node-parent`
    * `node-visible`
    * `light-create`
    * `light-delete`
    * `light-type`
    * `light-diffuse`
    * `light-specular`
    * `light-attenuation`
    * `light-direction`
    * `light-spotrange`
    * `light-visible`
    * `visual-create`
    * `visual-delete`
    * `visual-filename`
    * `visual-material`
    * `visual-visible`
    * `visual-save`
    * `manualvisual-create`
    * `manualvisual-delete`
    * `manualvisual-clear`
    * `manualvisual-updatedirty`
    * `manualvisual-material`
    * `manualvisual-dynamic`
    * `manualvisual-visible`
    * `material-create`
    * `material-clone`
    * `material-delete`
    * `material-diffuse`
    * `material-ambient`
    * `material-specular`
    * `material-emissive`
    * `material-shininess`
    * `material-depthcheck`
    * `material-depthwrite`
    * `material-transparent`
    * `material-recieveshadow`
    * `material-lighting`
    * `material-culling`
    * `material-shaderparamset`
    * `material-save`
    * `meshanimation-create`
    * `meshanimation-update`
    * `meshanimation-play`
    * `meshanimation-pause`
    * `meshanimation-stop`
    * `meshanimation-delete`
    * `label-create`
    * `label-delete`
    * `label-visible`
    * `label-caption`
    * `label-offset`
    * `label-charheight`
    * `label-color`
    * `label-ontop`
    * `canvas-create`
    * `canvas-delete`
    * `canvas-visible`
    * `canvas-zorder`
    * `canvas-passive`
    * `canvas-updatebuffer`
    * `canvas-size`
    * `canvas-offset`
    * `canvas-resolution`
    * `canvas-inview`
    * `view-create`
    * `view-delete`
    * `view-fov`
    * `view-nearclip`
    * `view-farclip`
    * `view-offset`
    * `view-orientation`
    * `physical-create`
    * `physical-delete`
    * `physical-collision`
    * `physical-debugdraw`
    * `input-mouse`
    * `input-keyboard`
    * `input-text`
    * `interpolator-info`
    * `render-windowsize`
    * `render-fullscreen`
    * `render-maximize`
    * `render-displayposition`
    * `render-window-show`
    * `render-window-hide`
    * `render-window-enter`
    * `render-window-leave`
    * `render-cursor`
    * `render-request-raytest`
    * `spatialctrl-enable`
    * `spatialctrl-state`
    * `render-crosshair-enable`
    * `render-crosshair-props`
    * `render-fpspanel`
    * `render-skybox`
    * `render-sceneambient`
    * `render-viewportbackground`
    * `render-fog`
    * `render-resource-create`
    * `render-resource-add`
    * `render-resource-init`
    * `core-quit`
    * `click` (`input-mouse` sub-type)
    * `contextMenu` (`input-mouse` sub-type)
    * `dblclick` (`input-mouse` sub-type)
    * `strafeclick` (`input-mouse` sub-type)
    * `mouseDown` (`input-mouse` sub-type)
    * `mouseEnter` (`input-mouse` sub-type)
    * `mouseLeave` (`input-mouse` sub-type)
    * `mouseMove` (`input-mouse` sub-type)
    * `mouseUp` (`input-mouse` sub-type)
    * `mouseWheel` (`input-mouse` sub-type)
* `handler` Function - Handler function taking `event` as argument where `event` is an Object containing different properties according to the event type.
  - Common event properties:
    * `group` String - Event group name. Events are group by usage categories. Event name prefix in `eventName` is identical to group name.
    * `type` String - Event type name. Possible values are the same as for `eventName`.
    * `subject` String - Name of event's subject. _Only 3D object related events using valid name here_
    * `details-<name>...` any - Custom event attribute which can contain any basic js type. (e.g `spatialctrl-state` has `details-to` String custom attribute as the name of coginav state)
  - Properties for `input-text` type:
    * `text` String - Input text.
  - Properties for `input-keyboard` type (key representation follows [SDL2's way](https://wiki.libsdl.org/SDL_Keycode):
    * `type` String - Action type name. Possible values: `keyDown`, `keyUp`.
    * `keyCode` Number - Key code representation of key.
    * `scanCode` Number - Scan code representation of key. 
    * `keyName` String - Name of key.
    * `modShift` Boolean - Is Shift key pressed.
    * `modCtrl` Boolean - Is Ctrl key pressed.
    * `modAlt` Boolean - Is Alt key pressed.
    * `modGui` Boolean - Is Gui key pressed (a.k.a. meta key, command on _macOS_, win key on _Windows_).
    * `modNum` Boolean - Is NumLock on.
    * `modCaps` Boolean - Is CapsLock on.
  - Properties for `input-mouse` type (based on [DOM MouseEvent](https://developer.mozilla.org/en/docs/Web/API/MouseEvent))
    * `target` String - Name of mouse event target physical object in 3d scene. (hovered object)
    * `type` String - Sub-type name of `input-mouse`. Possible values are listed in `eventName` with '(input-mouse sub-type)' notation
    * `button` String - Triggering mouse button of the event. Possible values: `left`, `right`, `middle`, `none`, `browser-back`, `browser-forward`.
    * `buttonbitmask` Number - Bitmask of button states. Binary digits of buttons are: `left:0`, `middle:1`, `right:2`. (e.g. holding right and left button results `5` - `2^0 + 2^2`)
    * `is3d` Boolean - Is pointed object 3D object.
    * `isOverlay` Boolean - Is pointed object overlay.
    * `ctrlKey` Boolean - Is Ctrl key pressed.
    * `shiftKey` Boolean - Is Shift key pressed.
    * `altKey` Boolean - Is Alt key pressed.
    * `metaKey` Boolean - Is Meta key pressed (a.k.a. gui key, command on _macOS_, win key on _Windows_).
    * `screenPosProportional` Object {x, y} - Screen position of cursor proportional to screen size as percentage.
    * `screenPosPixels` Object {x, y} - Screen position of cursor in pixels.
    * `deltaPosProportional` Object {x, y} - Delta mouse movement proportional to screen size as percentage.
    * `deltaPosPixels` Object {x, y} - Delta mouse movement in pixels.
    * `spacePos` Object {x, y, z} - 3D position of the cursor. Intersection coordinates between the pointed 3D object's physical hitshape and mouse ray originating from cursor's screen coordinate and pointing into 3D scene (-Z direction). Position is defined in scene's world coordinates.
    * `spaceNormal` Object {x, y, z} - Normal of pointed 3D object.
    * `relativePosProportional` Object {x, y} - Position projected to area of a `canvas` (or any derived) type 3D object proportional to `canvas` size as percentage.
    * `relativePosPixels` Object {x, y} - Position projected to area of a `canvas` (or any derived) type 3D object in pixels.
    * `detail` Number - Custom attribute. For `click` event it holds number of consecutive clicks.
    * `duration` Number - Duration between mouse press and release events for click type events in milliseconds
    * `cancelable` Boolean
    * `bubbles` Boolean
    * `timestamp` Number - Timestamp of event in milliseconds. Defines when the event arrives in maxwhere engine's event loop.
  - `mouseWheel` sub-type of `input-mouse` type contains every attributes described for any `input-mouse`, plus the followings:
    * `delta` Object {x, y, z} - Delta wheel movement. `y` coordinate defines the ordinary wheel direction
    * `deltamode` Number - Delta mode (`0`: pixel `1`: line `2`: page)

#### `wom.once(eventName, handler)`
Registers an event listener. Handler function will be called for the first time when the specified event is fired in maxwhere engine or `wom`. After the first event the listener will be unregistered.
* `eventName` Object | String - Identical to `wom.on`
* `handler` Function - Identical to `wom.on`

#### `wom.removeListener(eventName, handler)`
Unregisters an event listener for the specified event. Handler function should be identical to the one which used to register the listener. That is it's not enough to have the same function body they should be the same javascript object. _Consequently equivalent lambdas are not accepted_
* `eventName` Object | String - Identical to `wom.on`
* `handler` Function - Identical to `wom.on`