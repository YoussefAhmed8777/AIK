import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    // renderMode: RenderMode.Prerender, //Default
    renderMode: RenderMode.Server //to fix prerender error with deployment because of category/:id
  }
];
