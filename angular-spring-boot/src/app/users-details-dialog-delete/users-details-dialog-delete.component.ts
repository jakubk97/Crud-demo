import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-details-dialog-delete',
  templateUrl: './users-details-dialog-delete.component.html',
  styleUrls: ['./users-details-dialog-delete.component.css']
})
export class UsersDetailsDialogDeleteComponent implements OnInit {

    form: FormGroup;
    dataSource: User;

    constructor(private userService: UserService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<UsersDetailsDialogDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        this.dataSource = data.data;
    }

    ngOnInit() {
    }

    delete() {
      this.userService.deleteUser(this.dataSource.id).subscribe(data => console.log("Dialog output:", null));
      this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}





