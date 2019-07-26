import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-users-details-dialog-edit',
  templateUrl: './users-details-dialog-edit.component.html',
  styleUrls: ['./users-details-dialog-edit.component.css']
})
export class UsersDetailsDialogEditComponent implements OnInit {

  form: FormGroup;
  dataSource: User;
  selectedrole: string;
  selectedactive: string;
  

  constructor(private userService: UserService,
    public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UsersDetailsDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dataSource = data.data;
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(this.dataSource.firstname, [Validators.required, Validators.maxLength(30)]),
      lastname: new FormControl(this.dataSource.lastname, [Validators.required, Validators.maxLength(30)]),
      login: new FormControl(this.dataSource.login, [Validators.required, Validators.maxLength(30)]),
      selectedrole: new FormControl(this.dataSource.role, [Validators.required]),
      selectedactive: new FormControl(this.dataSource.active, [Validators.required])
    });
  }

  //create car errors  
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  save() {
    this.userService.updateUser(this.dataSource.id, this.dataSource).subscribe(() => this.succes(), () => this.error());
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  succes() {
    setTimeout(() => { this.openSnackBar("Updated succesfully"); }, 0);
  }

  error() {
    setTimeout(() => { this.openSnackBar("Could not update element"); }, 0);
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000
    });
  }

}






