import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  submitted = false;
  data: Object;
  button: string;
  public Form: FormGroup;

  constructor(private userService: UserService, public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.Form = new FormGroup({ 
      firstname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      login: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]),
    });

    this.submitted = false;
  }
  //create car errors  
  public hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  }

  //create new manufacturer in database after click create
  public onCreate() {
    this.submitted = true;
    this.userService.getUsersByLogin(this.user.login).subscribe(() => this.createUser(), () => this.reload());
  }

  reload() {
    this.openSnackBar(("Login exist"));
    setTimeout(() => { this.ngOnInit() }, 1000);
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(() => this.redirectToLogin(), () => this.openSnackBar("Failed, please try again"));
  }

  redirectToLogin() {
    setTimeout(() => {
      this.openSnackBar("User created");
      this.router.navigate(['login']);
    }, 2000);
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 5000
    });
  }

  goFuther() {
    this.submitted = false;
  }


}



