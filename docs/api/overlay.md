# Overlay

> Overlay type Webview object

`Overlay` is subclass of [`Webview`](webview.md). It implements `Webview` rendered into the `overlay` of native display. Provides functions for special needs of `overlay` type `Webview`. It doesn't have any physical representation in 3d scene.

## new Overlay([options])
To create and insert `Webview` into `wom` tree use `wom.create('overlay', [options])`!
* `options` Object (optional) - Contains the same properties as `Webview` constructor's options. See `Webview` documentation for details.

_`options` are superset of `Canvas` constructor's options (and `Node`'s as well)! Only `Webview` specific properties are listed here. For the rest see `new Canvas([options])` and `new Node([options])` documentation_

## Instance Events
See `Webview` instance events for inherited events.

## Instance Properties
See `Webview` instance properties for inherited properties.

## Instance methods
See `Webview` instance methods for inherited methods.

#### `Overlay.injectNode(name, node)`
Injects the given node to the scope of its chromium webview in the `window[name]` global. Emits a `'${name}-ready'` event in the webview's scope on the `process` object.

``` js
// Main process
let o = wom.create('overlay', { url: someURL })
o.injectNode('foo', fooNode)
```

``` js
// Renderer process
process.once('foo-ready', () => {
  console.log('ready to use foo', window.foo)
})
```

#### `Overlay.isShown()` (overrides `Node.isShown()`)
Returns Boolean - Is overlay of this `Overlay` visible. _Contrary to `Node` method it queries the `canvas` type entity instead of base node._

#### `Overlay.show()` (overrides `Node.show()`)
Shows the overlay of this `Overlay` on the display. `BrowserWindow` starts painting. _Contrary to `Node` method it manipulates the `canvas` type entity instead of base node._

#### `Overlay.hide()` (overrides `Node.hide()`)
Hides the overlay of this `Overlay` on the display. `BrowserWindow` stops painting. _Contrary to `Node` method it manipulates the `canvas` type entity instead of base node._
