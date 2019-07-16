import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShopcardService } from '../shopcard.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {

  displayedColumns: string[] = ['country', 'name', 'model', 'color', 'Body Type', 'Capacity', 'Price', 'Mileage', 'Year', 'Status', 'Delete'];
  dataSource: MatTableDataSource<Car>;
  flag = true;

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private card: ShopcardService,private carService: CarService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.card.shopcard); // get all cars from array in shopcard.service
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.flag = false;
    }
  }

  public DeleteFromCard(id: number) {
    this.card.shopcard.splice(this.card.shopcard.indexOf(this.dataSource.data[id]), 1);
    this.ngOnInit();
  }

  buy(){
    for (var i=0; i<this.dataSource.data.length; i++) {
      this.carService.buyCar(this.dataSource.data[i].id, this.dataSource.data[i]).subscribe(null,null);
    }
    this.card.shopcard = [];
    this.ngOnInit();
  }

}