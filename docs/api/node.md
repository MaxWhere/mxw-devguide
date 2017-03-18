# Node

> The base for every element in the WOM tree. Its children are also nodes.

`Node` is a [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter).

## `new Node([options])`

- `options` Object (optional)
  - `id` String (optional) - A unique identifier for a node among other nodes.
  - `class` String (optional) - Determines the class of a node for querying.
  - `position` Object, `{x, y, z}` (optional) - The 3D point where the node will
    be located. Default is: `{x: 0.0, y: 0.0, z: 0.0}`.
  - `orientation` Object, `{x, y, z, w}` or `{angle, axis: {x, y, z}}`
    (optional) - An object describing the node's orientation in 3D space.
    Default is: `{x: 0.0, y: 0.0, z: 0.0, w: 1.0}`.
  - `scale` Object `{x, y, z}` or Integer (optional) - scales the node along the
    axes or all of them with one value if a single Integer is passed. Default
    is: `{x: 1.0, y: 1.0, z: 1.0}`.
  - `physical` Object (optional) - The physical description of the node.
  - `autophysical` Boolean (optional) - Wether to generate a simple physical
    shape for the node. Default is: `false`.
  - `done` Function (optional) - A callback that executes, when the node is
    successfully inserted into the 3D scene.

## Instance Properties

### `Node.attached`

A `boolean` that indicates that the node is attached to an other, *parent* `Node`. Default: `false`.

### `Node.children`

An array of `Node`s that are the children of the `Node`. That means their relative positions are calculated relative to their parent's and if the parent is removed, its children will be removed as well.

### `Node.created`

A `boolean` that indicates that the node is **attached and its entity is created**. If no entity is specified for this `Node`, it only attaches. Default: `false`.

### `Node.entity`

The underlying native representation of a `Node`'s entity. It only has a value after attachment or creation.

### `Node.id`

The `Node`'s unique ID, that is randomly generated or user specified.

### `Node.node`

A `NodeWrap` that is the underlying native representation of a `Node`. It only has a value after attachment or creation.

### `Node.parent`

The parent `Node` if it has any.

### `Node.animating`

A `boolean` that indicates that `Node` is currently in an animation. Default: `false`.

### `Node.props`

The properties of a `Node`. Almost every information about a `Node` is stored here.

## Class Methods

### `Node.fromNative(nativeNode)`

From the native node (`NodeWrap`) object constructs a `Node` object.

## Instance Methods

### `Node.attach(parent)`
Attaches `n` to a `parent` `Node`. If no `parent` specified it will be attached to the **root `Node`**. If `n` is already attached it will be moved to the new parent `Node`.

### `Node.create()`
Creates the entity specified for `n`. If it's not yet attached it will be attached.

### `Node.render(child)`
If a `n` is attached, children can be added to it. `child` can be a single `Node`, or an array `Node`s. Every child and their children will be created as well. Use `add` if you want to avoid this.

### `Node.add(child)`
Same as `render` but it doesn't create the children on the native side. It's useful when you only want to create a tree of `Node`s, but only at the end want to create them on the native side.

_Alias: `appendChild(element)`_

### `Node.removeChild(child)`
If `child` is a valid child of `n`, removes it, its entity and all of its children `Node`s.

### `Node.getPosition()`
Returns the position of the `Node` as an `Object` with the `{ x, y, z }` form.

### `Node.setPosition(x, y, z, ref, spc)`
Sets the `position` of `n` in reference of `ref: {'absolute', 'relative'}` and applied in space `spc: {'local', 'parent', 'world'}`. It's possible to give just one `Object` parameter with the `{ x, y, z }` form.

### `Node.translate(x, y, z, space)`

_Shortcut to `n.setPosition()` with `ref:'relative'`_

### `Node.getScale()`
Returns the scale of the `Node` as an `Object` with the `{ x, y, z }` form.

### `Node.setScale(x, y, z, ref, spc)`
Performs a scale transform on the `Node` in reference of `ref: {'absolute', 'relative'}` and applied in space `spc: {'local', 'parent', 'world'}`. `x`, `y`, `z` can be given by one `Object` parameter with the `{ x, y, z }` form.

### `Node.magnify(x, y, z, space)`

_Shortcut to `n.setScale()` with `ref:'relative'`_

### `Node.getOrientation()`
Returns the orientation of the `Node` as an `Object` with the `{ w, x, y, z }` form.

### `Node.setOrientation(w, x, y, z, ref, space)`
Orientate the `Node`in reference of `ref: {'absolute', 'relative'}` and applied in space `spc: {'local', 'parent', 'world'}`. `w`, `x`, `y`, `z` can be given by one `Object` parameter with the `{ w, x, y, z }` form or by `{angle, axis}` where `axis` is `{x, y, z}`.

