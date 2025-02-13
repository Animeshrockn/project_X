import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./pages/home/home.component').then((m) => m.HomeComponent);
        }
    },
    {
        path: 'aniket',
        loadComponent: () => {
            return import('./pages/aniket/aniket.component').then((m) => m.AniketComponent);
        }
    },
    {
        path: 'animesh',
        loadComponent: () => {
            return import('./pages/animesh/animesh.component').then((m) => m.AnimeshComponent);
        }
    },
    {
        path: 'nikita',
        loadComponent: () => {
            return import('./pages/nikita/nikita.component').then((m) => m.NikitaComponent);
        }
    }
];