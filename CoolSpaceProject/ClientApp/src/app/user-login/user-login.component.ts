import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  isValidLogin: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.userForm.value);
    this.userService.loginUser(
      (result: any) => {
        this.isValidLogin = result;
      },
      this.userForm.value.userName,
      this.userForm.value.password
    )
  }


}
