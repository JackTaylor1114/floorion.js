import { renderFloorionPlan } from '../src/index';

document.addEventListener("DOMContentLoaded", () =>
{
  const data = {
    "levels": [
      {
        "name": "1st Floor",
        "rooms": [
          { "name": "Lobby", "x": 50, "y": 50, "width": 200, "height": 150, "color": "lightblue" },
          { "name": "Office 1", "x": 300, "y": 50, "width": 150, "height": 150, "color": "lightgray" }
        ]
      },
      {
        "name": "2nd floor",
        "rooms": [
          { "name": "Meeting Room", "x": 50, "y": 50, "width": 250, "height": 150, "color": "lightgreen" },
          { "name": "Office 2", "x": 350, "y": 50, "width": 150, "height": 150, "color": "beige" }
        ]
      }
    ]
  };

  renderFloorionPlan("container", data);
});