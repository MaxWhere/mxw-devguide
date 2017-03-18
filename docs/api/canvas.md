# Canvas

> Present a plane in the 3D space where arbitrary bitmap data can be rendered.

`Canvas` is a [`Node`](node.md).

## `new Canvas([options])`

- `options` Object (optional)
  - `location` String (optional) - The canvas's location. Default is `in-game`.
    Possible values are:
    - `in-game` - Rendered in to the 3D space
    - `overlay` - Rendered on the overlay, in front of everything.
  - `width` Integer (optional) - The width of the canvas. Default is `1280`.
  - `height` Integer (optional) - The height of the canvas. Default is `720`.
  - `resolution-width` Integer (optional) - The resolution width of the texture
    of the canvas. Default is `1280`.
  - `resolution-height` Integer (optional) - The resolution height of the
    texture of the canvas. Default is `720`.
  - `transparent` Boolean (optional) - Wether the canvas to be transparent.
    Default is `true`.
  - `zOrder` Integer (optional) - In `overlay` location the Z order of the
    canvases. Default is `0`.
  - `metrics` String (optional) - Determines the metrics used for `left` and
    `top` in `overlay` location. Default is `pixels`. Possible values are:
    - `pixels`
    - `relative`
  - `left` Integer (optional) - In `overlay` location the offset from the left
    of the window. Default is `0`.
  - `top` Integer (optional) - In `overlay` location the offset from the top of
    the window. Default is `0`.
  - `horizontal-align` String (optional) - How to align the canvas in `overlay`
    location horizontally. Default is `left`. Possible values are:
    - `left`
    - `center`
    - `right`
  - `vertical-align` String (optional) - How to align the canvas in `overlay`
    location vertically. Default is `top`. Possible values are:
    - `top`
    - `center`
    - `bottom`

## Instance Properties

### `Canvas.props.location`

The canvas's location.

### `Canvas.props.width`

The width of the canvas.

### `Canvas.props.height`

The height of the canvas.

### `Canvas.props.resolution-width`

The resolution width of the texture of the canvas.

### `Canvas.props.resolution-height`

The resolution height of the texture of the canvas.

### `Canvas.props.transparent`

Wether the canvas to be transparent.

### `Canvas.props.zOrder`

In `overlay` location the Z order of the canvases.

### `Canvas.props.metrics`

Determines the metrics used for `left` and `top` in `overlay` location.

### `Canvas.props.left`

In `overlay` location the offset from the left of the window.

### `Canvas.props.top`

In `overlay` location the offset from the top of the window.

### `Canvas.props.horizontal-align`

How to align the canvas in `overlay` location horizontally.

### `Canvas.props.vertical-align`

How to align the canvas in `overlay` location vertically.

## Instance Methods

### `Canvas.setSize(width, height)`

- `width` Integer
- `height` Integer

Sets the given `width` and `height` for the canvas. In 3D space units.

### `Canvas.setResolution(width, height)`

- `width` Integer
- `height` Integer

Sets the given `width` and `height` for the resolution of the canvas, in pixels.

### `Canvas.setOffset(left, top)`

- `left` Integer
- `top` Integer

In `overlay` location the offset from the left and top of the window.


### `Canvas.setZOrder(order)`

- `order` Integer

In `overlay` location the ordering of the windows along the Z axis.

### `Canvas.setLocation(location)`

- `location` String - Possible values are: `in-game`, `overlay`.

Sets the canvas's location to be in 3D space or on the window.

### `Canvas.setBuffer(damageRect, buffer, bufferSize)`

- `damageRect` Object, `{x, y, width, height}` - The area where to set the
  buffer data.
- `buffer` Buffer - Bitmap data.
- `bufferSize` Integer - The size of `buffer`

`buffer` holds a 32 bit ARGB data that will be rendered onto the canvas in area
`damageRect`.

### `Canvas.loadPicture(path)`

- `path` String

A picture located in `path` will be rendered onto the canvas.
