import { Component, Input, OnInit } from '@angular/core';
import { APOD } from '../apod';
import { CoolSpaceService } from '../cool-space.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class APODComponent implements OnInit {
  @Input() apod?: APOD;
  @Input() isTodaysApod: boolean = true;
  youtubeId?: string;
  newDate: string ='';

  constructor(private spaceService: CoolSpaceService) { }

  ngOnInit(): void {
    if (this.isTodaysApod) {
      this.getApod();
    }
   if(this.newDate){
      this.getApodByDate();
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
      this.newDate
    );
  }
}
