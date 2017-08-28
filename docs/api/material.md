# Material

> The `Material` class is used to gain access to the materials of a [`Mesh`](mesh.md).

Materials of standard maxwhere meshes are using a special PBS (physically based shader) shader. Shader properties can be adjusted through `Material` interface. Other kind of materials are accepted as well in the 3d scene and common properties can be adjusted here.

_`Material`s are wrappers of Ogre materials. For further reading on Ogre materials visit http://www.ogre3d.org/tikiwiki/-Material_

```js
let m = wom.select('mesh')
let mat = m.material(m.subvisual(0))
let surfcol = mat.shaderValue('SurfacecolorbiasR')
mat.setSpecular({r: 1, g: 0, b: 0, a: 1})
mat.setShader('SurfacecolorbiasR', surfcol / 2 )
```

## Instance methods

### Shader parameters

#### `Material.shaderNames()`
Returns String[] containing the names of the controllable shader PBS parameters.

For the standard maxwhere shader the following paramters are returned:
`[ 'SurfacecolorbiasR', 'SurfacecolorbiasG', 'SurfacecolorbiasB', 'SpecularcolorbiasR', 'SpecularcolorbiasG', 'SpecularcolorbiasB', 'SurfacereflectivityA', 'SurfacereflectivityD', 'Specularmultiplier', 'ReflectionPower', 'ReflectionBlurBias', 'RoughnessBias', 'MetallicBias', 'AlphaBias', 'LightBias', 'AoBias', 'Uvchangerlight', 'Uvchangerao', 'TileCount', 'TextureoffsetX', 'TextureoffsetY', 'TileCountNormal', 'TextureoffsetNormalX', 'TextureoffsetNormalY', 'TileCountRoughness', 'TextureoffsetRoughnessX', 'TextureoffsetRoughnessY', 'TileCountMetallic', 'TextureoffsetMetallicX', 'TextureoffsetMetallicY', 'Diffusemap', 'Normalmap', 'Roughnessmap', 'Metallicmap', 'Reflectionmap', 'Lightmap', 'Ambientocclusionmap' ]`

#### `Material.setShader(param, value)`
Sets the value of the specified PBS shader parameter
* `param` String | Number The name or index of shader parameter to adjust
* `value` String | Number Shader parameter value to set. _Choose type accepted by the specified shader parameter_

