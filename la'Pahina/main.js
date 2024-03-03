const { app, BrowserWindow, nativeImage } = require("electron")

function createWindow() {
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/IconTask.png`);
if (app.dock){
    app.dock.setIcon(icon);
}
    const win = new BrowserWindow({
        icon,
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }

       
    });

    win.loadFile("index.html");
}
app.whenReady().then(createWindow);