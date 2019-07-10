import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  //cars: Observable<Car[]>;

  constructor(private carService: CarService) { }

  ngOnInit() {
    //this.reloadData();
  }

  reloadData() {
    //this.cars = this.carService.getCarsList();
  }
}
