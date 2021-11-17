import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MarsRover } from '../mars-rover';
import { MarsRoverResponse } from '../mars-rover-response';
import { MarsRoverService } from '../mars-rover.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-mars-rover-list',
  templateUrl: './mars-rover-list.component.html',
  styleUrls: ['./mars-rover-list.component.css']
})
export class MarsRoverListComponent implements OnInit {
  marsRoverList?: MarsRoverResponse;
  earth_date: string ='';
  roverName: string = '';
  model?: NgbDateStruct;

  constructor(private roverservice: MarsRoverService) { }

  ngOnInit(): void { }

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
}
