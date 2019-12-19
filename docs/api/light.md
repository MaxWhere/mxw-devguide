# Light

> Lighsource in 3d scene.

`Light` is subclass of [`Node`](node.md). It adds `'light'` type entity to `Node` base class and provides accessor and manipulator functions for light as extension. `'light'` type entities are light sources in the 3d scene and illuminates `Mesh` objects.

_`Light`s are wrappers of Ogre lights. For further reading on Ogre lights visit http://www.ogre3d.org/tikiwiki/-Light_

## `new Light([options])`
To create and insert `Light` into `wom` tree use `wom.create('light', [options])`!
* `options` Object (optional)
  * `lighttype` String (optional) - The light's type. Possible values are: `spot`, `directional`, `point` (default).
  * `diffuse` Object (optional) - The diffuse color of the light {r, g, b, a}. Default is `{r: 1.0, g: 1.0, b: 1.0, a: 1.0}`.
  * `specular` Object (optional) - The specular color of the light {r, g, b, a}. Default is `{r: 1.0, g: 1.0, b: 1.0, a: 1.0}`.
  * `range` Object (optional) - The range parameters of the light source {inner_angle: Number (Degree), outer_angle: Number (Degree), falloff: Number}. Default is `{inner_angle: 35, outer_angle: 70, falloff: 1}`.
  * `attenuation` Object (optional) - The attenuation coefficients of the light
    source {range, constant, linear, quadratic}, where properties are positive Numbers (constant is in range [0, 1]). Default is `{range: 5000, constant: 1, linear: 0.0009, quadratic: 0.000003}`, .
  * `direction` Object (optional) - The 3D vector towards the light will point {x, y, z}. Default is `{x: 0, y: -1, z: 0}`.

_`options` are superset of `Node` constructor's options! Only `Light` specific properties are listed here. For the rest see [`new Node([options])`](node.md#new-nodeoptions) documentation_

```jsx
wom.render(
  <light
    y={100}
    done={ l => {
      l.animate('diffuse', {
        from: [{r: 1, g: 1, b: 1}, {r: 1, g: 1, b: 1}, {r: 1, g: 1, b: 1}],
        to: [{r: 1, g: 0, b: 0}, {r: 0, g: 1, b: 0}, {r: 0, g: 0, b: 1}],
        repeat: true // every step starts from white color
      })
      l.animate('specular', {
        to: {r: 1, g: 1, b: 0},
        loop: true // to yellow and back
      })
    }}
  />
)
```

## Instance Events
See `Node` instance events for inherited events.

## Instance Properties
See `Node` instance properties for inherited properties.

## Instance Methods
See `Node` instance methods for inherited methods.

If the return value is not specified the method returns this `Light` instance.

### Lightsource access

#### `Light.setType(type)`
Sets the type of `Light`.
* `type` String - Light type to set. Possible values are: `spot`, `directional`, `point`.

#### `Light.getType()`
Returns String the type of `Light`. Possible values are: `spot`, `directional`, `point`.

#### `Light.setDiffuse(r, g, b, a)`
Sets the diffuse color of `Light`.
* `r` Number - Red component of color. Range in [0, 1].
* `g` Number - Green component of color. Range in [0, 1].
* `b` Number - Blue component of color. Range in [0, 1].
* `a` Number - Alpha component of color. Range in [0, 1].

_Diffuse light simulates the typical light emanating from light sources and affects the base colour of objects together with ambient light._

#### `Light.getDiffuse()`
Returns Object {r, g, b, a} - The diffuse color of `Light`.

_Diffuse light simulates the typical light emanating from light sources and affects the base colour of objects together with ambient light._

#### `Light.setSpecular(r, g, b, a)`
Sets the specular color of `Light`.
* `r` Number - Red component of color. Range in [0, 1].
* `g` Number - Green component of color. Range in [0, 1].
* `b` Number - Blue component of color. Range in [0, 1].
* `a` Number - Alpha component of color. Range in [0, 1].

_Specular light affects the appearance of shiny highlights on objects, and is also dependent on the 'shininess' Material value._

#### `Light.getSpecular()`
Returns Object {r, g, b, a} - The specular color of `Light`.

_Specular light affects the appearance of shiny highlights on objects, and is also dependent on the 'shininess' Material value._

#### `Light.setAttenuation(range, constant[, linear, quadratic])`
Sets the attenuation coefficients of `Light`. The attenuation formula will be calculated using the given values. Attenuation refers to how the lightsource diminishes with distance.
* `range` Number - Absolute upper range of the `Light`.
* `constant` Number - Constant factor in the attenuation formula. Range in [0, 1]. _`1.0` means never attenuate, `0.0` is complete attenuation_.
* `linear` Number (optional) - Linear factor in the attenuation formula. Range in [0, 1]. _`1.0` means attenuate evenly over the distance._ If not provided it's calculated automatically (`4.5 / range`)
* `quadratic` Number (optional) - Quadratic factor in the attenuation formula which adds a curvature to the attenuation formula. If not provided it's calculated automatically (`75.0 / range^2`)

_Applicable only to `'spot'` and `'point'` types_

#### `Light.getAttenuation()`
Returns Object {range, constant, linear, quadratic} - Attenuation coefficients of `Light`. The attenuation formula is calculated using the returned values. Attenuation refers to how the lightsource diminishes with distance.

_Available only for `'spot'` and `'point'` types_

#### `Light.setRange(inner_angle[, outer_angle, falloff])`
Sets the range of spot type `Light`. Range refers to the angle of the inner and outer cones the spotlight illuminates and the rate of falloff between them.
* `inner_angle` Number | Object
  - Angle of inner cone of illumination to set (Degree)
  - Range properties to set as {inner_angle, outer_angle, falloff}. If given as Object, `outer_angle`, `falloff` parameters are ignored.
* `outer_angle` Number - Angle of outer cone of illumination to set (Degree)
* `falloff` Number - Rate of falloff to set. _1.0 means a linear falloff, less means slower falloff, higher means faster falloff._

_Applicable only to `'spot'` type_

#### `Light.getRange()`
Returns Object {inner_angle, outer_angle, falloff} - The range of the spot type `Light`. Range refers to the angle of the inner and outer cones the spotlight illuminates (in Degrees) and the rate of falloff between them.

_Available only for `'spot'` type_

#### `Light.setDirection(x, y, z)`
Sets the direction vector of the `Light`.
* `x` Number - x component of direction vector to set
* `y` Number - y component of direction vector to set
* `z` Number - z component of direction vector to set

_Applicable only to `'spot'` and `'directional'` types_

#### `Light.getDirection()`
Returns Object {x, y, z} - The direction vector of `Light`

_Available only for `'spot'` and `'directional'` types_

### Custom inherited

#### `Light.show()` (`Node.show()`)
Turn on the light source in 3d scene.

#### `Light.hide()` (`Node.hide()`)
Turn off the light source in 3d scene.

#### `Light.animate(attribute, options[, complete])` (`Node.animate(attribute, options[, complete])`)
For basic operation of the function see documentation of `Node.animate(attribute, options[, complete])`. `Light` extends the method with further available attributes.
* `attribute` String - Additional attributes can be used: `diffuse`, `specular`, `range`, `attenuation`. Matching values are Object {r, g, b, a} for `diffuse`, `specular`, Object {inner_angle, outer_angle, falloff} for `range` and Object {range, constant, linear, quadratic} for `attenuation`
