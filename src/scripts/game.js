"use strict";
const $ = document;

const GameCanvas = $.getElementById("GameCanvas");
const DrawingContext = GameCanvas.getContext("2d");

const GridSize = 20;
const CellSize = 20;
const CanvasSize = GridSize * CellSize;

GameCanvas.width = CanvasSize;
GameCanvas.height = CanvasSize;
