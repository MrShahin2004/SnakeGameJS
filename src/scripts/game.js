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

// Food Data
let Food = { gridX: 10, gridY: 14 };

// Getting Input
function GetInput() {
    // Will be implemented later.
}

// Updating States
function UpdateState() {
    // Will be implemented later.
}

// Displaying Grid Lines
function DisplayGridLines() {
    DrawingContext.strokeStyle = "#333333";
    DrawingContext.lineWidth = 1;

    for (let Index = 0; Index <= GridSize; Index++) {
        let Position = Index * CellSize;

        DrawingContext.beginPath();
        DrawingContext.moveTo(Position, 0);
        DrawingContext.lineTo(Position, CanvasSize);
        DrawingContext.stroke();

        DrawingContext.beginPath();
        DrawingContext.moveTo(0, Position);
        DrawingContext.lineTo(CanvasSize, Position);
        DrawingContext.stroke();
    }
}

// Rendering Games
function RenderVisual() {
    // Clearing Whole Canvas First
    DrawingContext.clearRect(0, 0, CanvasSize, CanvasSize);

    DisplayGridLines();

    // Drawing Snake
    DrawingContext.fillStyle = "green";
    Snake.forEach((BodySegment) => {
        DrawingContext.fillRect(BodySegment.gridX * CellSize, BodySegment.gridY * CellSize, CellSize, CellSize);
    });

    // Drawing Food
    DrawingContext.fillStyle = "red";
    DrawingContext.fillRect(Food.gridX * CellSize, Food.gridY * CellSize, CellSize, CellSize);
}

function EnforceGameLoop() {
    GetInput();
    UpdateState();
    RenderVisual();

    requestAnimationFrame(EnforceGameLoop);
}

requestAnimationFrame(EnforceGameLoop);
