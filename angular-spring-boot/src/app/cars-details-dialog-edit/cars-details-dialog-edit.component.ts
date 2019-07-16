import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Manufacturer } from '../manufacturer';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-cars-details-dialog-edit',
  templateUrl: './cars-details-dialog-edit.component.html',
  styleUrls: ['./cars-details-dialog-edit.component.css']
})
export class CarsDetailsDialogEditComponent implements OnInit {

  form: FormGroup;
  dataSource: Car;
  manufacturers: Manufacturer[];

  constructor(private carService: CarService,
    private fb: FormBuilder, public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CarsDetailsDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dataSource = data.data;
  }

  ngOnInit() {

    //download manufacturers from databases to prevent errors
    this.carService.getManufacturersList().subscribe(ref => { this.manufacturers = ref; });

    this.form = this.fb.group({
      country: [this.dataSource.manufacturer.country, []],
      name: [this.dataSource.manufacturer.name, []],
      model: [this.dataSource.model, []],
      color: [this.dataSource.color, []],
      body: [this.dataSource.body, []],
      capacity: [this.dataSource.capacity, []],
      price: [this.dataSource.price, []],
      mileage: [this.dataSource.mileage, []],
      year: [this.dataSource.year, []],
      status: [this.dataSource.status, []]
    });

    this.form = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      mileage: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      capacity: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]\d{0}\.[0-9]\d{0}$')]),
      year: new FormControl('', [Validators.required, Validators.pattern('^(19|20)\\d{2}$')]),
      manufacturer: new FormControl(null)
    });
  }

  //create car errors  
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  save() {
    this.carService.updateCar(this.dataSource.id, this.dataSource).subscribe(() => this.succes(), () => this.error());
    this.dialogRef.close();
  }

  succes() {
    setTimeout(() => { this.openSnackBar("Updated succesfully"); }, 0);
  }

  error() {
    setTimeout(() => { this.openSnackBar("Could not update element"); }, 0);
  }

  close() {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000
    });
  }

}






