import { Component, Input, OnInit } from '@angular/core';
import { MarsRover } from '../mars-rover';
import { Rover } from '../rover';
import { Camera } from '../camera';
import { Photos } from '../photos';
import { MarsRoverService } from '../mars-rover.service';


@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.css']
})
export class MarsRoverComponent implements OnInit {

  @Input() marsrover: MarsRover ={
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

  constructor(private marsSpaceService: MarsRoverService) { }

  ngOnInit(): void {
  }


  
}
