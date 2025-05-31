/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  public openDevTools() {
    window.api.electronIpcSend('dev-tools');
  }

  public openFileAsync() {
    window.api.electronIpcSend('open-file');
  }

  public listenToPing$(): Observable<string> {
    return new Observable((observer) => {
      function listener(_event: any, message: string) {
        observer.next(message);
      }

      window.api.electronIpcOn('ping', listener);

      return () => {
        window.api.electronIpcRemoveListener('ping', listener);
      };
    });
  }
}
