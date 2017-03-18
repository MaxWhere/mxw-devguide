# Light

> Present a light source in 3D space

`Light` is a [`Node`](node.md).

## `new Light([options])`

- `options` Object (optional)
  - `lighttype` String (optional) - The light's type. Default is `point`.
    Possible values are:
    - `point`
    - `directional`
    - `spot`
  - `diffuse` Object, `{r, g, b, a}` (optional) - The diffuse color of the
    light in RGBA colorspace. Default is `{r: 1.0, g: 1.0, b: 1.0, a: 1.0}`.
  - `specular` Object, `{r, g, b, a}` (optional) - The specular color of the
    light in RGBA colorspace. Default is `{r: 1.0, g: 1.0, b: 1.0, a: 1.0}`.
  - `range` Object (optional) - The range parameters of the light source.
    Default is: `{inner_angle: 35, outer_angle: 70, falloff: 1}`. Contains:
    - `inner_angle` Float - Degree.
    - `outer_angle` Float - Degree.
    - `falloff` Float
  - `attenuation` Object (optional) - The attenuation coefficients of the light
    source. Default is: `{range: 5000, constant: 1}`. Contains:
    - `range` Float
    - `constant` Float - Value between `0` and `1`.
  - `direction` Object, `{x, y, z}` (optional) - The 3D vector towards the light
    will point. Default is: `{x: 0.0, y: -1.0, z: 0.0}`.

## Instance Properties

### `Light.props.lighttype`

The light's type. Default is `point`.

### `Light.props.diffuse`

The diffuse color of the light in RGBA colorspace.

### `Light.props.specular`

The specular color of the light in RGBA colorspace.

### `Light.props.range`

The range parameters of the light source.

### `Light.props.attenuation`

The attenuation coefficients of the light source.

### `Light.props.direction`

The 3D vector towards the light will point.

## Instance Methods

### `Light.setType(type)`

- `type` String - Possible values are:
  - `point`
  - `directional`
  - `spot`

Sets the type of the light source.

### `Light.getType()`

Returns a `String`, the type of the light source.

### `Light.setDiffuse(r, g, b, a)`

- `r` Float - Range in `0` and `1`.
- `g` Float - Range in `0` and `1`.
- `b` Float - Range in `0` and `1`.
- `a` Float - Range in `0` and `1`.

Sets the diffuse color of the light source.

### `Light.getDiffuse()`

Returns the diffuse color object of the light source.

### `Light.setSpecular(r, g, b, a)`

- `r` Float - Range in `0` and `1`.
- `g` Float - Range in `0` and `1`.
- `b` Float - Range in `0` and `1`.
- `a` Float - Range in `0` and `1`.

Sets the specular color of the light source.

### `Light.getSpecular()`

Returns the specular color object of the light source.

### `Light.setAttenuation(range, constant)`

- `range` Float
- `constant` Float - Value between `0` and `1`.

Sets the attenuation of the light source.

### `Light.getAttenuation()`

Returns the attenuation object of the light source.

### `Light.setDirection(x, y, z)`

- `x` Float
- `y` Float
- `z` Float

Sets the direction vector of the light source in 3D space.

### `Light.getDirection()`

Returns the direction vector of the light source

### `Light.animate(attribute, options, complete)`

This is the animation method of the Node class, Light just extends it with more
attributes to be animated:
- `diffuse`
- `specular`
- `range`
- `attenuation`.
