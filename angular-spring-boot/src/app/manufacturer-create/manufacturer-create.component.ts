import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Manufacturer } from '../manufacturer';

@Component({
  selector: 'app-manufacturer-create',
  templateUrl: './manufacturer-create.component.html',
  styleUrls: ['./manufacturer-create.component.css']
})
export class ManufacturerCreateComponent implements OnInit {

  public Form: FormGroup;
  manufacturer: Manufacturer = new Manufacturer();
  submitted = false;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.Form = new FormGroup({
      country: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  }

  public onCreate(){
    this.submitted = true;
    this.carService.createManufacturer(this.manufacturer).subscribe(data => console.log(data), error => console.log(error));
    this.manufacturer = new Manufacturer();
  }

  newManufacturer(): void {
    this.submitted = false;
    this.manufacturer = new Manufacturer();
  }
}



