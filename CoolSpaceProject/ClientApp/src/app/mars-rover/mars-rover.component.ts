import { Component, OnInit } from '@angular/core';
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

  constructor(private marsSpaceService: MarsRoverService) { }

  ngOnInit(): void {
  }


  
}
