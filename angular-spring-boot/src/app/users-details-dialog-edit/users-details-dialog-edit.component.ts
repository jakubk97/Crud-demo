import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-details-dialog-edit',
  templateUrl: './users-details-dialog-edit.component.html',
  styleUrls: ['./users-details-dialog-edit.component.css']
})
export class UsersDetailsDialogEditComponent implements OnInit {

  form: FormGroup;
    dataSource: User;

    constructor(private userService: UserService,
        private fb: FormBuilder,
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
          selected: [this.dataSource.role, []],
          selectedactive: [this.dataSource.active, []]
        });
    }

    save() {
      this.userService.updateUser(this.dataSource.id,this.dataSource).subscribe(data => console.log("Dialog output:", null));
      this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}






