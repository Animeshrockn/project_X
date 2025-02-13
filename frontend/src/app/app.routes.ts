import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./components/aniket-home/aniket-home.component').then((m) => m.AniketHomeComponent);
        }
    },
    {
        path: 'menu-page',
        loadComponent: () => {
            return import('./menu-page/menu-page.component').then((m) => m.MenuPageComponent);
        }
    }
];
