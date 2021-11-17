import { Component, OnInit } from '@angular/core';
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
  MarsRoverList?: MarsRoverResponse;
  earth_date: string ='2021-07-19';
  roverName: string = 'curiosity';

  constructor(private roverservice: MarsRoverService) { }

  ngOnInit(): void {
    this.getMarsRoverListByEarthDateAndRoverName();
  }



  getMarsRoverListByEarthDateAndRoverName(){
    
    this.roverservice.displayMarsRoverByDateRange(
      (result: any) => {
        this.MarsRoverList = result;
        console.log(this.MarsRoverList?.photos[0].id)
      },
      this.earth_date, this.roverName
    );
}




}
