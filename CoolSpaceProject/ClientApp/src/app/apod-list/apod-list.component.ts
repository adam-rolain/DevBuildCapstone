import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
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

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;


  constructor(private spaceService: CoolSpaceService, private activatedRoute: ActivatedRoute, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
   }

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
        this.ApodList = result.reverse();
      },
    );
  }

  // Functions for the date range picker
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  convertToString() {
    this.newStartDate = `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`;
    this.newEndDate = `${this.toDate?.year}-${this.toDate?.month}-${this.toDate?.day}`;
    this.getApodByDateRange();
  }

}
