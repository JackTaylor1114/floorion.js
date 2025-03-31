import { updateLevels } from "./LevelSelector";

const SELECTOR_ID = "floorion-building-select";

/**
 * Create a selector for the building
 * @param {*} renderer the renderer instance 
 */
export function createBuildingSelector(renderer)
{
  if (document.getElementById(SELECTOR_ID)) return;
  const container = renderer.parentContainer;

  //Create the selector element
  const buildingSelector = document.createElement("select");
  buildingSelector.id = SELECTOR_ID;
  buildingSelector.style.position = "relative";
  buildingSelector.style.top = "-30px";
  buildingSelector.style.left = "5px";
  buildingSelector.style.padding = "3px";
  buildingSelector.style.background = "white";
  buildingSelector.style.border = "1px solid black";
  buildingSelector.style.zIndex = "99";

  //Add selection options
  renderer.data.buildings.forEach((building, index) =>
  {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = building.name;
    buildingSelector.appendChild(option);
  });

  //Add event listener for change event
  buildingSelector.addEventListener("change", (event) =>
  {
    switchBuilding(renderer, parseInt(event.target.value, 10));
  });

  //Add the selector to the container
  container.appendChild(buildingSelector);

  //Set initial building
  buildingSelector.value = 0;
  renderer.currentBuildingIndex = 0;
}

/**
 * Switch the currently shown building
 * @param {*} renderer The renderer instance 
 * @param {*} index The index of the building to show
 */
function switchBuilding(renderer, index)
{
  //When switching buildings, the level selector needs to be updated
  renderer.currentBuildingIndex = index;
  renderer.currentLevelIndex = 0;
  updateLevels(renderer);
  renderer.drawRooms();
  document.getElementById(SELECTOR_ID).value = index;
}