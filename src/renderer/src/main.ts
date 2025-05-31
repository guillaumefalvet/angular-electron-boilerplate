import { bootstrapApplication } from '@angular/platform-browser';

// - Configs
import { appConfig } from './app.config';

// - Components
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
