import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from '../user.service';
import { User } from '../user';

import { Car } from '../car';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { Observable } from 'rxjs';

import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
   displayedColumns: string[] = ['cars.country', 'cars.name', 'model', 'color', 'Body Type', 'Capacity', 'Price', 'Mileage', 'Year', 'Status']; 
  dataSource: MatTableDataSource<Car>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  cars: Observable<Car[]>;
  

   @Input() car:Car[];

  constructor(private carService: CarService, private listComponent: CarsListComponent) {}

  ngOnInit() {
    this.carService.getCarsList().subscribe(ref=>{
      this.dataSource = new MatTableDataSource(ref);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
