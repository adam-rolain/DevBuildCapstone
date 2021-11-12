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
  isFavorite: boolean = false;

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
  }

  getApod() {
    this.spaceService.displayApod(
      (result: any) => {
        this.apod = result;
        if (result.media_type === 'video') {
          this.youtubeId = this.getYoutubeId(result.url);
        }
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
      },
      this.specificDate
    );
  }

  AddFavoriteApod(){
    this.spaceService.AddApodtoFavoriteList(
      (result: any) => {
        this.isFavorite = result;
      },
      { date: this.apod.date }
    );
        this.isFavorite = true;
  }

  DeleteFromFavApod(){
    this.spaceService.DeleteApod(
      (result: any) => {
        this.isFavorite = !result;
      },
      this.apod.id
    );
  }
}
