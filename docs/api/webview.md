# Webview

The `Webview` class is a `Node`, that can present a Chrome webview in the 3D space.

## Properties
#### `inputDisabled`
`Boolean`, wether input should be disabled in the browser window, default: `true`.

#### `browserWindow`
The underlying electron's Chromium `BrowserWindow`.

#### `props`
Properties regarding the webview's other properties and base classes.

#### `externalCanvas`
A `Canvas` Node that can be used to render the Webview's content to there instead of its own canvas.

#### `isExternal`
A `Boolean`, indicating that currently it renders to the `externalCanvas`.

#### `isReady`
A `Boolean`, `true` if it loaded the set URL successfully.

#### `pdfJSPath`
A `String`, that is the path of the HTML file that loads the PDF files, if PDF
preview is enabled.

## Events
#### `'ready'`
Fires, when the webview is successfully loaded a website and started rendering.

## Methods
#### `w = Webview(options)`
Creates a new `Webview` object. The `options` object describes the `Canvas` that it inherits from, and the webview:
- `url`: a `String` url that will be loaded in the webview
- `pdf`: a `Boolean` indicating whether it should enable view PDF files, default `false`
- `nodeIntegration`: a `Boolean` indicating that the created Electron BrowserWindow should have *nodeIntegration*.

#### `w.loadURL(url)`
Sets the given `url` for the webview.

#### `w.enableInput()`
Enables input handling.

#### `w.disableInput()`
Disables input handling.

#### `w.renderToExternal()`
Starts rendering to the external canvas.

#### `w.renderToDefault()`
Starts rendering to its own canvas.

#### `w.setResolution(width, height)`
Sets the resolution of the canvas and its Electron BrowserWindow's size to the given `width` and `height`.
