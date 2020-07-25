const {app, BrowserWindow} = require('electron')

let mainWindow


function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {

      nodeIntegration: true
    }
  })


  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

