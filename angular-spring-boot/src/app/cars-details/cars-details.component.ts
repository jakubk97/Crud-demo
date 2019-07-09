import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from '../user.service';
import { User } from '../user';

import { Car } from '../car';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  @Input() car:Car;

  constructor(private carService: CarService, private listComponent: CarsListComponent) {}

  ngOnInit() {
  }
}
