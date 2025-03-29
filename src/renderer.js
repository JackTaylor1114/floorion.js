import { enableZoom } from "./ZoomHandler.js";

class Floorplan
{
  /**
   * Constructor
   * @param {*} parentContainerId The element ID of the parent container 
   * @param {*} input The input data in JSON format
   */
  constructor(parentContainerId, input)
  {
    this.parentContainer = document.getElementById(parentContainerId);
    if (!this.parentContainer)
    {
      console.error(`Container Element "${parentContainerId}" not found`);
      return;
    }
    this.data = input;
    this.initKonva();
  }

  initKonva()
  {
    this.stage = new Konva.Stage({
      container: this.parentContainer.id,
      width: this.parentContainer.clientWidth,
      height: this.parentContainer.clientHeight,
      draggable: true
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    this.drawRooms();
    enableZoom(this.stage, this.layer);
  }

  drawRooms()
  {
    this.data.raeume.forEach(raum =>
    {
      const rect = new Konva.Rect({
        x: raum.x,
        y: raum.y,
        width: raum.width,
        height: raum.height,
        fill: raum.color || "gray",
        stroke: 'black',
        strokeWidth: 2,
        draggable: false
      });

      const label = new Konva.Text({
        x: raum.x + 10,
        y: raum.y + 10,
        text: raum.name,
        fontSize: 16,
        fontFamily: 'Arial',
        fill: 'black'
      });

      this.layer.add(rect);
      this.layer.add(label);
    });

    this.layer.draw();
  }
}

/**
 * Render a floorplan
 * @param {*} parentContainerId The element ID of the parent container 
 * @param {*} input The input data in JSON format
 * @returns A floorplan instance
 */
export function renderFloorionPlan(parentContainerId, input)
{
  return new Floorplan(parentContainerId, input);
}