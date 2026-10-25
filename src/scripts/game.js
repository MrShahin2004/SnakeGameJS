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
let Snake = {
    head: {
        // Position of Head Based on Grid, not Pixels
        xGrid: 6,
        yGrid: 4
    }
}

// Converting the Grid Coordinates to Pixel Coordinates
DrawingContext.fillRect(Snake.head.xGrid * CellSize, Snake.head.yGrid * CellSize, CellSize, CellSize);
