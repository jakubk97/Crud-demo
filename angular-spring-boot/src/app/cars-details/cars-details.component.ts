import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CarsDetailsDialogDeleteComponent } from '../cars-details-dialog-delete/cars-details-dialog-delete.component';
import { Manufacturer } from '../manufacturer';
import { CarsDetailsDialogEditComponent } from '../cars-details-dialog-edit/cars-details-dialog-edit.component';


@Component({
  selector: 'cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
  displayedColumns: string[] = ['country', 'name', 'model', 'color', 'Body Type', 'Capacity', 'Price', 'Mileage', 'Year', 'Status','Buy','Edit','Delete']; 
  dataSource: MatTableDataSource<Car>;
  filter: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private carService: CarService,private dialog: MatDialog) {}

  ngOnInit() {
    this.carService.getCarsList().subscribe(ref=>{
      this.dataSource = new MatTableDataSource(ref); // get all cars from database
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

  clearFilters(){
    this.filter = '';
  }

  public redirectToEdit(id:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        data: this.dataSource.data[id]
    };
  
    const dialogRef = this.dialog.open(CarsDetailsDialogEditComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(
      () => this.ngOnInit(),data => console.log("Dialog output:", null)
    );   
  }

  public redirectToBuy (id:number){
    
  }

  public redirectToDelete(id:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
     data: this.dataSource.data[id]
    };

    const dialogRef = this.dialog.open(CarsDetailsDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.ngOnInit(),data => console.log("Dialog output:", null));  
  }

  
}
