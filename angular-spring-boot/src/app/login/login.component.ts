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
  login:string;
  password:string;
  

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  LogginTonewCustomerApp(): void {
    this.logging = false;
    this.user = new User();
  }

  onLogin() {
    this.logging = true;
   // this.userservice.getUsersBylastName("kar").subscribe(user => this.user = user);
    this.userservice.loggin(this.user.login,this.user.password).subscribe(user => this.user = user);
   // this.userservice.loggin2();

    
  }




}
