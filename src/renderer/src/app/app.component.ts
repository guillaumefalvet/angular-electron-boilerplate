import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// - Services
import { IpcService } from './core/ipc.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {
  protected title = 'Electron Angular Boilerplate 🚀!!';
  constructor(private ipcService: IpcService) {}

  openFileAsync() {
    this.ipcService.openFileAsync();
  }
}
