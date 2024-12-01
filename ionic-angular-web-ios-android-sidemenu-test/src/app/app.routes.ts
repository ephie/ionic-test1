import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'folder/inbox',
    redirectTo: 'neal',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'neal',
    loadComponent: () => import('./neal/neal.page').then( m => m.NealPage)
  },

];
