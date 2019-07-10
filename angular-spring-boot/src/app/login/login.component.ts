import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  public Form: FormGroup;
  private dialogConfig;
  

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.Form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  }

  public onCreate = () => {
  }

  public loggin = (ownerFormValue) => {
    if (this.Form.valid) {
      this.onLogin();
    }
  }

  LogginTonewCustomerApp(): void {
    this.logging = false;
    this.user = new User();
  }

  onLogin() {
    this.logging = true;
    this.userservice.loggin(this.user.login,this.user.password).subscribe(user => this.user = user);

    
  }




}
