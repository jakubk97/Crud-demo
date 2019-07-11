import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { ManufacturerCreateComponent } from './manufacturer-create/manufacturer-create.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { LoginComponent } from './login/login.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'addcars', component: CarsCreateComponent },
    { path: 'addman', component: ManufacturerCreateComponent },
    { path: 'searchusers', component: SearchCustomersComponent },
    { path: 'searchcars', component: CarsSearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'car', component: CarsListComponent },
    { path: 'edit', component: CarsEditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
