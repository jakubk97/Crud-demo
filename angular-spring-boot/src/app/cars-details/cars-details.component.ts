import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
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
  displayedColumns: string[] = ['cars.country', 'cars.name', 'model', 'color', 'Body Type', 'Capacity', 'Price', 'Mileage', 'Year', 'Status','Buy','Edit','Delete']; 
  dataSource: MatTableDataSource<Car>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarsList().subscribe(ref=>{this.dataSource = new MatTableDataSource(ref); // get all cars from database
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  //filer on control table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public redirectToEdit = (id: string) => {
    
  }

  public redirectToBuy = (id: string) => {
    
  }

  public redirectToDelete = (id: string) => {
    
  }
  
}
