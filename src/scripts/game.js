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

let CurrentMovementDirection = {
  X: 1,
  Y: 0,
};

let NextMovementDirection = {
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

// Listening for keyboard inputs
function ListenKeyDown(KeyboardEvent) {
  let Key = KeyboardEvent.key.toLowerCase();
  let RequestedDirection = null;

  switch (Key) {
    case "arrowup":
    case "w":
      RequestedDirection = { X: 0, Y: -1 };
      break;

    case "arrowleft":
    case "a":
      RequestedDirection = { X: -1, Y: 0 };
      break;

    case "arrowdown":
    case "s":
      RequestedDirection = { X: 0, Y: 1 };
      break;

    case "arrowright":
    case "d":
      RequestedDirection = { X: 1, Y: 0 };
      break;

    default:
      break;
  }

  KeyboardEvent.prevenDefault();

  let IsOppositeDirection =
    RequestedDirection.X === -CurrentMovementDirection.X &&
    RequestedDirection.Y === -CurrentMovementDirection.Y;

  if (!IsOppositeDirection) {
    NextMovementDirection = RequestedDirection;
  }
}

// Getting Input
function GetInput() {
  $.addEventListener("keydown", ListenKeyDown);
}

// Updating States
function UpdateState() {
  CurrentMovementDirection = NextMovementDirection;

  let Head = Snake[0];

  let NewHead = {
    X: Head.GridX + CurrentMovementDirection.X,
    Y: Head.GridY + CurrentMovementDirection.Y,
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

// Running the Game
function ExecuteGame(CurrentTime) {
  GetInput();

  if (CurrentTime - LastMoveTime >= MoveInterval) {
    UpdateState();
    LastMoveTime = CurrentTime;
  }

  RenderVisual();

  requestAnimationFrame(ExecuteGame);
}

requestAnimationFrame(ExecuteGame);
