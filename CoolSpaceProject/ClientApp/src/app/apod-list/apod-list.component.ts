import { Component, OnInit } from '@angular/core';
import { APOD } from '../apod';
import { CoolSpaceService } from '../cool-space.service';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.css']
})
export class ApodListComponent implements OnInit {

  ApodList?: APOD[];

  constructor(private spaceService: CoolSpaceService) { }

  ngOnInit(): void {

    
  }

  getApodByDateRange() {
    this.spaceService.displayApodByDateRange(
      (result: any) => {
        this.ApodList = result;
      },
      '2021-11-01', '2021-11-10'
    );
  }

}
