import Konva from "konva";

/**
 * Enable zoom functionality and show a zoom indicator
 * @param {*} stage The default stage
 * @param {*} layer The drawing layer
 */
export function enableZoom(stage)
{
  const scaleBy = 1.1;

  //Create a new layer for the zoom indicator
  const uiLayer = new Konva.Layer();
  stage.add(uiLayer);
  
  //Add the zoom indicator
  let zoomText = uiLayer.findOne(".zoomText");
  if (!zoomText)
  {
    zoomText = new Konva.Text({
      x: 10,
      y: 10,
      text: "Zoom: 100%",
      fontSize: 20,
      fontFamily: "Arial",
      fill: "black",
      name: "zoomText",
      listening: false
    });
    uiLayer.add(zoomText);
  }

  //Listen for mouse wheel events to zoom in and out
  stage.on("wheel", (e) =>
  {
    e.evt.preventDefault();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: (e.evt.offsetX - stage.x()) / oldScale,
      y: (e.evt.offsetY - stage.y()) / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

    stage.scale({ x: newScale, y: newScale });
    stage.position({
      x: e.evt.offsetX - mousePointTo.x * newScale,
      y: e.evt.offsetY - mousePointTo.y * newScale,
    });

    stage.batchDraw();

    //Update zoom text and position
    zoomText.text(`Zoom: ${Math.round(newScale * 100)}%`);
    zoomText.absolutePosition({ x: 10, y: 10 });
    zoomText.scale({ x: 1 / newScale, y: 1 / newScale });
  });

  //Fix the zoom text when stage is dragged
  stage.on("dragmove", () =>
  {
    zoomText.absolutePosition({ x: 10, y: 10 });
  });
}