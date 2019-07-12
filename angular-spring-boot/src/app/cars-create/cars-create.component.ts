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
 
  manu: Manufacturer = new Manufacturer();
  submitted = false;
  manufacturers: Manufacturer[];
  public Form: FormGroup;
  public FormManufacturer: FormGroup;

  constructor(private carService: CarService) { }

  ngOnInit() { 
        //download manufacturers from databases to prevent errors
        this.carService.getManufacturersList().subscribe(ref=>{ this.manufacturers = ref;});

    this.Form = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      mileage: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      capacity: new FormControl('', [Validators.required, Validators.maxLength(3),Validators.pattern('^[0-9]\d{0}\.[0-9]\d{0}$')]),
      year: new FormControl('', [Validators.required, Validators.pattern('^(19|20)\\d{2}$')])
    });

    this.FormManufacturer = new FormGroup({
      country: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      namem: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }
//create car errors  
  public hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  }
//create manufacturer errors
  public hasErrors = (controlName: string, errorName: string) => {
    return this.FormManufacturer.controls[controlName].hasError(errorName);
  }

  //create new manufacturer in database after click create
  public onCreate(){
    this.submitted = true;
    this.carService.createManufacturer(this.manu).subscribe(data => console.log(data), error => console.log(error));
    this.ngOnInit();
  }

  public loggin = (ownerFormValue) => {
    if (this.Form.valid) {
      
    }
  }
  //after click add next
    newManufacturer(): void {
      this.submitted = false;
      this.manu = new Manufacturer();
      this.ngOnInit();
    }

  


}

