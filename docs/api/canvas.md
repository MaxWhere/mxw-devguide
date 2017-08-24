# Canvas

> 2d plane which can have any bitmap content as texture to render.

`Canvas` is subclass of [`Node`](node.md). It adds `'canvas'` type entity to `Node` base class and provides accessor and manipulator functions for a canvas as extension. `'canvas'` type entities are either 2d planes in the 3d scene or overlay planes on native window. The rendered bitmap can be adjusted in `Canvas`. `Webview` is extending this class with the capability of rendering Chromium webview in `Canvas`'s bitmap.

## `new Canvas([options])`
To create and insert `Canvas` into `wom` tree use `wom.create('canvas', [options])`!
* `options` Object (optional)
  * `location` String (optional) - The location of `Canvas`. Can be rendered into the 3d scene (`in-game`) or on the overlay of native window (`overlay`) in front of every scene object. Possible values are: `in-game` (default), `overlay`.
  * `width` Number (optional) - The width of `Canvas` in Ogre units (`in-game`) or pixels (`overlay`). Default is `1280`.
  * `height` Number (optional) - The height of `Canvas` in Ogre units (`in-game`) or pixels (`overlay`). Default is `720`.
  * `resolution-width` Number (optional) - The resolution width of the `Canvas`'s texture in pixels (Integer). Default is `1280`.
  * `resolution-height` Number (optional) - The resolution height of the `Canvas`'s texture in pixels (Integer). Default is `720`.
  * `transparent` Boolean (optional) - Whether the `Canvas` is transparent. _Alpha channel of texture's pixel color is used for transparency values._ Default is `true`.
  * `zOrder` Number (optional) - Z order of `overlay` type `Canvas` (Integer). _Overlay with greater Z order covers overlays with less Z order._ Default is `0`.
  * `metrics` String (optional) - Determines the metrics used for `left` and `top` for `overlay` type `Canvas`. Possible values are `pixels` (default), `relative`
  * `left` Number (optional) - In `overlay` location the offset from the left of the window. Default is `0`.
  * `top` Number (optional) - In `overlay` location the offset from the top of the window. Default is `0`.
  * `horizontal-align` String (optional) - Determines how to align the `overlay` type `Canvas` horizontally. _`left`'s `0` point depends on this alignment._ Possible values are `left` (default), `center`, `right`.
  * `vertical-align` String (optional) - Determines how to align the `overlay` type `Canvas` vertically. _`top`'s `0` point depends on this alignment._ Possible values are `top` (default), `center`, `bottom`
  * `disableIngamePhysical` Boolean (optional) - Determines whether `Canvas` registers `canvas` type physical shape matching `Canvas`'s dimensions when created. If `true` physical shape is not registered. Default is `false`

_`options` are superset of `Node` constructor's options! Only `Canvas` specific properties are listed here. For the rest see `new Node([options])` documentation_

```js
Example
```

## Instance Events
See `Node` instance events for inherited events.

## Instance Properties
See `Node` instance properties for inherited properties.

#### `Canvas.props.location`
A String - The location of `Canvas`.

#### `Canvas.props['resolution-width']`
A Number - The resolution width of the `Canvas`'s texture in pixels.

#### `Canvas.props['resolution-height']`
A Number - The resolution height of the `Canvas`'s texture in pixels.

#### `Canvas.props.transparent`
A Boolean - Shows whether the `Canvas` is transparent.

#### `Canvas.props.zOrder`
A Number - Z order of `overlay` type `Canvas`.

#### `Canvas.props.metrics`
A String - Determines the metrics used for `left` and `top` for `overlay` type `Canvas`.

#### `Canvas.props['horizontal-align']`
A String - Determines how to align the `overlay` type `Canvas` horizontally.

#### `Canvas.props['vertical-align']`
A String - Determines how to align the `overlay` type `Canvas` vertically.

## Instance Methods
See `Node` instance methods for inherited methods.

If the return value is not specified the method returns this `Canvas` instance.

#### `Canvas.getSize()`
Returns Object {width, height} - The size of `Canvas` in Ogre units (`in-game`) or pixels (`overlay`)

#### `Canvas.setSize(width, height)`
Sets the size of `Canvas`
* `width` Number - The width of `Canvas` in Ogre units (`in-game`) or pixels (`overlay`) to set.
* `height` Number - The height of `Canvas` in Ogre units (`in-game`) or pixels (`overlay`) to set.

#### `Canvas.setResolution(width, height)`
Sets the resolution of `Canvas`'s texture.
* `width` Number - The resolution width of the `Canvas`'s texture in pixels (Integer) to set.
* `height` Number - The resolution height of the `Canvas`'s texture in pixels (Integer) to set.

#### `Canvas.getOffset()`
Returns Object {top, left} - The offset of left upper corner of `overlay` type `Canvas` from the display position origin (depends on alignment).

_Only for `overlay` type `Canvas`_

#### `Canvas.setOffset(left, top)`
Move the left upper corner of `overlay` type `Canvas` on the display. Unit depends on metrics and position origin depends on alignments.
* `left` Number - Left position of `Canvas`
* `top` Number - Top position of `Canvas`

_Applied only for `overlay` type `Canvas`_

#### `Canvas.setZOrder(order)`
Sets the Z order of `overlay` type `Canvas`.
* `order` Number - Z order to set (Integer).

_Applied only for `overlay` type `Canvas`_

#### `Canvas.setLocation(location)`
Sets the location type of `Canvas`. Moves `Canvas` between display overlay and 3d scene
* `location` String - Location type to set. Possible values are `in-game`, `overlay`.

#### `Canvas.loadPicture(path)`
Loads the specified picture into texture of `Canvas`.
* `path` String - Path to image file to render.

#### `Canvas.setPassive(passive)`
Sets the `overlay` type `Canvas` passive or active. _Passive overlay is not participating in mouse ray query, thus doesn't recieve mouse inputs. Therefore, 3d scene behind a passive overlay can interact with mouse, which is not possible otherwise._
* `passive` Boolean - Enable passive mode

_Applied only for `overlay` type `Canvas`_

#### `Canvas.setBuffer(damageRect, buffer, bufferSize)`
Sets the bitmap buffer of the underlying texture of `Canvas`.
* `damageRect` Object - The area where the buffer data should be set {x, y, width, height}.
* `buffer` Object - Bitmap to apply. A `node::Buffer` holding 32 bit ARGB data.
* `bufferSize` Object - The size of `buffer` in pixels {width, height}.