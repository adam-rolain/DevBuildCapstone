import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  currentUserId: number = this.userService.currentUserId;

  constructor(private modalService: NgbModal, private userService: UserService) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  refreshCurrentUserId() {
    this.currentUserId = this.userService.currentUserId;
  }
}
