import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  submitted = false;
  public Form: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() { 
    this.Form = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      login: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }
//create car errors  
  public hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  }

  //create new manufacturer in database after click create
  public onCreate(){
    this.submitted = true;
    this.userService.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.ngOnInit();
  }
}



