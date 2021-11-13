import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public currentUserId?: Observable<number>;
  userId: number = -1;

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId();

    this.currentUserId.subscribe((userId: number) => {
      console.log(`Logging from Nav Bar Component: ${userId}`);
      this.userId = userId;
    })
  }

  logout() {
    this.userService.logoutUser((result: any) => {
      this.userService.setCurrentUserId(result);
    });
  }
}
