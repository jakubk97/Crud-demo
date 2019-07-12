import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { ManufacturerCreateComponent } from './manufacturer-create/manufacturer-create.component';
import { CustomersSearchComponent } from './customers-search/customers-search.component';
import { LoginComponent } from './login/login.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'addcars', component: CarsCreateComponent },
    { path: 'addman', component: ManufacturerCreateComponent },
    { path: 'searchusers', component: CustomersSearchComponent },
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
