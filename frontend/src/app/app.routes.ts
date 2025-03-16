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
    },
    {
        path: 'prod-a-aboutus',
        loadComponent: () => {
            return import('./components/prod-a-aboutus/prod-a-aboutus.component').then((m) => m.ProdAAboutusComponent);
        }
    },
    {
        path: 'prod-a-menu',
        loadComponent: () => {
            return import('./components/prod-a-menu/prod-a-menu.component').then((m) => m.ProdAMenuComponent);
        }
    },
    {
        path: 'prod-a-location',
        loadComponent: () => {
            return import('./components/prod-a-location/prod-a-location.component').then((m) => m.ProdALocationComponent);
        }
    },
    {
        path: 'prod-a-reservation',
        loadComponent: () => {
            return import('./components/prod-a-reservation/prod-a-reservation.component').then((m) => m.ProdAReservationComponent);
        }
    }
];