# floorion.js

A simple JavaScript library to render floor plans on a website.

![Screenshot](https://github.com/JackTaylor1114/floorion.js/blob/main/img/demo.png?raw=true)

## Table of Content
1. [Usage](#usage)  
2. [Dependencies](#dependencies)  
3. [Build](#build) 
4. [Demo](#demo)

## Usage

To add a floorplan on a website, create a `div` container element:
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
The floorplan displays one level of a building.\
You can switch between different buildings and levels with a selector.

### Input Data

The `renderFloorionPlan` takes an JSON object as input which represents your floorplan.\
If the input format does not match the requirements, an error will be thrown.

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

> Points are defined as array with two positive numbers.\
Point `[0,0]` is the top left corner of the floorplan.\
The `x-axis` is left to right and the `y-axis` is top to bottom.\
HTML color names and hex values can be used as colors.

*Example:*
```json
{
  "buildings": [
    {
      "name": "Building A",
      "color": "Grey",
      "points": [[50, 50 ],[50, 400],[1000,400],[1000,50]],
      "levels": [
        {
          "name": "1st Floor",
          "color": "DarkGrey",
          "points": [[60,60],[60,390],[990,390],[990,60]],
          "rooms": [
            {
              "name": "Office 1",
              "fontsize": 15,
              "points": [[60,60],[160,60],[160,200],[60,200]],
              "color": "Red"
            },
            {
              "name": "Office 2",
              "fontsize": 15,
              "points": [[500,200],[500,350],[800,350],[800,200]],
              "color": "LightBlue"
            }
          ]
        },
        {
          "name": "2nd Floor",
          "color": "DarkGrey",
          "points": [[60,60],[60,390],[990,390],[990,60]],
          "rooms": [
            {
              "name": "Office 3",
              "fontsize": 15,
              "points": [[200,200],[200,300],[300,300],[300,200]],
              "color": "Green"
            },
            {
              "name": "Office 4",
              "fontsize": 15,
              "points": [[500,200],[500,350],[800,350],[800,200]],
              "color": "Blue"
            }
          ]
        }
      ]
    },
    {
      "name": "Building B",
      "color": "Grey",
      "points": [[50,50],[50,400],[1000,400],[1000,50]],
      "levels": [
        {
          "name": "Ground Floor",
          "color": "DarkGrey",
          "points": [[60,60],[60,390],[990,390],[990,60]],
          "rooms": [
            {
              "name": "Storage",
              "fontsize": 15,
              "points": [[500,200],[500,350],[800,350],[800,200]],
              "color": "LightGreen"
            }
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