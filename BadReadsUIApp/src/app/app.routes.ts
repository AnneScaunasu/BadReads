import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'bookshelves', component: BookshelfComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
];
