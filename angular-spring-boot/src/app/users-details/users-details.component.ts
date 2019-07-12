import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'login', 'password', 'role', 'active','Edit','Delete']; 
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private customerService: UserService) {}

  ngOnInit() {
    this.customerService.getUsersList().subscribe(ref=>{
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

  public redirectToEdit = (id: string) => {
    
  }

  public redirectToDelete = (id: string) => {
    
  }
}




