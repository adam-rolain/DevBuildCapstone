import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {
  user?: User;
  userUpdated: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.currentUserId.subscribe((value: number) => {
      this.userService.getUserInfo(
        (result: any) => {
          this.user = result;
        },
        value
      )
    })
  }

  updateUser() {
    if (this.user) {
      this.userService.updateUser(
        (result: any) => {
          this.userUpdated = result;
        },
        this.user
      )
    }
    this.router.navigate(['/home']);
  }
}
