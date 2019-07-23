import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-users-details-dialog-delete',
  templateUrl: './users-details-dialog-delete.component.html',
  styleUrls: ['./users-details-dialog-delete.component.css']
})
export class UsersDetailsDialogDeleteComponent implements OnInit {

  form: FormGroup;
  dataSource: User;

  constructor(private userService: UserService,
    private fb: FormBuilder, public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UsersDetailsDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dataSource = data.data;
  }

  ngOnInit() {
  }

  delete() {
    this.userService.deleteUser(this.dataSource.id).subscribe(() => this.succes(), () => this.error());
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  succes() {
    setTimeout(() => { this.openSnackBar("Deleted succesfully"); }, 0);
  }

  error() {
    setTimeout(() => { this.openSnackBar("Could not delete element"); }, 0);
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000
    });
  }

}





