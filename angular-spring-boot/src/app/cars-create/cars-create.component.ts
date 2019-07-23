import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manufacturer } from '../manufacturer';
import { CarService } from '../services/car.service';
import { Observable } from 'rxjs';
import { Car } from '../car';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {

  manu: Manufacturer = new Manufacturer();
  car: Car = new Car();
  submitted = false;
  submittedcar = false;
  manufacturers: Manufacturer[];
  public Form: FormGroup;
  public FormManufacturer: FormGroup;
  ans: string;
  info: any;

  constructor(private carService: CarService,public snackBar: MatSnackBar,private token: TokenStorageService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    //download manufacturers from databases to prevent errors
    this.carService.getManufacturersList().subscribe(ref => { this.manufacturers = ref; });

    this.Form = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      mileage: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      capacity: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]\d{0}\\.[0-9]\d{0}$')]),
      year: new FormControl('', [Validators.required, Validators.pattern('^(19|20)\\d{2}$')]),
      manufacturer: new FormControl(null)
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
  public onCreate() {
    this.submitted = true;
    this.manu.name = this.manu.name.charAt(0).toUpperCase() + this.manu.name.slice(1);
    this.manu.country = this.manu.country.charAt(0).toUpperCase() + this.manu.country.slice(1);
    this.carService.createManufacturer(this.manu).subscribe(ans => this.succes(ans.toString()), ans => this.error(ans.toString()));
    this.manu = new Manufacturer();
    this.ngOnInit();
  }

   capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  //create new car in database after click create
  public onCarCreate() {
    this.car.manufacturer = new Manufacturer();
    this.submittedcar = true;
    this.car.manufacturer.id = this.Form.get('manufacturer').value.id;
    this.car.manufacturer.name = this.Form.get('manufacturer').value.name;
    this.car.manufacturer.country = this.Form.get('manufacturer').value.country;
    this.car.body = this.car.body.charAt(0).toUpperCase() + this.car.body.slice(1);
    this.car.model = this.car.model.charAt(0).toUpperCase() + this.car.model.slice(1);
    this.car.color = this.car.color.charAt(0).toUpperCase() + this.car.color.slice(1);
    this.carService.createCar(this.car).subscribe(ans => this.succes(ans.toString()), ans => this.error(ans.toString()));
    this.ngOnInit();
  }

  succes(ans: string) {
    setTimeout(() => { this.openSnackBar(ans); }, 0);
  }

  error(ans: string) {
    setTimeout(() => { this.openSnackBar("Could not create element"); }, 0);
  }

  //after click add next
  newManufacturer(): void {
    this.submitted = false;
    this.ngOnInit();
  }

  //after click add next
  newCar(): void {
    this.submittedcar = false;
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000
    });
  }

}

