import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  public currentUserId?: Observable<number>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId();

    this.currentUserId.subscribe((userId: number) => {
      console.log(`Logging change from Update User Form: ${userId}`);
      this.userService.getUserInfo((result: any) => {
        this.user = result;
      },
      userId
      );
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
