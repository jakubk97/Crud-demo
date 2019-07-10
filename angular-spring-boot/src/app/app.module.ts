import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule,MatListModule,MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    StartComponent,
    LoginComponent,
    CarsDetailsComponent,
    CarsListComponent,
    CarsSearchComponent,
    CarsEditComponent,
    CarsCreateComponent,
    CarsDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
