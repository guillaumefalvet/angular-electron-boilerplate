import { app } from 'electron';
import { platform } from 'os';
import * as path from 'path';

// credits: https://stackoverflow.com/a/77796600

export function getPlatform() {
  switch (platform()) {
    case 'aix':
    case 'freebsd':
    case 'linux':
    case 'openbsd':
    case 'android':
      return 'linux';
    case 'darwin':
    case 'sunos':
      return 'mac';
    case 'win32':
      return 'win';
    default:
      return null;
  }
}

export function getBinariesPath() {
  const IS_PROD = process.env.NODE_ENV === 'production';
  const { isPackaged } = app;

  const binariesPath =
    IS_PROD && isPackaged
      ? path.join(process.resourcesPath, './bin')
      : path.join(app.getAppPath(), 'resources', getPlatform()!);

  return binariesPath;
}
