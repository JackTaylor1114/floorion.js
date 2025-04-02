import { renderFloorionPlan } from '../src/index';

document.addEventListener("DOMContentLoaded", () =>
{
  //Example input
  const data =
  {
    "buildings": [
      {
        "name": "Building A",
        "color": "Grey",
        "points": [[50, 50], [50, 400], [1000, 400], [1000, 50]],
        "levels":
          [
            {
              "name": "1st Floor",
              "color": "DarkGrey",
              "points": [[60, 60], [60, 390], [990, 390], [990, 60]],
              "rooms":
                [
                  {
                    "name": "Office 1",
                    "fontsize": 15,
                    "points": [[60, 60], [160, 60], [160, 200], [60, 200]],
                    "color": "Red"
                  },
                  {
                    "name": "Office 2",
                    "fontsize": 15,
                    "points": [[500, 200], [500, 350], [800, 350], [800, 200]],
                    "color": "LightBlue"
                  }
                ]
            },
            {
              "name": "2nd Floor",
              "color": "DarkGrey",
              "points": [[60, 60], [60, 390], [990, 390], [990, 60]],
              "rooms":
                [
                  {
                    "name": "Office 3",
                    "fontsize": 15,
                    "points": [[200, 200], [200, 300], [300, 300], [300, 200]],
                    "color": "Green"
                  },
                  {
                    "name": "Office 4",
                    "fontsize": 15,
                    "points": [[500, 200], [500, 350], [800, 350], [800, 200]],
                    "color": "Blue"
                  }
                ]
            }
          ]
      },
      {
        "name": "Building B",
        "color": "Grey",
        "points": [[50, 50], [50, 400], [1000, 400], [1000, 50]],
        "levels":
          [
            {
              "name": "Ground Floor",
              "color": "DarkGrey",
              "points": [[60, 60], [60, 390], [990, 390], [990, 60]],
              "rooms":
                [
                  {
                    "name": "Storage",
                    "fontsize": 15,
                    "points": [[20, 20], [100, 20], [100, 100], [20, 100]],
                    "color": "LightGreen"
                  }
                ]
            }
          ]
      }
    ]
  }

  //Render the floorplan in the specified container
  renderFloorionPlan("container", data);
});