import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor(private userService: UserService) {
    this.userService.currentUserId.subscribe((value: number) => {
      if (value === -1) {
        this.isLoggedIn = false;
      }
      this.ngOnInit();
    })
   }

  ngOnInit(): void {
    
  }

}
