import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  age: number;
  customers: User[];

  constructor(private dataService: UserService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomers() {
    this.dataService.getCustomersByAge(this.age).subscribe(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();
  }

}
