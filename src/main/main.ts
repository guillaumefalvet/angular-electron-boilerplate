import { app, BrowserWindow, dialog, ipcMain, Menu } from 'electron';
import * as path from 'path';
import { interval } from 'rxjs';

let window: BrowserWindow | null = null;

app.on('ready', () => {
  createWindow();
  startPing();
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
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

function startPing() {
  const ping$ = interval(1000); // 1-second interval

  ping$.subscribe(() => {
    const IS_PROD = process.env.NODE_ENV === 'production';
    if (window && window.webContents) {
      window.webContents.send(
        'ping',
        JSON.stringify(`Ping from main at ${new Date().toISOString()} isProd: ${IS_PROD}`)
      );
    }
  });
}
