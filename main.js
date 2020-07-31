const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.maximize();
      nodeIntegration: true
    }
    
  })

mainWindow.maximize()
  mainWindow.loadFile('index.html')
	mainWindow.loadFile("index.html");

	mainWindow.on("closed", function () {
		mainWindow = null;
	});
}

app.on("ready", createWindow);
