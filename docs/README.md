## Introduction

> Developer's guide to Maxwhere.
 
Maxwhere engine is a multipurpose 3D software framework that combines the power of 3D worlds and web-based 
content controlling everything through JavaScript code.

It is built up from a native C++ core, a JS wrapper layer and an Electron-based shell layer which provides WOM (Where Object Model) to the developer. The native core is responsible for every low-level functionality, such as rendering the scene, managing object repository and event system, and running physical simulation. WOM turns the whole 3d scene to an accessible and living object in JS and broaden the engine’s capabilities with node.js features.

## Getting Maxwhere SDK

Maxwhere SDK allows you to create, interact or customize Wheres for Maxwhere. Wheres are applications running on Maxwhere engine including the backend logic and associated 3d scene. SDK is available in the form of Node.js module for developers. After you installed latest Node.js on your system, Maxwhere SDK can be installed with npm module manager. 

```
$ npm i -g @mxw/sdk
```
*NOTE: The MaxWhere engine and the SDK is a propritary software and can be accessed only by our partners. For further information about trial, licensing, etc. please contact us in email (office@maxwhere.com)*

## API References

### Nodes

- [**wom**](api/wom.md)
- [canvas](api/canvas.md)
- [light](api/light.md)
- [mesh](api/mesh.md)
- [node](api/node.md)
- [overlay](api/overlay.md)
- [webview](api/webview.md)

### Enviroment

- [material](api/material.md)

### Components

- [component](api/component.md)
- [webtable](api/webtable.md)
- [billboard](api/billboard.md)

## Examples

The followings code examples shows the basic techniques of Maxwhere programming, proceeding from simple tasks to more complex scenarios. Examples will show how to perform a specific action and how to combine them. When going through the examples always consult the related documentation for the best understanding.

Try examples or your hadwritten test code by running

```
$ maxwhere run <path-to-app>
```

Available examples:

- [1. Initialize app window](../examples/1-initialize-window)
- [2. Add mesh and light to scene](../examples/2-mesh-light)
- [3. Add canvas, webview and overlay to scene](../examples/3-canvas-webview-overlay)
- [4. Webview interacts with scene](../examples/4-interactive-webview)
- [5. JSX syntax for scene objects](../examples/5-jsx-syntax)
- [6. Loading scene from config file](../examples/6-load-config)
- [7. Node and light animations](../examples/7-animations)
- [8. Handling 3d object events](../examples/8-event-handle)
- [9. Using physics of scene objects](../examples/9-physicals)
- [10. Use Oge mesh animations](../examples/10-mesh-animator)
- [11. Control material shader](../examples/11-shader-control)
- [12. Complex scene with minigame](../examples/12-complex-scene)
- [13. Use server and websocket to move 3d object](../examples/13-websockets)
