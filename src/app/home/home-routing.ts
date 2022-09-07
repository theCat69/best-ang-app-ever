import { Routes } from '@angular/router';
import { AddBookComponent, BookContainerComponent, HomeComponent } from '.';

export const homeRoutes: Routes = [{
    path: '',
    pathMatch: 'prefix',
    component: HomeComponent,
    children: [
        {path: '', component: BookContainerComponent},
        {path: 'add', component: AddBookComponent}
    ]
}];