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

> Points are defined as array with two positive numbers.\
Point `[0,0]` is the top left corner of the floorplan.\
The `x-axis` is left to right and the `y-axis` is top to bottom.

> HTML color names or hex values can be used as colors.

A floorplan is defined as an array of `1..n buildings` with the following structure:

#### Buildings

Each building has a `name` and a `color` property.\
The base shape is defined by an array with `4..n points`.\
Buildings contain an array of `1..n levels`.

#### Levels

Each level has a `name` and `color` property.\
The base shape is defined by an array with `4..n points`.\
Levels contain an array of `1..n rooms`.

#### Rooms

Each room has the following properties:
* `name`
* `fontsize` 
* `color`

The shape of a room is defined by an array of `4..n points`.

*Example:*
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
            { "name": "Room 1", "x": 50, "y": 50, "width": 80, "height": 50, "color": "blue" },
            { "name": "Room 2", "x": 90, "y": 50, "width": 70, "height": 50, "color": "red" }
          ]
        },
        {
          "name": "2nd Floor",
          "rooms": 
          [
            { "name": "Room A", "x": 50, "y": 50, "width": 50, "height": 40, "color": "green" },
            { "name": "Room B", "x": 350, "y": 50, "width": 15, "height": 15, "color": "beige" }
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
            { "name": "Lobby", "x": 100, "y": 100, "width": 200, "height": 150, "color": "red" }
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