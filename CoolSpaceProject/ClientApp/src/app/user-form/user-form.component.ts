import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  newUserForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  });
  user?: User;
  updateForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  });
  @Input() isNewUser: boolean = true;
  userUpdated: boolean = false;  

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (!this.isNewUser) {
      this.userService.getUserInfo(
        (result: any) => {
          this.user = result;
          this.setUpdateUserFormValues();
        },
        this.userService.currentUserId
      )
    }
  }

  setUpdateUserFormValues() {
    this.updateForm.value.firstName = this.user?.firstName;
    this.updateForm.value.lastName = this.user?.lastName;
    this.updateForm.value.email = this.user?.email;
    this.updateForm.value.phone = this.user?.phone;
    this.updateForm.value.userName = this.user?.userName;
    this.updateForm.value.password = this.user?.password;
  }

  submitNewUser() {
    this.user = {
      id: this.userService.currentUserId,
      firstName: this.newUserForm.value.firstName,
      lastName: this.newUserForm.value.lastName,
      email: this.newUserForm.value.email,
      phone: this.newUserForm.value.phone,
      userName: this.newUserForm.value.userName,
      password: this.newUserForm.value.password
    }
    this.userService.createNewUser(
      (result: any) => {
        this.user = result;
        if (this.user && this.user.id) {
          this.userService.setCurrentUserId(this.user.id);
        }
      },
      this.user
    )
  }

  updateUser() {
    this.user = {
      id: this.userService.currentUserId,
      firstName: this.updateForm.value.firstName,
      lastName: this.updateForm.value.lastName,
      email: this.updateForm.value.email,
      phone: this.updateForm.value.phone,
      userName: this.updateForm.value.userName,
      password: this.updateForm.value.password
    }
    this.userService.updateUser(
      (result: any) => {
        this.userUpdated = result;
      },
      this.user
    )
  }
}
