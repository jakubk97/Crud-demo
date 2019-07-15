import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars-details-dialog-delete',
  templateUrl: './cars-details-dialog-delete.component.html',
  styleUrls: ['./cars-details-dialog-delete.component.css']
})
export class CarsDetailsDialogDeleteComponent implements OnInit {

  form: FormGroup;
  dataSource: User;

  constructor(private carService: CarService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<CarsDetailsDialogDeleteComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
      this.dataSource = data.data;
  }

  ngOnInit() {
  }

  delete() {
    this.carService.deleteCar(this.dataSource.id).subscribe(data => console.log("Dialog output:", null));
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}





