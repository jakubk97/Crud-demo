import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from "@angular/material";
import { UsersDetailsDialogEditComponent } from '../users-details-dialog-edit/users-details-dialog-edit.component';
import { UsersDetailsDialogDeleteComponent } from '../users-details-dialog-delete/users-details-dialog-delete.component';
import { TokenStorageService } from '../auth/token-storage.service';


export interface DialogData {
  data: MatTableDataSource<User>;
}

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'login', 'role', 'active', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<User>;
  ans: string;
  filter: string = '';
  info: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private userService: UserService, private dialog: MatDialog,private token: TokenStorageService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.clearFilters();
    this.userService.getUsersList().subscribe(ref => {
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

  clearFilters() {
    this.filter = '';
  }


  openDialogEdit(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      data: this.dataSource.data[id]
    };

    const dialogRef = this.dialog.open(UsersDetailsDialogEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() =>  setTimeout(() => { this.ngOnInit(); }, 0), data => console.log("Dialog output:", null));
  }

  openDialogDelete(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      data: this.dataSource.data[id]
    };

    const dialogRef = this.dialog.open(UsersDetailsDialogDeleteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() =>  setTimeout(() => { this.ngOnInit(); }, 0), data => console.log("Dialog output:", null));
  }

}




