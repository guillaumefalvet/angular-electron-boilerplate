import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// - Services
import { IpcService } from '../../core/ipc.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _ipcService: IpcService) {
    this._ipcService.listenToPing()
      .pipe(takeUntilDestroyed())
      .subscribe(message => {
        console.log(message);
      });

    setTimeout(() => {
      this._ipcService.openDevTools();
    }, 1000);
  }
}
