import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  logging = false;

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  LogginTonewCustomerApp(): void {
    this.logging = false;
    this.user = new User();
  }

  login() {
    //this.userservice.loggin(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onLogin() {
    this.logging = true;
    this.login();
  }
}
