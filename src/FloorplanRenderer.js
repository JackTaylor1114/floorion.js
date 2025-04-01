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
    this.draw();

    //Resize the canvas
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  /**
   * Draws the content of the current building and level to the stage
   */
  draw()
  {
    //Remove all UI elements on the current layer
    this.mainLayer.destroyChildren();

    const currentBuilding = this.data.buildings[this.currentBuildingIndex];
    const currentLevel = currentBuilding.levels[this.currentLevelIndex];

    //Draw the building base
    const flatBuildingPoints = currentBuilding.points.flatMap(point => point);
    const buildingBase = new Konva.Line({
      points: flatBuildingPoints,
      fill: currentBuilding.color,
      stroke: 'black',
      strokeWidth: 2,
      closed: true
    });
    this.mainLayer.add(buildingBase);

    //Draw the level base
    const flatLevelPoints = currentLevel.points.flatMap(point => point);
    const levelBase = new Konva.Line({
      points: flatLevelPoints,
      fill: currentLevel.color,
      stroke: 'black',
      strokeWidth: 2,
      closed: true
    });
    this.mainLayer.add(levelBase);

    //Draw the rooms in the level
    currentLevel.rooms.forEach(room =>
    {
      const flatRoomPoints = room.points.flatMap(point => point);
      const roomPolygon = new Konva.Line({
        points: flatRoomPoints,
        fill: room.color,
        stroke: 'black',
        strokeWidth: 2,
        closed: true
      });

      // Berechne die Position für den Namen (Mittelpunkt des Polygons)
      const xValues = room.points.map(p => p[0]);
      const yValues = room.points.map(p => p[1]);
      const centerX = (Math.min(...xValues) + Math.max(...xValues)) / 2;
      const centerY = (Math.min(...yValues) + Math.max(...yValues)) / 2;

      const label = new Konva.Text({
        x: centerX - room.name.length * 3, // Text mittig ausrichten
        y: centerY - 8,
        text: room.name,
        fontSize: room.fontsize,
        fontFamily: 'Arial',
        fill: 'black'
      });

      this.mainLayer.add(roomPolygon);
      this.mainLayer.add(label);
    });

    this.mainLayer.draw();
  }

  /**
  * Resize the canvas if the window is resized
  */
  resizeCanvas() 
  {
    const newWidth = this.parentContainer.clientWidth;
    const newHeight = this.parentContainer.clientHeight;
    this.stage.width(newWidth);
    this.stage.height(newHeight);
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