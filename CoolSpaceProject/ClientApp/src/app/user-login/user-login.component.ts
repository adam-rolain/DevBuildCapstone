import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  isValidLogin: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.loginUser(
      (result: any) => {
        this.isValidLogin = result;
        this.userService.getCurrentUserIdFromUserDAL(
          (result: any) => {
            this.userService.setCurrentUserId(result);
          }
        )
      },
      this.loginForm.value.userName,
      this.loginForm.value.password
    );  
    this.router.navigate(['/home']);
  }
}
