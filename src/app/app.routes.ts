import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'notes',
    loadChildren: () => import('./add-note/add-note.routes')
  },
  {
    path: '',
    loadChildren: () => import('./notes-front/notes-front.routes')
  },
  
];
