import { Component, Input, OnInit } from '@angular/core';

import { APOD } from '../apod';
import { CoolSpaceService } from '../cool-space.service';

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

  constructor(private spaceService: CoolSpaceService) { }

  ngOnInit(): void {
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
      }
    }
  }

  getApod() {
    this.spaceService.displayApod(
      (result: any) => {
        console.log(`Result Date before setting to apod: ${result.date}`);
        this.apod = result;
        console.log(`Result Date after setting to apod: ${result.date}`);
        console.log(`Apod Date after being set by result: ${this.apod.date}`);
        if (result.media_type === 'video') {
          this.youtubeId = this.getYoutubeId(result.url);
        }
        this.getFavoriteApodId(this.apod.date);
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
    this.spaceService.displayApodByDate(
      (result: any) => {
               this.apod = result; 
              if (result.media_type === 'video') {
          this.youtubeId = this.getYoutubeId(result.url);
        }
        this.getFavoriteApodId(this.apod.date);
      },
      this.specificDate
    );
  }

  AddFavoriteApod(){
    this.spaceService.AddApodtoFavoriteList(
      (result: any) => {
        this.favoriteId = result;
      },
      { date: this.apod.date }
    );
  }

  getFavoriteApodId(date: string) {
    this.spaceService.GetFavoriteApodId((result: any) => {
      this.favoriteId = result;
    },
    this.apod.date
    );
  }

  DeleteFromFavApod(){
    this.spaceService.DeleteApod(
      (result: any) => {
        if (result === true) {
          this.favoriteId = -1
        }
      },
      this.favoriteId
    );
  }
}
