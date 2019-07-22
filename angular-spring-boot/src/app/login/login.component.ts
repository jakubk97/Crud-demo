import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';

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
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  public Form: FormGroup;
  private dialogConfig;
  info: any;
  

  constructor(private userservice: UserService,private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };


    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

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

    console.log(this.user);
    this.authService.attemptAuth(this.user).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.login);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
      }
    );


    //this.userservice.loggin(this.user.login,this.user.password).subscribe(user => this.user = user);

    
  }

  
  reloadPage() {
    window.location.reload();
  }




}
