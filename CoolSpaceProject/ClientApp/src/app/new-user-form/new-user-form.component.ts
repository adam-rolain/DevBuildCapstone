import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  newUserForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  });
  user?: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submitNewUser() {
    this.user = {
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
    this.router.navigate(['/home']);
  }

}
