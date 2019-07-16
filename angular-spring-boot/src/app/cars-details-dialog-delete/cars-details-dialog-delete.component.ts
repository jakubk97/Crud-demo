import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { CarService } from '../car.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-cars-details-dialog-delete',
  templateUrl: './cars-details-dialog-delete.component.html',
  styleUrls: ['./cars-details-dialog-delete.component.css']
})
export class CarsDetailsDialogDeleteComponent implements OnInit {

  form: FormGroup;
  dataSource: User;

  constructor(private carService: CarService,
    private fb: FormBuilder, public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CarsDetailsDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dataSource = data.data;
  }

  ngOnInit() {
  }

  delete() {
    this.carService.deleteCar(this.dataSource.id).subscribe(() => this.succes(), () => this.error());
    this.dialogRef.close();
  }

  succes() {
    setTimeout(() => { this.openSnackBar("Deleted succesfully"); }, 0);
  }

  error() {
    setTimeout(() => { this.openSnackBar("Could not delete element"); }, 0);
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000
    });
  }

  close() {
    this.dialogRef.close();
  }

}





