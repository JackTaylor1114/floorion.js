# floorion

A simple JavaScript library to render floor plans.

## Table of Content
1. [Usage](#usage)  
2. [Dependencies](#dependencies)  
3. [Build](#build) 
4. [Demo](#demo)

## Usage

To add a floorplan on a site, create a `div` container element:
```html
<div id="container-id"></div>
```
Import the library in your script:
```js
import { renderFloorionPlan } from 'floorion';
```
Call the `renderFloorionPlan` function to create the floorplan.\
Pass the ID of the container element and the room data into the function:
```js
renderFloorionPlan("container-id", data);
```

### Input Data

TODO

## Dependencies

| Package    | Usage | Link |
| -------- | ------- | ------- |
| Konva  | 2D Drawing Library  | https://konvajs.org/
| Vite | Local development server  | https://vite.dev/

## Build

Use the following commands to download the project and build it:
```
git clone https://github.com/JackTaylor1114/floorion.js.git
npm install
npm run build
```

## Demo

You can run a local demo of the library using the command `npm run demo`.\
This will use `vite` to launch a local server with a demo site.