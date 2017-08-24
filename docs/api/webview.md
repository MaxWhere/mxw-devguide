# Webview

> Canvas object which renders a Chromium webview.

`Webview` is subclass of [`Canvas`](canvas.md) and [`Node`](node.md). It extends `Canvas` with the capability of rendering Chromium webview into the underlying texture. Required browsing facilities are implemented in this class. It instantiates an offscreen electron `BrowserWindow` and sends the webview buffer into inherited `Canvas` texture.

## new Webview([options])
To create and insert `Webview` into `wom` tree use `wom.create('webview', [options])`!
* `options` Object (optional)
  * `url` String (optional) - URL to load. Default is `'about:blank'`
  * `inputDisabled` Boolean (optional) - Disable mouse and key inputs for `BrowserWindow` of this `Webview`. Default is `true`.
  * `directKeyEvent` Boolean (optional) - Determines whether the `BrowserWindow` of `Webview` is listening for any key event (`false`) or only for those emitted while the mouse hovers the `Webview` (`true`). Hover is detected either by physical shape (`in-game`) or mouse position intersection (`overlay`) Default is `true`.
  * `nodeIntegration` Boolean (optional) - Enable node integration in `BrowserWindow` of `Webview`. Default is `false`.
  * `webSecurity` Boolean (optional) - Enable web security in `BrowserWindow` of `Webview`. Default is `true`.

_`options` are superset of `Canvas` constructor's options (and `Node`'s as well)! Only `Webview` specific properties are listed here. For the rest see `new Canvas([options])` and `new Node([options])` documentation_

## Instance Events
See `Canvas` instance events for inherited events.

#### `'ready'`
Emitted when both `Webview` and electron `BrowserWindow` are ready and initial URL is loaded.

## Instance Properties
See `Canvas` instance properties for inherited properties.

#### `Webview.browserWindow`
A `BrowserWindow` - The electron `BrowserWindow` rendering into `Webview`

#### `Webview.isReady`
A Boolean showing whether the `Webview` is ready and initial URL is loaded.

#### `Webview.mouseInputDisabled`
A Boolean showing whether mouse input is disabled for `BrowserWindow`.

#### `Webview.keyboardInputDisabled`
A Boolean showing whether keyboard input is disabled for `BrowserWindow`.

#### `Webview.isMouseOver`
A Boolean showing whether mouse is over the `in-game` type `Webview`.

#### `Webview.directKeyEvent`
A Boolean showing whether `BrowserWindow` recieves any key event or only those emitted while the mouse hovers the `Webview`.

#### `Webview.props.url`
A String - The currently loaded URL of `BrowserWindow`

## Instance methods
See `Canvas` instance methods for inherited methods.

If the return value is not specified the method returns this `Webview` instance.

#### `Webview.loadURL(url[, options])`
Loads an URL into `BrowserWindow` of `Webview`
* `url` String - The URL to load
* `options` Object (optional) - Options passed to electron `WebContents.loadURL`

#### `Webview.enableMouseInput()`
Enables mouse input handling of `BrowserWindow`.

#### `Webview.enableKeyboardInput()`
Enables keyboard input handling of `BrowserWindow`.

#### `Webview.disableMouseInput()`
Disables mouse input handling of `BrowserWindow`.

#### `Webview.disableKeyboardInput()`
Disables keyboard input handling of `BrowserWindow`.

#### `Webview.enableInput()`
Enables mouse and keyboard input handling of `BrowserWindow`.

#### `Webview.disableInput()`
Disables mouse and keyboard input handling of `BrowserWindow`.

#### `Webview.setBrowserWindow(win)`
Sets the `BrowserWindow` which renders into `Webview`. If replace is required removes registered listeners on previous one.
* `win` `BrowserWindow` - electron `BrowserWindow` to set for rendering

#### `Webview.setResolution(width, height)` (overrides `Canvas.setResolution(width, height)`)
Sets the resolution both for `Canvas` and `BrowserWindow`.
* `width` Number - The resolution width in pixels (Integer) to set.
* `height` Number - The resolution height in pixels (Integer) to set.