The following table shows the accepted value type and range per shader paramter.
<!-- (full table)
| Param name | Shader program | Program param | Param Value |
|---|---|---|---|
| `SurfacecolorbiasR` | fragment | R of `surface_color_bias` | Number (range [0, 1])
| `SurfacecolorbiasG` | fragment | G of `surface_color_bias` | Number (range [0, 1])
| `SurfacecolorbiasB` | fragment | B of `surface_color_bias` | Number (range [0, 1])
| `SpecularcolorbiasR` | fragment | R of `specular_color_bias` | Number (range [0, 1])
| `SpecularcolorbiasG` | fragment | G of `specular_color_bias` | Number (range [0, 1])
| `SpecularcolorbiasB` | fragment | B of `specular_color_bias` | Number (range [0, 1])
| `SurfacereflectivityA` | fragment | Ambient of `surface_reflectivity` | Number (range [0, 1])
| `SurfacereflectivityD` | fragment | Diffuse of `surface_reflectivity` | Number (range [0, 1])
| `Specularmultiplier` | fragment | `spec_multiplier` | Number (range [0, 10])
| `ReflectionPower` | fragment | `reflection_power` | Number (range [0, 20])
| `ReflectionBlurBias` | fragment | `refl_blur_bias` | Number (range [-6, 6])
| `RoughnessBias` | fragment | `roughness_bias` | Number (range [-1, 1])
| `MetallicBias` | fragment | `metallic_bias` | Number (range [-1, 1])
| `AlphaBias` | fragment | `alpha_bias` | Number (range [-1, 1])
| `LightBias` | fragment | `light_bias` | Number (range [0, 5])
| `AoBias` | fragment | `ao_bias` | Number (range [0, 5])
| `Uvchangerlight` | vertex | light of `uv_changer` | Number (range [0, 2] Int)
| `Uvchangerao` | vertex | AO of `uv_changer` | Number (range [0, 2] Int)
| `TileCount` | vertex | `tile_count` | Number (range [0, 10])
| `TextureoffsetX` | vertex | X of `texture_offset` | Number (range in [0, 1])
| `TextureoffsetY` | vertex | Y of `texture_offset` | Number (range in [0, 1])
| `TileCountNormal` | vertex | `tile_count_normal` | Number (range [0, 10])
| `TextureoffsetNormalX` | vertex | X of `texture_offset_normal` | Number (range [0, 1])
| `TextureoffsetNormalY` | vertex | Y of `texture_offset_normal` | Number (range [0, 1])
| `TileCountRoughness` | vertex | `tile_count_roughness` | Number (range [0, 10])
| `TextureoffsetRoughnessX` | vertex | X of `texture_offset_roughness` | Number (range [0, 1])
| `TextureoffsetRoughnessY` | vertex | Y of `texture_offset_roughness` | Number (range [0, 1])
| `TileCountMetallic` | vertex | `tile_count_metallic` | Number (range [0, 10])
| `TextureoffsetMetallicX` | vertex | X of `texture_offset_metallic` | Number (range [0, 1])
| `TextureoffsetMetallicY` | vertex | Y of `texture_offset_metallic` | Number (range [0, 1])
| `Diffusemap` | texture | `diffuse_map` | String (image file name)
| `Normalmap` | texture | `normal_map` | String (image file name)
| `Roughnessmap` | texture | `roughness_map` | String (image file name)
| `Metallicmap` | texture | `metallic_map` | String (image file name)
| `Reflectionmap` | texture | `reflection_map` | String (image file name)
| `Lightmap` | texture | `light_map` | String (image file name)
| `Ambientocclusionmap` | texture | `ambientocclusion_map` | String (image file name)
-->
| Parameter name | Parameter Value |
|---|---|---|---|
| `SurfacecolorbiasR` | Number (range [0, 1])
| `SurfacecolorbiasG` | Number (range [0, 1])
| `SurfacecolorbiasB` | Number (range [0, 1])
| `SpecularcolorbiasR` | Number (range [0, 1])
| `SpecularcolorbiasG` | Number (range [0, 1])
| `SpecularcolorbiasB` | Number (range [0, 1])
| `SurfacereflectivityA` | Number (range [0, 1])
| `SurfacereflectivityD` | Number (range [0, 1])
| `Specularmultiplier` | Number (range [0, 10])
| `ReflectionPower` | Number (range [0, 20])
| `ReflectionBlurBias` | Number (range [-6, 6])
| `RoughnessBias` | Number (range [-1, 1])
| `MetallicBias` | Number (range [-1, 1])
| `AlphaBias` | Number (range [-1, 1])
| `LightBias` | Number (range [0, 5])
| `AoBias` | Number (range [0, 5])
| `Uvchangerlight` | Number (range [0, 2] Int)
| `Uvchangerao` | Number (range [0, 2] Int)
| `TileCount` | Number (range [0, 10])
| `TextureoffsetX` | Number (range in [0, 1])
| `TextureoffsetY` | Number (range in [0, 1])
| `TileCountNormal` | Number (range [0, 10])
| `TextureoffsetNormalX` | Number (range [0, 1])
| `TextureoffsetNormalY` | Number (range [0, 1])
| `TileCountRoughness` | Number (range [0, 10])
| `TextureoffsetRoughnessX` | Number (range [0, 1])
| `TextureoffsetRoughnessY` | Number (range [0, 1])
| `TileCountMetallic` | Number (range [0, 10])
| `TextureoffsetMetallicX` | Number (range [0, 1])
| `TextureoffsetMetallicY` | Number (range [0, 1])
| `Diffusemap` | String (image file name)
| `Normalmap` | String (image file name)
| `Roughnessmap` | String (image file name)
| `Metallicmap` | String (image file name)
| `Reflectionmap` | String (image file name)
| `Lightmap` | String (image file name)
| `Ambientocclusionmap` | String (image file name)

