import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Manufacturer } from '../manufacturer';

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
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<CarsDetailsDialogEditComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
      this.dataSource = data.data;
  }

  ngOnInit() {

      //download manufacturers from databases to prevent errors
      this.carService.getManufacturersList().subscribe(ref=>{ this.manufacturers = ref;});

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
  }

  //create car errors  
public hasError = (controlName: string, errorName: string) => {
  return this.form.controls[controlName].hasError(errorName);
}

  save() {
    this.carService.updateCar(this.dataSource.id,this.dataSource).subscribe(data => console.log(data));
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}






