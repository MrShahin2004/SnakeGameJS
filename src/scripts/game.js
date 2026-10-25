"use strict";
const $ = document;

const GameCanvas = $.getElementById("GameCanvas");
const DrawingContext = GameCanvas.getContext("2d");

DrawingContext.fillStyle = "purple";
DrawingContext.fillRect(10, 20, 300, 400);

console.log(GameCanvas.width, GameCanvas.height);
