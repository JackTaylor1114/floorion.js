import { enableZoom } from "./ZoomHandler.js";
import Konva from "konva";

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

  /**
   * Initialize Konva framework
   */
  initKonva() {
    this.stage = new Konva.Stage({
        container: this.parentContainer.id,
        width: this.parentContainer.clientWidth,
        height: this.parentContainer.clientHeight,
        draggable: true
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    this.createEtagenSelector();
    this.drawRooms();
    enableZoom(this.stage, this.layer);
}




drawRooms() {
  // Nur die Raum-Layer löschen, NICHT die UI-Layer!
  this.layer.destroyChildren();  

  this.data.etagen[this.currentEtageIndex ?? 0].raeume.forEach(raum => {
      const rect = new Konva.Rect({
          x: raum.x,
          y: raum.y,
          width: raum.width,
          height: raum.height,
          fill: raum.color || "gray",
          stroke: 'black',
          strokeWidth: 2
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





createEtagenSelector() {
  // Überprüfen, ob der Selector bereits existiert
  if (document.getElementById("etagen-select")) return;

  // Container-Element holen
  const container = this.parentContainer;

  // Wrapper erstellen (damit Selector unter der Zeichenfläche bleibt)
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";

  // Original-Container verschieben
  container.parentNode.insertBefore(wrapper, container);
  wrapper.appendChild(container);

  // Select-Element für die Etagenwahl erstellen
  const select = document.createElement("select");
  select.id = "etagen-select";
  select.style.marginTop = "5px";
  select.style.padding = "5px";
  select.style.fontSize = "16px";

  // Optionen für Etagen hinzufügen
  this.data.etagen.forEach((etage, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = etage.name;
      select.appendChild(option);
  });

  // Event-Listener für Etagen-Wechsel
  select.addEventListener("change", (event) => {
      this.changeEtage(parseInt(event.target.value, 10));
  });

  // Select-Element zum Wrapper hinzufügen
  wrapper.appendChild(select);

  // Standard-Etage setzen
  select.value = this.currentEtageIndex;
}

changeEtage(index) {
  this.currentEtageIndex = index;
  this.drawRooms(); // Räume der neuen Etage zeichnen

  // Dropdown-Value aktualisieren
  document.getElementById("etagen-select").value = index;
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