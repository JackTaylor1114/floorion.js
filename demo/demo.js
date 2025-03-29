import { renderFloorionPlan } from '../dist/floorion';

document.addEventListener("DOMContentLoaded", () =>
{
  const data = {
    "etagen": [
        {
            "name": "Erdgeschoss",
            "raeume": [
                { "name": "Lobby", "x": 50, "y": 50, "width": 200, "height": 150, "color": "lightblue" },
                { "name": "Büro 1", "x": 300, "y": 50, "width": 150, "height": 150, "color": "lightgray" }
            ]
        },
        {
            "name": "1. Stock",
            "raeume": [
                { "name": "Meetingraum", "x": 50, "y": 50, "width": 250, "height": 150, "color": "lightgreen" },
                { "name": "Büro 2", "x": 350, "y": 50, "width": 150, "height": 150, "color": "beige" }
            ]
        }
    ]
};

  renderFloorionPlan("container", data);
});