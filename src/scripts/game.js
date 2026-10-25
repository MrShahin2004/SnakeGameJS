"use strict";
const $ = document;

// Initializing Canvas
const GameCanvas = $.getElementById("GameCanvas");
const DrawingContext = GameCanvas.getContext("2d");

// Defining Grid
const GridSize = 20;
const CellSize = 20;
const CanvasSize = GridSize * CellSize;

// Defining Dimensions
GameCanvas.width = CanvasSize;
GameCanvas.height = CanvasSize;

// Snake Data
let Snake = [
    { gridX: 8, gridY: 10 },
    { gridX: 9, gridY: 10 },
    { gridX: 10, gridY: 10 }
];

// Rendering Function
function RenderGame() {
    DrawingContext.fillStyle = "green";

    Snake.forEach((BodySegment) => {
        DrawingContext.fillRect(BodySegment.gridX * CellSize, BodySegment.gridY * CellSize, CellSize, CellSize);
    });
}

RenderGame();
