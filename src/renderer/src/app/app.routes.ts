import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/home/home.component').then((render) => render.HomeComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
