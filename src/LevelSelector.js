const SELECTOR_ID = "floorion-level-select";

/**
 * Create a selector for the level of the building
 * @param {*} renderer the renderer instance 
 */
export function createLevelSelector(renderer)
{
  if (document.getElementById(SELECTOR_ID)) return;
  const container = renderer.parentContainer;

  //Create the selector element
  const levelSelector = document.createElement("select");
  levelSelector.id = SELECTOR_ID;
  levelSelector.style.position = "relative";
  levelSelector.style.top = "-30px";
  levelSelector.style.left = "10px";
  levelSelector.style.padding = "3px";
  levelSelector.style.background = "white";
  levelSelector.style.border = "1px solid black";
  levelSelector.style.zIndex = "99";

  //Add selection options
  renderer.data.buildings[renderer.currentBuildingIndex].levels.forEach((level, index) =>
  {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = level.name;
    levelSelector.appendChild(option);
  });

  //Add event listener for change event
  levelSelector.addEventListener("change", (event) =>
  {
    switchLevel(renderer, parseInt(event.target.value, 10));
  });

  //Add the selector to the container
  container.appendChild(levelSelector);

  //Set initial level
  levelSelector.value = 0;
  renderer.currentLevelIndex = 0;
}

/**
 * Update the selection options of the level selector
 * @param {*} renderer The renderer instance 
 */
export function updateLevels(renderer) 
{
  //Clear the selector and add the levels of the current building
  let levelSelector = document.getElementById(SELECTOR_ID);
  levelSelector.innerHTML = "";
  renderer.data.buildings[renderer.currentBuildingIndex].levels.forEach((level, index) =>
  {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = level.name;
    levelSelector.appendChild(option);
  });
}

/**
 * Switch the currently shown level
 * @param {*} renderer The renderer instance 
 * @param {*} index The index of the level to show
 */
function switchLevel(renderer, index)
{
  renderer.currentLevelIndex = index;
  renderer.draw();
  document.getElementById(SELECTOR_ID).value = index;
}