import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./home/home-routing').then(mod => mod.homeRoutes)},
    {path: 'admin', loadComponent: () => import('./admin/admin.component').then(mod => mod.AdminComponent)}
];
