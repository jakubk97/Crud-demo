import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule,MatListModule,MatCardModule,MatTableModule,
  MatPaginatorModule,MatSelectModule,MatDatepickerModule,MatOptionModule,MatNativeDateModule,
  MatDialogModule,MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { from } from 'rxjs';
import { ManufacturerCreateComponent } from './manufacturer-create/manufacturer-create.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersDetailsDialogDeleteComponent } from './users-details-dialog-delete/users-details-dialog-delete.component';
import { UsersDetailsDialogEditComponent } from './users-details-dialog-edit/users-details-dialog-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    CarsDetailsComponent,
    CarsSearchComponent,
    CarsEditComponent,
    CarsCreateComponent,
    CarsDeleteComponent,
    ManufacturerCreateComponent,
    UsersSearchComponent,
    UsersDetailsComponent,
    UsersCreateComponent,
    UsersDetailsDialogDeleteComponent,
    UsersDetailsDialogEditComponent
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
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  entryComponents: [UsersDetailsDialogDeleteComponent,UsersDetailsDialogEditComponent],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
