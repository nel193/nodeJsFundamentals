const { app, BrowserWindow } = requier "electron";

let mainWindow;

app.on("ready", createWindow)

function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
    });

    mainWindow.loadFile("index.html")
}