import { BrowserWindow } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

export let win: BrowserWindow;

export const createWindow = (): void => {
  // Create the browser window.
  win = new BrowserWindow({
    height: 600,
    width: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  win.once('ready-to-show', () => {
    win.show();
  });
};
