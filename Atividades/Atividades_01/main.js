const { app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
});

// função para criar uma janela do electron
// de 800 x 600
function createWindow() {
    const win = new BrowserWindow(
        {
            width: 800,
            height: 800
        }
    );

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);