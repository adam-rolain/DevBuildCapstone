import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { APOD } from '../apod';
import { APODService } from '../apod.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class APODComponent implements OnInit {
  @Input() apod: APOD = {
    id: 0,
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: ''
  };
  @Input() apodType: string = 'today';
  youtubeId?: string;
  specificDate: string ='';
  favoriteDate: string= '';
  favoriteId: number = -1;
  public currentUserId?: Observable<number>;
  userId: number = -1;
  model?: NgbDateStruct;

  constructor(private apodService: APODService, private userService: UserService, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId();

    this.currentUserId.subscribe((userId: number) => {
      console.log(`Logging from Apod Component: ${userId}`);
      this.userId = userId;
    })

    this.selectToday();

    if (this.apodType === 'today') {
      this.getApod();
    }
    else if (this.apodType === 'individualDate') {
      this.getApodByDate();
    }
    else if (this.apodType === 'fromList') {
      if (this.apod) {
        this.specificDate = this.apod.date;
        this.getApodByDate();
      }
    }
    else if (this.apodType === 'fromFavoritesList') {
      if (this.apod) {
        this.specificDate = this.apod.date;
        this.getApodByDate();
        console.log(`Displaying apod from ngOnInit(): ${this.apod.date}`);
      }
    }
  }

  getApod() {
    this.apodService.displayApod(
      (result: any) => {
        console.log(`Result Date before setting to apod: ${result.date}`);
        this.apod = result;
        console.log(`Result Date after setting to apod: ${result.date}`);
        console.log(`Apod Date after being set by result: ${this.apod.date}`);
        if (result.media_type === 'video') {
          this.youtubeId = this.getYoutubeId(result.url);
        }
        this.getFavoriteApodId();
      }
    );
  }

  getYoutubeId(url: string) {
    if (this.apod) {
      let index: number = this.apod.url.indexOf('embed/');
      index += 6;
      return this.apod.url.slice(index);
    }
    else {
      return 'No youtubeId found';
    }
  }

  getApodByDate() {
    this.apodService.displayApodByDate(
      (result: any) => {
               this.apod = result; 
              if (result.media_type === 'video') {
          this.youtubeId = this.getYoutubeId(result.url);
        }
        this.getFavoriteApodId();
      },
      this.specificDate
    );
  }

  AddFavoriteApod(){
    this.apodService.AddApodtoFavoriteList(
      (result: any) => {
        this.favoriteId = result;
      },
      { date: this.apod.date }
    );
  }

  getFavoriteApodId() {
    this.apodService.GetFavoriteApodId((result: any) => {
      this.favoriteId = result;
    },
    this.apod.date
    );
  }

  DeleteFromFavApod(){
    this.apodService.DeleteApod(
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

  convertToString() {
    this.specificDate = `${this.model?.year}-${this.model?.month}-${this.model?.day}`;
    this.getApodByDate();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}