### `Node.rotate(w, x, y, z, space)`

_Shortcut to `n.setOrientation()` with `ref:'relative'`_

### `Node.animate(attribute, options, complete)`
Animates the given `attribute` and `options` and calls the `complete` callback when the animation finishes.
Supported attributes for animating for `Node`s:
- `position`
- `scale`
- `orientation`

Options determine the behaviour of the animation:
- `to`: An object or array of objects that holds the end state of the animating `attribute`. If there is multiple state, it will iterate through those states. **Required.**
- `from`: An object or array of objects that holds the beginning state of the animating `attribute`. If it's omitted it will animate from the actual state of the `attribute`. *Optional.*
- `duration`: A number or an array of numbers determining the duration of the different animation states in **seconds**.
- `repeat`: If `true`, it will repeat the animation over and over. Default: `false`.
- `loop`: If `true`, it will play the animation, then play it backwards and repeat it. Default: `false`.
- `cubic`: The cubic easing function of the animation. It is an array of the two control points of the bezier curve (`[ {x, y}, {x, y} ]`), or a `String` of the predefined easing functions: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `ease-in-out-back`, `ease-in-out-circ`, `ease-in-out-expo`, `ease-in-out-sine`, `ease-in-out-quint`, `ease-in-out-quart`, `ease-in-out-cubic`, `ease-in-out-quad`, `ease-out-back`, `ease-out-circ`, `ease-out-expo`, `ease-out-sine`, `ease-out-quint`, `ease-out-quart`, `ease-out-cubic`, `ease-out-quad`, `ease-in-back`, `ease-in-circ`, `ease-in-expo`, `ease-in-sine`, `ease-in-quint`, `ease-in-quart`, `ease-in-cubic`, `ease-in-quad`.
- `reference`: Possible operation references: `absolute`, `relative` optional. Defaults to `absolute`
- `space`: Possible operation spaces: `local`, `parent`, `world` optional. Defaults to `parent`

``` jsx
wom.render(<node>
  <mesh
    url='foo.mesh'
    x={20}
    scale={0.5}
    done={ b => {
      b.animate('position', {
        to: { x: 30, y: 30, z: 0 }
        , duration: 3
      })

      b.animate('scale', {
        to: [ { x: 2, y: 1, z: 5 }, { x: 1, y: 10, z: 6 } ]
        , duration: 1, loop: true
      })
    } }
  />
</node>)
```

### `Node.deanimate(attribute)`
Cancels the animation of the given `attribute`.

### `Node.show()`
Shows node with all of its entities.

### `Node.hide()`
Hides node with all of its entities.

### `Node.isShown()`
Gets visibility of node.

### `Node.clone()`
Clones node _... Not! (Unimplemented)_

### `Node.autoPhysical()`
Adds auto-generated physical shape to node based on mesh entity's axis aligned bounding box.

### `Node.addPhysicalShape(shape)`
Adds custom physical shape to node. Shape is described in `shape` object with properties according to [`PhysicalWrap`'s](../native/PhysicalWrap.md#physicalwrapaddshapedescriptor)

### `Node.removePhysicalShape(opts)`
Remove specified physical shape from node.

### `Node.removeAllPhysicalShape()`
Remove all physical shape from node

### `Node.getPhysicalType()`
Gets type of node's physical

### `Node.setPhysicalType(type)`
Sets type of node's physical to `type`

### `Node.getPointable()`
Returns whether the physical of node is pointable (aka. accepts ray cast)

### `Node.setPointable(raycast)`
Sets whether the physical of node accepts ray cast

### `Node.getCanCollide()`
Returns whether the physical of node can collide

### `Node.setCanCollide(collide)`
Sets whether the physical of node can collide

### `Node.getCoeffs()`
Returns coefficients of physical of node.

### `Node.setCoeffs(coefficients)`
Sets coefficients of physical of node.

### `Node.showTransformTool()`
Opens transformation tool on node.

### `Node.hideTransformTool()`
Closes transformation tool on node.

### `Node.isTranformToolVisible()`
Returns whether transformation tool is opened on node.

### `Node.getNodeById(id)`
From the current `n` Node, it starts traversing to find the Node with `id`. Returns that Node.

``` js
// Finding something from the root

let foo = wom.getNodeById(foo.id)
```

### `Node.addClass()`

### `Node.removeClass()`

### `Node.hasClass(c)`

### `Node.toggleClass(c, cond)`

### `Node.select(q)`

### `Node.selectAll(q)`
