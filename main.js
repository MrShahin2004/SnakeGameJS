"use strict";

const { app, BrowserWindow } = require("electron");
const Path = require("path");

function CreateWindow() {
    const MainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    MainWindow.loadFile(Path.join(__dirname, "src", "game.html"));
}

app.whenReady().then(CreateWindow);
