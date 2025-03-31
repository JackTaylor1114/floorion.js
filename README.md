# floorion.js

A simple JavaScript library to render floor plans on a website.

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

The `renderFloorionPlan` takes an JSON object as input which represents your floorplan.\
If the input format does not match the requirements, an error will be thrown.

* A floorplan contains an array of `1..n buildings`
* Each building has a `name` property and an array of `1..n levels`
* Each level has a `name` property and and array `1..n rooms`
* Each room has the following properties:
  * `name`
  * `x`
  * `y`
  * `width`
  * `height`
  * `color`

  ```json
  {
    "buildings": 
    [
      {
        "name": "Building A",
        "levels": 
        [
          {
            "name": "1st Floor",
            "rooms": 
            [
              { "name": "Room 101", "x": 50, "y": 50, "width": 200, "height": 150, "color": "blue" },
              { "name": "Room 102", "x": 300, "y": 50, "width": 150, "height": 150, "color": "red" }
            ]
          },
          {
            "name": "2nd Floor",
            "rooms": 
            [
              { "name": "Room 201", "x": 50, "y": 50, "width": 250, "height": 150, "color": "green" },
              { "name": "Room 202", "x": 350, "y": 50, "width": 150, "height": 150, "color": "beige" }
            ]
          }
        ]
      },
      {
        "name": "Building B",
        "levels": 
        [
          {
            "name": "1st Floor",
            "rooms": 
            [
              { "name": "Reception", "x": 100, "y": 100, "width": 200, "height": 150, "color": "pink" }
            ]
          }
        ]
      }
    ]
  }
  ```

## Dependencies

| Package    | Usage | Link |
| -------- | ------- | ------- |
| Konva  | 2D Drawing Library  | https://konvajs.org/
| Vite | local development server  | https://vite.dev/

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