import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  currentUserId: number = -1;
  @Output() currentUserIdEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.loginUser(
      (result: any) => {
        this.isValidLogin = result;
        if (this.isValidLogin) {
          this.retrieveCurrentUserIdInAppComponent();
        }
      },
      this.userForm.value.userName,
      this.userForm.value.password
    );
  }

  retrieveCurrentUserIdInAppComponent() {
    this.currentUserIdEvent.emit();
  }
}
