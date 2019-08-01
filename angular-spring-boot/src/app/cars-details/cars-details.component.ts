import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../car';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { CarsDetailsDialogDeleteComponent } from '../cars-details-dialog-delete/cars-details-dialog-delete.component';
import { CarsDetailsDialogEditComponent } from '../cars-details-dialog-edit/cars-details-dialog-edit.component';
import { Router } from '@angular/router';
import { ShopcardService } from '../services/shopcard.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Manufacturer } from '../manufacturer';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
  displayedColumns: string[] = ['manufacturer.country', 'manufacturer.name', 'model', 'color', 'body', 'capacity', 'price', 'mileage', 'year', 'offerer', 'status', 'buy', 'edit', 'delete'];
  dataSource: MatTableDataSource<Car>;
  filter: string;
  manufacturers: string;
  model: string;
  status: string;
  body: string;
  color: string;
  capacity: string;
  car = new Car;
  public form: FormGroup;
  modelblock = true;
  info: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;


  constructor(private carService: CarService, private card: ShopcardService, private dialog: MatDialog,
    private router: Router, public snackBar: MatSnackBar, private token: TokenStorageService) {
    this.car.manufacturer = new Manufacturer();

    this.carService.getManufacturersList().subscribe(ref => this.manufacturers = ref);
    this.carService.getModelsList().subscribe(ref => this.model = ref);
    this.carService.getBodyList().subscribe(ref => this.body = ref);
    this.carService.getCapacityList().subscribe(ref => this.capacity = ref);
    this.carService.getColorList().subscribe(ref => this.color = ref);

    this.form = new FormGroup({
      status: new FormControl(this.car.status),
      manufacturers: new FormControl(this.car.manufacturer.name),
      body: new FormControl(this.car.body),
      capacity: new FormControl(this.car.capacity),
      color: new FormControl(this.car.color),
      model: new FormControl(this.car.model),
      pricefrom: new FormControl(null),
      priceto: new FormControl(null)
    });

    this.form.controls['status'].setValue('empty', { onlySelf: true });
    this.form.controls['manufacturers'].setValue('%%', { onlySelf: true });
    this.form.controls['body'].setValue('%%', { onlySelf: true });
    this.form.controls['capacity'].setValue('', { onlySelf: true });
    this.form.controls['color'].setValue('%%', { onlySelf: true });
    this.form.controls['model'].setValue('%%', { onlySelf: true });
    this.form.controls['pricefrom'].setValue('%%', { onlySelf: true });
    this.form.controls['priceto'].setValue('%%', { onlySelf: true });

  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.carService.getCarsList().subscribe(ref => {
      this.dataSource = new MatTableDataSource(ref); // get all cars from database
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'manufacturer.country': return item.manufacturer.country;
          case 'manufacturer.name': return item.manufacturer.name;
          default: return item[property];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }

  onChange() {
    if (this.form.get('manufacturers').value !== '%%') {
      this.modelblock = false;
      this.carService.getSearchManufacturer(this.form.get('manufacturers').value).subscribe(ref => this.model = ref);
    }
    else {
      this.modelblock = true;
      this.carService.getModelsList().subscribe(ref => this.model = ref);
    }
  }

  onClear() {
    this.form.controls['status'].setValue('empty', { onlySelf: true });
    this.form.controls['manufacturers'].setValue('%%', { onlySelf: true });
    this.form.controls['body'].setValue('%%', { onlySelf: true });
    this.form.controls['capacity'].setValue('', { onlySelf: true });
    this.form.controls['color'].setValue('%%', { onlySelf: true });
    this.form.controls['model'].setValue('%%', { onlySelf: true });
    this.form.controls['pricefrom'].setValue('%%', { onlySelf: true });
    this.form.controls['priceto'].setValue('%%', { onlySelf: true });
    this.ngOnInit();
  }

  //search for a car
  public onSearch() {
    let pricefrom: string;
    let priceto: string;

    this.car.body = this.form.get('body').value;
    this.car.model = this.form.get('model').value;
    this.car.capacity = this.form.get('capacity').value;
    this.car.color = this.form.get('color').value;
    this.car.status = this.form.get('status').value;
    if (this.form.get('manufacturers').value === '%%') {
      this.car.manufacturer.name = '';
    }
    else {
      this.car.manufacturer = this.form.get('manufacturers').value;
    }

    if (this.form.get('pricefrom').value === '%%') {
      pricefrom = '0';
    }
    else {
      pricefrom = this.form.get('pricefrom').value;
    }
    if (this.form.get('priceto').value === '%%') {
      priceto = '200000000';
    }
    else {
      priceto = this.form.get('priceto').value;
    }
    this.carService.search(this.car, pricefrom, priceto).subscribe(ref => {
      this.dataSource = new MatTableDataSource(ref);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    }, error => console.log(error));
  }


  //redirect to dialog with edit clicked car
  public redirectToEdit(id: number) {

    this.dataSource.data[id].capacity = parseFloat(this.dataSource.data[id].capacity).toPrecision(2);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      data: this.dataSource.data[id]
    };

    const dialogRef = this.dialog.open(CarsDetailsDialogEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => this.ngOnInit(), data => console.log("Dialog output:", data)
    );
  }

  //redirect to window with card and add selected car to list of cars in card
  public redirectToBuy(id: number) {
    if (this.dataSource.data[id].status === "for_sale") {
      this.card.shopcard.push(this.dataSource.data[id]);
      this.router.navigate(['card']);
    }
    else {
      setTimeout(() => { this.openSnackBar("Someone was faster and offered to buy this car"); }, 0);
    }
  }

  public redirectToDelete(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      data: this.dataSource.data[id]
    };

    const dialogRef = this.dialog.open(CarsDetailsDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.ngOnInit(), data => console.log("Dialog output:", null));
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000
    });
  }

  reloadPage() {
    window.location.reload();
  }

}
