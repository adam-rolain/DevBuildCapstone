import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { APOD } from '../apod';
import { CoolSpaceService } from '../cool-space.service';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.css']
})
export class ApodListComponent implements OnInit {
 
  ApodList?: APOD[];
  youtubeId?: string;
  newStartDate: string ='';
  newEndDate: string ='';
  isFavoriteList: boolean = false;


  constructor(private spaceService: CoolSpaceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this.isFavoriteList = params['isFavoriteList'];
      });
    if (this.isFavoriteList) {
      this.getFavoriteApods();
    }    
  }
 

  getApodByDateRange() {
    this.spaceService.displayApodByDateRange(
      (result: any) => {
        this.ApodList = result;
      },
      this.newStartDate, this.newEndDate
    );
  }

  getFavoriteApods() {
    this.spaceService.GetFavoriteApodList(
      (result: any) => {
        this.ApodList = result;
      },
    );
  }

}
