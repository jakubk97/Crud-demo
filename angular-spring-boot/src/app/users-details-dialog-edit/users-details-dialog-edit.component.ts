import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-users-details-dialog-edit',
  templateUrl: './users-details-dialog-edit.component.html',
  styleUrls: ['./users-details-dialog-edit.component.css']
})
export class UsersDetailsDialogEditComponent implements OnInit {

  form: FormGroup;
  dataSource: User;

  constructor(private userService: UserService,
    private fb: FormBuilder, public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UsersDetailsDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dataSource = data.data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: [this.dataSource.firstname, []],
      lastname: [this.dataSource.lastname, []],
      login: [this.dataSource.login, []],
      password: [this.dataSource.password, []],
      selectedrole: [this.dataSource.role, []],
      selectedactive: [this.dataSource.active, []]
    });
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      login: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      selectedrole: new FormControl('', [Validators.required]),
      selectedactive: new FormControl('', [Validators.required])
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






