# Material

The `Material` class is used to gain access to the materials of a `Mesh`.

## Properties

#### material
The native object.

## Methods
#### `m = new Material(mat)`
Creates a new `Material` object. The `mat` object is the native material object, that can be obtained from the `Mesh.subvisual(index).material` method.

#### `m.shaderNames()`
Returns the names of the controllable shader parameters as a `[String]`.

#### `m.setShader(param, value)`
Sets the defined `value` to the specified `param` shader parameter. A shader parameter can be identified by name `String` or index `Number`. Shader parameters are accepting either `String` or `Number` values for `BaseShader`.

#### `m.shaderRange(param)`
Returns the minimum and maximum value of the specified shader parameter. A shader parameter can be selected by name `String` or index `Number`.

#### `m.shaderValue(param)`
Returns the current value of the specified shader parameter. A shader parameter can be selected by name `String` or index `Number`.

#### `m.getDiffuse()`
Returns the diffuse color as a `ColorValue`

#### `m.getSpecular()`
Returns the specular color as a `ColorValue`

#### `m.getAmbient()`
Returns the ambient color as a `ColorValue`

#### `m.getEmissive()`
Returns the emissive color as a `ColorValue`

#### `m.getShininess()`
Returns the shininess as `Number`

#### `m.getDepthFeatures()`
Returns the depth flags as `{write, check}` object

#### `m.isTransparentBlend()`
Returns transparency

#### `m.isReceiveShadow()`
Returns whether receives shadows

#### `m.isLightingAllowed()`
Returns whether lighting is allowed

#### `m.getCullingMode()`
Returns culling mode as `Number`

#### `m.getName()`
Returns the name of material as `String`

#### `m.setDiffuse(color)`
Sets the diffuse color to `color`

#### `m.setSpecular(color)`
Sets the specular color to `color`

#### `m.setAmbient(color)`
Sets the ambient color to `color`

#### `m.setEmissive(color)`
Sets the emissive color to `color`

#### `m.setShininess(value)`
Sets the shininess to `value`

#### `m.setDepthFeatures(opt)`
Sets the depth flags to `opt`: `{write, check}`

#### `m.setTransparentBlend(transp)`
Sets the transparency to `transp`

#### `m.setReceiveShadow(rec)`
Sets whether the material receives shadows by `rec`

#### `m.setLightingAllowed(allow)`
Sets whether lighting is allowed by `allow`

#### `m.setCullingMode(mode)`
Sets culling mode to `mode`

#### `m.save(path)`
Saves the material into file located at `path`

#### `m.clone(name)`
Returns clone of this material, optionally having a new `name` (otherwise auto-generated)
