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

function Input() {
    console.log("Receiving player input...");
}

function Update() {
    console.log("Updating game states...");
}

function Render() {
    console.log("Rendering game visuals...");
}

function EnforceGameLoop() {
    Input();
    Update();
    Render();

    requestAnimationFrame(EnforceGameLoop);
}

requestAnimationFrame(EnforceGameLoop);
