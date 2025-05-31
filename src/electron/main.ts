import { app, BrowserWindow, dialog, ipcMain, Menu } from 'electron';
import * as path from 'path';

let window: BrowserWindow | null = null;

app.on('ready', createWindow);

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});

function createWindow() {
  window = new BrowserWindow({
    width: 400,
    height: 300,
    resizable: true,
    webPreferences: {
      // Disabled Node integration
      nodeIntegration: true,
      // protect against prototype pollution
      contextIsolation: true,
      // Preload script
      preload: path.join(app.getAppPath(), 'dist/preload', 'preload.js')
    }
  });

  // https://stackoverflow.com/a/58548866/600559
  Menu.setApplicationMenu(null);

  window.loadFile(path.join(app.getAppPath(), 'dist/renderer/browser', 'index.html'));

  window.on('closed', () => {
    window = null;
  });
}

ipcMain.on('dev-tools', () => {
  if (window) {
    window.webContents.toggleDevTools();
  }
});

ipcMain.on('open-file', function (event) {
  event.preventDefault();

  if (window) {
    dialog.showOpenDialog(window, {
      properties: ['openFile'],
      filters: [{ name: 'All Files', extensions: ['*'] }]
    });
    return;
  }
});
