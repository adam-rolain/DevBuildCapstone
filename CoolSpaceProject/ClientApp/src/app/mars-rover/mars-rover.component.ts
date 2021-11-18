import { Component, Input, OnInit } from '@angular/core';
import { MarsRover } from '../mars-rover';
import { MarsRoverService } from '../mars-rover.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SaveFavoriteRover } from '../save-favorite-rover';
import { FavoriteRover } from '../favorite-rover';


@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.css']
})
export class MarsRoverComponent implements OnInit {

  @Input() marsRover: MarsRover = {
    id: 0,
    sol: 0,
    camera: {
       id: 0,
    name: '',
    rover_id: 0,
    full_name: ''
    },
    img_src: '',
    earth_date: '',
    rover: {
      id: 0,
      name: '',
      landing_date: '',
      launch_date: '',
      status: ''
    }
  }
  @Input() favoriteRover: FavoriteRover = {
    id: -1,
    name: '',
    cameraName: '',
    image: '',
    date: '',
    userId: -1
  }
  favoriteId: number = -1;
  currentUserId?: Observable<number>;
  userId: number = -1;
  saveFavoriteRover: SaveFavoriteRover = {
    name: '',
    cameraName: '',
    image: '',
    date: ''
  }
  @Input() marsRoverType: string = '';

  constructor(private marsRoverService: MarsRoverService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId();

    this.currentUserId.subscribe((userId: number) => {
      console.log(`Logging from Mars Rover Component: ${userId}`);
      this.userId = userId;
    })

    if (this.marsRoverType === 'fromFavoriteList') {
      this.favoriteId = this.favoriteRover.id;
    }
  }

  AddFavoriteRover() {
    this.saveFavoriteRover = {
      name: this.marsRover.rover.name,
      cameraName: this.marsRover.camera.full_name,
      image: this.marsRover.img_src,
      date: this.marsRover.earth_date
    }
    this.marsRoverService.addFavoriteRover(
      (result: any) => {
        this.favoriteId = result;
      },
      this.saveFavoriteRover
    )
  }

  DeleteFavoriteRover() {
    this.marsRoverService.deleteFavoriteRover(
      (result: any) => {
        if (result === true) {
          this.favoriteId = -1;
        }
      },
      this.favoriteId
    );
  }

  RedirectToSignupOrLogin() {
    this.router.navigate(['/login']);
  }
  
}
