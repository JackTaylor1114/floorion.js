import { renderBuildingPlan } from '../index.js';

document.addEventListener("DOMContentLoaded", () =>
{
    const data = {
        raeume: [
            { name: "Room 1", x: 50, y: 50, width: 100, height: 100, color: "red" },
            { name: "Room 2", x: 200, y: 50, width: 120, height: 100, color: "blue" }
        ]
    };

    renderBuildingPlan("container", data);
});