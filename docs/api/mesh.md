# Mesh

> Present and animate meshes in 3D space.

`Mesh` is a [`Node`](node.md).

## `new Mesh([options])`

- `options` Object (optional)
  - `url` String (required) - Path to an OGRE mesh file.

## Instance Properties

### `Mesh.url`

A `String` that specifies an OGRE mesh file.

## Instance Methods

### `Mesh.setUrl(url)`

- `url` String

Changes the OGRE mesh file of the element.

### `Mesh.setMaterial(material[, subvisual])`

- `material` String or Material object
- `subvisual` Integer (optional)

Sets the material on the specified subvisual. A subvisual can be referred by
index number. The material to set can be defined either by name as String or as
Material object. If no subvisual is given the material will be applied on every
subvisual.

### `Mesh.subvisuals()`

Returns the subvisuals for the mesh as an Object array.

### `Mesh.subvisual(index)`

- `index` Integer

Returns the subvisual at a given index for the mesh as an Object.

### `Mesh.material(subvisual)`

- `subvisual` Integer

Returns a Material object for the given subvisual.

### `Mesh.animatorNames()`

Returns the available animations for the mesh as a String array.

### `Mesh.animator(name)`

- `name` String

Returns an animator object of the given mesh for a specified animation.
The animator object's methods:

- `animator.start()`
- `animator.pause()`
- `animator.stop()`
- `animator.getName()`
- `animator.getType()`
- `animator.getLength()`
- `animator.getTimePos()`
- `animator.getLoop()`
- `animator.getWeight()`
- `animator.getEnabled()`
- `animator.setLength(value)`
- `animator.setTimePos(value)`
- `animator.setLoop(value)`
- `animator.setWeight(value)`

### `Mesh.save(path)`

- `path` String

Saves this mesh into a file.
