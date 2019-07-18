import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { CarsDetailsDialogDeleteComponent } from '../cars-details-dialog-delete/cars-details-dialog-delete.component';
import { CarsDetailsDialogEditComponent } from '../cars-details-dialog-edit/cars-details-dialog-edit.component';
import { Router } from '@angular/router';
import { ShopcardService } from '../shopcard.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Manufacturer } from '../manufacturer';


@Component({
  selector: 'cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
  displayedColumns: string[] = ['country', 'name', 'model', 'color', 'body', 'capacity', 'price', 'mileage', 'year', 'status', 'buy', 'edit', 'delete'];
  dataSource: MatTableDataSource<Car>;
  manufacturers: string;
  model: string;
  filter: string;
  status: string;
  body: string;
  color: string;
  capacity: string;
  car = new Car;
  public form: FormGroup;
  modelblock = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private carService: CarService, private card: ShopcardService, private dialog: MatDialog,
    private router: Router, public snackBar: MatSnackBar, private fb: FormBuilder) {
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
      model: new FormControl(this.car.model)
    });

    this.form.controls['status'].setValue('empty', { onlySelf: true });
    this.form.controls['manufacturers'].setValue('%%', { onlySelf: true });
    this.form.controls['body'].setValue('%%', { onlySelf: true });
    this.form.controls['capacity'].setValue('', { onlySelf: true });
    this.form.controls['color'].setValue('%%', { onlySelf: true });
    this.form.controls['model'].setValue('%%', { onlySelf: true });

  }

  ngOnInit() {

    this.carService.getCarsList().subscribe(ref => {
      this.dataSource = new MatTableDataSource(ref); // get all cars from database
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.clearFilters();
  }

  //filer on control table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilters() {
    this.filter = '';
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
    this.ngOnInit();
  }

  //search for a car
  public onSearch() {
    console.log(this.car);
    console.log(this.form.get('body').value);
    console.log(this.form.get('model').value);
    console.log(this.form.get('capacity').value);
    console.log(this.form.get('manufacturers').value);
    console.log(this.form.get('color').value);
    console.log(this.form.get('status').value);

    this.car.body = this.form.get('body').value;
    this.car.model = this.form.get('model').value;
    this.car.capacity = this.form.get('capacity').value;
    if (this.form.get('manufacturers').value === '%%') {
      this.car.manufacturer.name = '';
    }
    else {
      this.car.manufacturer = this.form.get('manufacturers').value;
    }

    this.car.color = this.form.get('color').value;
    this.car.status = this.form.get('status').value;

    this.carService.search(this.car).subscribe(ref => {
      this.dataSource = new MatTableDataSource(ref);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(ref)
    }, error => console.log(error));


    // this.form = new FormGroup({
    //   status: new FormControl(null),
    //   manufacturers: new FormControl(this.manufacturers),
    //   body: new FormControl(this.body),
    //   capacity: new FormControl(this.capacity),
    //   color: new FormControl(this.color),
    //   model: new FormControl(this.model)
    // });

    // this.form.get('status').setValue(this.form.get('status').value);
    // this.form.get('manufacturers').setValue(this.form.get('manufacturers').value);
    // this.form.get('body').setValue(this.form.get('body').value);
    // this.form.get('capacity').setValue(this.form.get('capacity').value);
    // this.form.get('color').setValue(this.form.get('color').value);
    // this.form.get('model').setValue(this.form.get('model').value);

  }

  public redirectToEdit(id: number) {

    this.dataSource.data[id].capacity = parseFloat(this.dataSource.data[id].capacity).toPrecision(2);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      data: this.dataSource.data[id]
    };

    const dialogRef = this.dialog.open(CarsDetailsDialogEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => this.ngOnInit(), data => console.log("Dialog output:", null)
    );
  }

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

}
