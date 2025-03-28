export class BuildingPlan {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container mit ID "${containerId}" nicht gefunden.`);
            return;
        }
        this.data = data;
        this.initKonva();
    }

    initKonva() {
        this.stage = new Konva.Stage({
            container: this.container.id,
            width: this.container.clientWidth,
            height: this.container.clientHeight,
            draggable: true
        });

        this.layer = new Konva.Layer();
        this.stage.add(this.layer);

        this.drawRooms();
        this.enableZoom();
    }

    drawRooms() {
        this.data.raeume.forEach(raum => {
            const rect = new Konva.Rect({
                x: raum.x,
                y: raum.y,
                width: raum.width,
                height: raum.height,
                fill: raum.color || "gray",
                stroke: 'black',
                strokeWidth: 2,
                draggable: true
            });

            const label = new Konva.Text({
                x: raum.x + 10,
                y: raum.y + 10,
                text: raum.name,
                fontSize: 16,
                fontFamily: 'Arial',
                fill: 'black'
            });

            rect.on('dragmove', () => {
                label.x(rect.x() + 10);
                label.y(rect.y() + 10);
            });

            this.layer.add(rect);
            this.layer.add(label);
        });

        this.layer.draw();
    }

    enableZoom() {
        this.stage.on('wheel', (e) => {
            e.evt.preventDefault();
            const scaleBy = 1.1;
            const oldScale = this.stage.scaleX();
            const mousePointTo = {
                x: (e.evt.offsetX - this.stage.x()) / oldScale,
                y: (e.evt.offsetY - this.stage.y()) / oldScale,
            };
            const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
            this.stage.scale({ x: newScale, y: newScale });
            this.stage.position({
                x: e.evt.offsetX - mousePointTo.x * newScale,
                y: e.evt.offsetY - mousePointTo.y * newScale,
            });
            this.stage.batchDraw();
        });
    }
}

export function renderBuildingPlan(containerId, data) {
    return new BuildingPlan(containerId, data);
}