#### `Material.shaderRange(param)`
Returns Object {min: Number, max: Number} describing the minimum and maximum value of the specified shader parameter. _Doesn't apply on String type parameters_
* `param` String | Number The name or index of shader parameter to query.

#### `Material.shaderValue(param)`
Returns Number which is the current value of the specified shader parameter. _Doesn't apply on String type parameters_
* `param` String | Number The name or index of shader parameter to query.

### Common parameters

#### `Material.getDiffuse()`
Returns Object {r, g, b, a} - The diffuse color of `Material`

#### `Material.getSpecular()`
Returns Object {r, g, b, a} - The specular color of `Material`

#### `Material.getAmbient()`
Returns Object {r, g, b, a} - The ambient color of `Material`

#### `Material.getEmissive()`
Returns Object {r, g, b, a} - The emissive color of `Material`

#### `Material.getShininess()`
Returns Number - The shininess of `Material`. _Shininess affects specular highlights_

#### `Material.getDepthFeatures()`
Returns Object {write: Boolean, check: Boolean} describing the depth features of `Material`.

 _Depth feature defines whether the material renders with depth-buffer checking or writing. If write is off material will always be rendered behind everything else. If check is off material will always be rendered on top of everything else._

#### `Material.isTransparentBlend()`
Returns Boolean indicating whether `Material` is transparent.

#### `Material.isReceiveShadow()`
Returns Boolean indicating whether `Material` receives shadows.

#### `Material.isLightingAllowed()`
Returns Boolean indicating whether lighting is allowed on `Material`.

#### `Material.getCullingMode()`
Returns Number - culling mode of `Material`. _`0` - culling is off `1` - clockwise culling `2` - anticlockwise culling_

#### `Material.getName()`
Returns String - The name of `Material`

#### `Material.setDiffuse(color)`
Sets the diffuse color of `Material`
* `color` Object - Color to set. {r, g, b, a}

#### `Material.setSpecular(color)`
Sets the specular color of `Material`
* `color` Object - Color to set. {r, g, b, a}

#### `Material.setAmbient(color)`
Sets the ambient color of `Material`
* `color` Object - Color to set. {r, g, b, a}

#### `Material.setEmissive(color)`
Sets the emissive color of `Material`
* `color` Object - Color to set. {r, g, b, a}

#### `Material.setShininess(value)`
Sets the shininess of `Material` _Shininess affects specular highlights_
* `value` Number Shininess to set (non-negative)

#### `Material.setDepthFeatures(opt)`
Sets the depth features of `Material`.
* `opt` Object - Depth feature to set {write: Boolean, check: Boolean}

 _Depth feature defines whether the material renders with depth-buffer checking or writing. If write is off material will always be rendered behind everything else. If check is off material will always be rendered on top of everything else._

#### `Material.setTransparentBlend(transp)`
Sets the transparency of `Material`
* `transp` Boolean Transparency to set

#### `Material.setReceiveShadow(rec)`
Sets whether the `Material` receives shadows.
* `rec` Boolean Enable shadow reception

#### `Material.setLightingAllowed(allow)`
Sets whether lighting is allowed on `Material`
* `allow` Boolean Enable lighting

#### `Material.setCullingMode(mode)`
Sets culling mode of `Material`
* `mode` Number - Culling mode to set. _`0` - culling is off `1` - clockwise culling `2` - anticlockwise culling_

#### `Material.save(path)`
Saves the `Material` into file.
* `path` Path of file to save into

#### `Material.clone([name])`
Clones this `Material`
* `name` String (optional) - Name of the cloned `Material` to set.

Returns `Material` - New `Material` with identical properties as original one.
