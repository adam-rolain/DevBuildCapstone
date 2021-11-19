import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteRover } from '../favorite-rover';
import { MarsRoverResponse } from '../mars-rover-response';
import { MarsRoverService } from '../mars-rover.service';

@Component({
  selector: 'app-mars-rover-list',
  templateUrl: './mars-rover-list.component.html',
  styleUrls: ['./mars-rover-list.component.css']
})
export class MarsRoverListComponent implements OnInit {
  marsRoverList?: MarsRoverResponse;
  favoriteRoverList?: FavoriteRover[];
  isFavoriteList: boolean = false;
  earth_date: string ='';
  roverName: string = '';
  model?: NgbDateStruct;

  constructor(private roverservice: MarsRoverService, private marsRoverService: MarsRoverService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.isFavoriteList = params['isFavoriteList'];
    });
    if (this.isFavoriteList) {
      this.getFavoriteRovers();
    }    
  }

  getMarsRoverListByEarthDateAndRoverName(){
    this.roverservice.displayMarsRoverByDateRange(
      (result: any) => {
        this.marsRoverList = result;
      },
      this.earth_date, this.roverName
    );
  }

  displayPhotos(){
    this.earth_date = `${this.model?.year}-${this.model?.month}-${this.model?.day}`;
    this.getMarsRoverListByEarthDateAndRoverName();
  }

  getFavoriteRovers() {
    this.marsRoverService.getFavoriteRovers(
      (result: any) => {
        this.favoriteRoverList = result.reverse();
      },
    );
  }
}
