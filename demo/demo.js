import { renderFloorionPlan } from '../src/index';

document.addEventListener("DOMContentLoaded", () =>
{
  //Example input
  const data =
  {
    "buildings": [
      {
        "name": "Building A",
        "levels":
          [
            {
              "name": "1st Floor",
              "rooms":
                [
                  { "name": "Lobby", "x": 50, "y": 50, "width": 200, "height": 150, "color": "lightblue" },
                  { "name": "Office 1", "x": 300, "y": 50, "width": 150, "height": 150, "color": "lightgray" }
                ]
            },
            {
              "name": "2nd Floor",
              "rooms":
                [
                  { "name": "Meeting Room", "x": 50, "y": 50, "width": 250, "height": 150, "color": "lightgreen" },
                  { "name": "Office 2", "x": 350, "y": 50, "width": 150, "height": 150, "color": "beige" }
                ]
            }
          ]
      },
      {
        "name": "Building B",
        "levels":
          [
            {
              "name": "Ground Floor",
              "rooms":
                [
                  { "name": "Reception", "x": 100, "y": 100, "width": 200, "height": 150, "color": "pink" }
                ]
            }
          ]
      }
    ]
  }

  //Render the floorplan in the specified container
  renderFloorionPlan("container", data);
});