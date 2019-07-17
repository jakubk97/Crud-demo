import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatSortModule,
  MatPaginatorModule, MatSelectModule, MatDatepickerModule, MatOptionModule, MatNativeDateModule,
  MatDialogModule, MatGridListModule, MatMenuModule, MatSnackBarModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersDetailsDialogDeleteComponent } from './users-details-dialog-delete/users-details-dialog-delete.component';
import { UsersDetailsDialogEditComponent } from './users-details-dialog-edit/users-details-dialog-edit.component';
import { RegisterComponent } from './register/register.component';
import { CarsDetailsDialogEditComponent } from './cars-details-dialog-edit/cars-details-dialog-edit.component';
import { CarsDetailsDialogDeleteComponent } from './cars-details-dialog-delete/cars-details-dialog-delete.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsDetailsComponent,
    CarsCreateComponent,
    UsersSearchComponent,
    UsersDetailsComponent,
    UsersDetailsDialogDeleteComponent,
    UsersDetailsDialogEditComponent,
    RegisterComponent,
    CarsDetailsDialogEditComponent,
    CarsDetailsDialogDeleteComponent,
    ShopCardComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSortModule,
    MatOptionModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  entryComponents: [UsersDetailsDialogDeleteComponent, UsersDetailsDialogEditComponent, CarsDetailsDialogDeleteComponent, CarsDetailsDialogEditComponent, SnackbarComponent],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent],

})
export class AppModule { }
