# Overlay

The `Overlay` class is a `Webview`, that can present a UI on the overlay.

## Properties

## Methods
#### `o = Overlay(options)`
Creates a new `Overlay` object. The `options` object describes the `Webview` that it inherits from.

#### `o.show()`
Shows the overlay and enables the input for it.

#### `o.hide()`
Hides the overlay and disables the input for it.

#### `o.injectNode(name, node)`
Injects the given node to the scope of its chromium webview in the `window[name]` global. Emits a `'${name}-ready'` event in the webview's scope on the `process` object.

``` js
// Main process
let o = wom.create('overlay', { url: someURL })
o.injectNode('foo', fooNode)
```

``` js
// Renderer process
process.once('foo-ready', () => {
  console.log('ready to use foo', window.foo)
})
```
