# Mesh

> Visual object in 3d scene. Appearance is described with mesh file.

`Mesh` is subclass of [`Node`](node.md). It adds `'mesh'` type entity to `Node` base class and provides mesh accessor and manipulator functions as extension. `'mesh'` type entities are visible objects in the 3d scene and described by an Ogre `.mesh` file.

## `new Mesh([options])`
To create and insert `Mesh` into `wom` tree use `wom.create('mesh', [options])`!
* `options` Object (optional)
  * `url` String (required) - Name of Ogre mesh file.
  * `meshFolder` String (optional) - Path to Ogre mesh file. _If not defined, resource folders are used._

_`options` are superset of `Node` constructor's options! Only `Mesh` specific properties are listed here. For the rest see [`new Node([options])`](node.md#new-nodeoptions) documentation_

```jsx
wom.render(
  <mesh
    url='cube.mesh'
    x={80}
    scale={10}
    autophysical={true}
  />
)
```

## Instance Events
See `Node` instance events for inherited events.

#### `'created'`
Additionally to `Node`'s `'created'` event it also means that the `Mesh` is successfully loaded into 3d scene.

#### `'updated'`
Emitted when the `Mesh` is updated in the 3d scene. Possible causes are: submesh list changes.

## Instance Properties
See `Node` instance properties for inherited properties.

#### `Mesh.url`
A String that specifies the Ogre mesh file used by this `Mesh`. It's file path relative to available resource folders.

#### `Mesh.created` (`Node.created`)
A Boolean - Additionally to `Node.created` property it also shows that the `Mesh` is successfully loaded into 3d scene.

#### `Mesh.done` (`Node.done`)
A Function - Additionally to `Node.done` property it is getting called only when the `Mesh` is successfully loaded into 3d scene.

## Instance Methods
See `Node` instance methods for inherited methods.

If the return value is not specified the method returns this `Mesh` instance.

#### `Mesh.setUrl(url)`
Sets the Ogre mesh file this `Mesh` will use in 3d scene.
* `url` String - Path to mesh file relative to any resource folder.

#### `Mesh.setMaterial(material[, subvisual])`
Sets the material on the specified subvisual of the `Mesh`. _Mesh files can contain multiple sub-units for visualize 3d object. They are the 'subvisual's. They have different material applied._
* `material` String - The name of material to apply. <!-- Can also feed MaterialWrap here, but it's messy -->
* `subvisual` Number (optional) - The index of subvisual of `Mesh`. If no subvisual is given the material will be applied on every subvisual.

#### `Mesh.subvisuals()`
Returns Object[] - The array of subvisuals of this `Mesh`
  * `material` Object <!-- TODO: It's MaterialWrap! Put it in wom.Material without explicit call of Mesh.material(Mesh.subvisual) -->
  * `index` Number

#### `Mesh.subvisual(index)`
* `index` Number - Index of subvisual of `Mesh` to get.

Returns Object - The specified subvisual of this `Mesh`
  * `material` Object <!-- TODO: It's MaterialWrap! Put it in wom.Material without explicit call of Mesh.material(Mesh.subvisual) -->
  * `index` Number

#### `Mesh.material(subvisual)`
* `subvisual` Object - Subvisual object to extract the material from.
  * `material` Object <!-- TODO: It's MaterialWrap! Put it in wom.Material without explicit call of Mesh.material(Mesh.subvisual) -->
  * `index` Number

Returns Object - Extracted `Material` object of the specified subvisual Object. See `Material` documentation for object details.

_Returned Objects of `subvisual` function can be passed here, and it returns the corresponding `Material` object_

```js
const material = mesh.material(mesh.subvisual(0))
```

#### `Mesh.animatorNames()`
Returns String[] containing the available animations for the mesh file of `Mesh`. Animations can be controlled by passing the name to `Mesh.animator`

_Ogre mesh files can contain vertex or skeleton animations which can be accessed here_

#### `Mesh.animator(name)`
Extracts the specified mesh animation object from `Mesh`
* `name` String - Name of the mesh animation to extract

Returns an Object - Mesh animation object with controller methods
  * `start` Function - Starts mesh animation playback from the current time position
  * `pause` Function - Pauses mesh animation playback
  * `stop` Function - Stops mesh animation playback and resets time position.
  * `getName` Function - Returns the name of mesh animation as String.
  * `getType` Function - Returns the type of mesh animation based on Ogre Animation categories. Possible values are `morph`, `pose`, `bone`. _Experimental_
  * `getLength` Function - Returns the length of mesh animation in seconds as Number.
  * `getTimePos` Function - Returns the current time position of mesh animation in seconds as Number.
  * `getLoop` Function - Returns whether the mesh animation repeates as Boolean.
  * `getWeight` Function - Returns the weight of each Poses or Bones in mesh animation as Number if any.
  * `getEnabled` Function - Returns whether the mesh animation is enabled. _An animation is enabled if it's running (even if paused)_
  * `setLength` Function - Pass `length` Number [seconds]. Sets the length of mesh animation.
  * `setTimePos` Function - Pass `timepos` Number [seconds]. Sets the time position of mesh animation.
  * `setLoop` Function - Pass `loop` Boolean. Sets whether the mesh animation should loop.
  * `setWeight` Function - Pass `weight` Number. Sets the weight of mesh animation.

_Ogre mesh files can contain vertex or skeleton animations which can be accessed here_

Example
```js
const mesh = <mesh url='penguin.mesh' />
const amuse = mesh.animator('amuse')
amuse.start()
```

#### `Mesh.save(path)`
Saves this `Mesh` into a file.
* `path` String - The path to file.

_Any modification made to `Mesh` will be saved. Overwrites file if exists!_

#### `Mesh.show()` (`Node.show()`)
Shows the mesh in 3d scene.

#### `Mesh.hide()` (`Node.hide()`)
Hides the mesh in 3d scene.
