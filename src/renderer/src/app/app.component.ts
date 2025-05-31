import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// - Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

// - Services
import { IpcService } from './services/ipc.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = 'Electron Angular Boilerplate 🚀!!';
  constructor(private ipcService: IpcService) {}

  openFileAsync() {
    this.ipcService.openFileAsync();
  }
}
