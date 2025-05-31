import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  openDevTools() {
    window.api.electronIpcSend('dev-tools');
  }

  openFileAsync() {
    window.api.electronIpcSend('open-file');
  }
}
