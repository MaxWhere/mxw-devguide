# Browser

> `Component` consists of a `Webview` and UI `Overlay`s implementing a fully featured browser.

`Browser`s can be used without any further adjustment. Mouse and keyboard inputs are handled automatically. UI `Overlay`s are opening when the `Webview` is selected in the 3d scene by click or double click. UI contains every required navigation and editing tool for implementing a fully featured browser. 

```
image (?)
```

## wom.create('browser', [options])
Creates and inserts `Browser` into `wom` tree.
* `options` Object (optional) - The same options are accepted as for `Webview`. See documentation of `new Webview([options])` for details.

_Options are used for setup the `Webview` and UI `Overlay`s. No additional option is used._

## Instance properties

#### `Browser.webview`
A `Webview` - The `in-game` `Webview` of the browser which renders the main (current) web content.

## Instance methods
`Browser` methods are used internally in the first place but can be accessed through this interface.

#### `Browser.zoomIn()`
Moves the camera to `Webview` of this `Browser` and focus on it by enabling inputs on it and opening UI `Overlay`s for manipulation. _Camera pose is calculated from `Webview` dimensions._

#### `Browser.zoomOut()`
Moves the camera back away from `Webview` of this `Browser` and unfocus it by disabling inputs on it and closing UI `Overlay`s. _Camera moves to the pose which preceded the zooming._

#### `Browser.isZoomedIn()`
Returns Boolean - Showing whether the camera is zoomed to `Webview` of this `Browser`.

#### `Browser.select()`
Selects the `Webview` of this `Browser` by enabling inputs on it and opening UI `Overlay`s for manipulation.

#### `Browser.deselect()`
Leaves the `Webview` of this `Browser` by disabling inputs on it and closing UI `Overlay`s.

#### `Browser.isSelected()`
Returns Boolean - Showing whether the `Webview` of this `Browser` is selected.

#### `Browser.zoomOutOrDeselect()`
Unfocusing `Webview` of this `Browser` by either zooming out from it (if `isZoomedIn`) or deselect it (if not `isZoomedIn`).