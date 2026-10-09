"use strict";
const $ = document;

const Canvas = $.getElementById("canvas-element");
const CTX = Canvas.getContext("2d");

let GRID_SIZE = 20;
let CELL_SIZE = 20;
let CANVAS_SIZE = GRID_SIZE * CELL_SIZE;

Canvas.width = CANVAS_SIZE;
Canvas.height = CANVAS_SIZE;

CTX.fillRect(100, 200, 200, 200);

function Update() {
    console.log("Updating game states...");
}

function Render() {
    console.log("Rendering game visuals...");
}

function EnforceGameLoop() {
    Update();
    Render();

    requestAnimationFrame(EnforceGameLoop);
}

requestAnimationFrame(EnforceGameLoop);
