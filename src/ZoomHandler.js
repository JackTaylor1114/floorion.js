/**
 * Enable zoom functionality and show a zoom indicator
 * @param {*} stage The default stage
 * @param {*} layer The drawing layer
 */
export function enableZoom(stage, layer)
{
  const scaleBy = 1.1;

  //Zoom Indicator Text
  const zoomText = new Konva.Text({
    x: 10,
    y: 10,
    text: "Zoom: 100%",
    fontSize: 20,
    fontFamily: "Arial",
    fill: "black",
    name: "zoomText",
    listening: false
  });

  layer.add(zoomText);
  layer.draw();

  //Handle Mouse Wheel Event
  stage.on("wheel", (e) =>
  {
    e.evt.preventDefault();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: (e.evt.offsetX - stage.x()) / oldScale,
      y: (e.evt.offsetY - stage.y()) / oldScale,
    };

    //Calculate new zoom level
    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
    stage.scale({ x: newScale, y: newScale });
    stage.position({
      x: e.evt.offsetX - mousePointTo.x * newScale,
      y: e.evt.offsetY - mousePointTo.y * newScale,
    });

    stage.batchDraw();

    //Update the zoom indicator text
    zoomText.text(`Zoom: ${Math.round(newScale * 100)}%`);
    zoomText.absolutePosition({ x: 10, y: 10 });
    zoomText.scale({ x: 1 / newScale, y: 1 / newScale });
  });

  //Fix the zoom indicator position when dragging
  stage.on("dragmove", () =>
  {
    zoomText.absolutePosition({ x: 10, y: 10 });
  });
}