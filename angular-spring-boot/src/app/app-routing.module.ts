import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { UsersCreateComponent } from './users-create/users-create.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersDetailsComponent },
    { path: 'add', component: UsersCreateComponent },
    { path: 'addcars', component: CarsCreateComponent },
    { path: 'searchusers', component: UsersSearchComponent },
    { path: 'searchcars', component: CarsSearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'car', component: CarsDetailsComponent },
    { path: 'edit', component: CarsEditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
