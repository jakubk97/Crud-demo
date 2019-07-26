import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../user';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { ShopcardService } from '../services/shopcard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  logging = false;
  login: string;
  password: string;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';
  public Form: FormGroup;
  private dialogConfig;
  info: any;


  constructor(private card: ShopcardService, private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };

    if (this.info.token) {
      setTimeout(() => {
        this.router.navigate(['car']);
      }, 1000);
    }


    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

    this.Form = new FormGroup({
      login: new FormControl(this.user.login, [Validators.required, Validators.maxLength(30)]),
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
    this.authService.attemptAuth(this.user).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.login);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.card.saveUser(this.user.login);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage() {
    window.location.reload();
  }




}
