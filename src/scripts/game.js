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
  { GridX: 10, GridY: 10 },
  { GridX: 9, GridY: 10 },
  { GridX: 8, GridY: 10 },
];

let MovementDirection = {
  X: 1,
  Y: 0,
};

// Generating a Random Position for Food
function GenerateRandomFoodPosition() {
  return {
    GridX: Math.floor(Math.random() * GridSize),
    GridY: Math.floor(Math.random() * CellSize),
  };
}

// Food Data
let Food = GenerateRandomFoodPosition();

// Getting Input
function GetInput() {
  // Will be implemented later.
}

// Updating States
function UpdateState() {
  let Head = Snake[0];

  let NewHead = {
    X: Head.GridX + MovementDirection.X,
    Y: Head.GridY + MovementDirection.Y,
  };

  Snake.unshift(NewHead);
  Snake.pop();
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

// Rendering the Game
function RenderVisual() {
  // Clearing Whole Canvas First
  DrawingContext.clearRect(0, 0, CanvasSize, CanvasSize);

  DisplayGridLines();

  // Drawing Snake
  DrawingContext.fillStyle = "green";
  Snake.forEach((BodySegment) => {
    DrawingContext.fillRect(
      BodySegment.GridX * CellSize,
      BodySegment.GridY * CellSize,
      CellSize,
      CellSize,
    );
  });

  // Drawing Food
  DrawingContext.fillStyle = "red";
  DrawingContext.fillRect(
    Food.GridX * CellSize,
    Food.GridY * CellSize,
    CellSize,
    CellSize,
  );
}

let MoveInterval = 150;
let LastMoveTime = 0;

// Running the Game Loop
function ExecuteGameLoop(CurrentTime) {
  // GetInput();
  
  if (CurrentTime - LastMoveTime >= MoveInterval) {
    UpdateState();
    LastMoveTime = CurrentTime;
  }

  RenderVisual();

  requestAnimationFrame(ExecuteGameLoop);
}

requestAnimationFrame(ExecuteGameLoop);
