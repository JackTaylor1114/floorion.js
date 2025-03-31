import Konva from "konva";
import { enableZoom } from "./ZoomHandler.js";
import { createLevelSelector } from "./LevelSelector.js";
import { validateInputData } from "./InputValidation.js";
import { createBuildingSelector } from "./BuildingSelector.js";

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
      throw new Error(`container element "${parentContainerId}" not found`);
    }

    //Validate the input data
    if (!validateInputData(input)) return;
    this.data = input;

    this.initKonva();
  }

  /**
   * Initialize the Konva framework
   */
  initKonva()
  {
    //Create a new stage for drawing
    this.stage = new Konva.Stage({
      container: this.parentContainer.id,
      width: this.parentContainer.clientWidth,
      height: this.parentContainer.clientHeight,
      draggable: true
    });

    //Add the main layer to the stage
    this.mainLayer = new Konva.Layer();
    this.stage.add(this.mainLayer);

    //Add the building and level selector and zoom indicator
    createBuildingSelector(this)
    createLevelSelector(this);
    enableZoom(this.stage, this.mainLayer);

    //Initial drawing of the floorplan
    this.drawRooms();
  }

  /**
   * Draw the content of the current level to the stage
   */
  drawRooms()
  {
    //Remove all UI elements on the current layer
    this.mainLayer.destroyChildren();

    this.data.buildings[this.currentBuildingIndex].levels[this.currentLevelIndex].rooms.forEach(room =>
    {
      const rect = new Konva.Rect({
        x: room.x,
        y: room.y,
        width: room.width,
        height: room.height,
        fill: room.color || "gray",
        stroke: 'black',
        strokeWidth: 2
      });

      const label = new Konva.Text({
        x: room.x + 10,
        y: room.y + 10,
        text: room.name,
        fontSize: 16,
        fontFamily: 'Arial',
        fill: 'black'
      });

      this.mainLayer.add(rect);
      this.mainLayer.add(label);
    });

    this.mainLayer.draw();
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