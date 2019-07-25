import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-users-details-dialog-chpass',
  templateUrl: './users-details-dialog-chpass.component.html',
  styleUrls: ['./users-details-dialog-chpass.component.css']
})
export class UsersDetailsDialogChpassComponent implements OnInit {

  form: FormGroup;
  dataSource: User;

  constructor(private userService: UserService,
    public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UsersDetailsDialogChpassComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dataSource = data.data;
  }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl(this.dataSource.password, [Validators.required, Validators.maxLength(30), 
                                Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')])
    });

    
  }

  //create car errors  
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  save() {
    this.userService.updateUserPass(this.dataSource.id, this.dataSource).subscribe(() => this.succes(), () => this.error());
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





