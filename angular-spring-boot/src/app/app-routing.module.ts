import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopCardComponent } from './shop-card/shop-card.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersDetailsComponent },
    { path: 'addcars', component: CarsCreateComponent },
    { path: 'login', component: LoginComponent },
    { path: 'car', component: CarsDetailsComponent },
    { path: 'card', component: ShopCardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
