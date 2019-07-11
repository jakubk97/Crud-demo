import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manufacturer } from '../manufacturer';
import { CarService } from '../car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {

  model:string;
  body:string;
  color:string;
  mileage:number;
  price:number;
  capacity:number;
  year:number;
  manufacturer:string;

  manufacturers: Manufacturer[];
  datePattern = "(19|20)\d{2}";
  public Form: FormGroup;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.Form = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      mileage: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      capacity: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      year: new FormControl('', [Validators.required, Validators.pattern('(19|20)\d{2}')])
    });

    this.carService.getManufacturersList().subscribe(ref=>{
      this.manufacturers = ref;
    });


  }



  public hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  }

  public onCreate = () => {
  }

  public loggin = (ownerFormValue) => {
    if (this.Form.valid) {
      
    }
  }


}

