import { Component, OnInit } from '@angular/core';
import { APOD } from '../apod';
import { CoolSpaceService } from '../cool-space.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class APODComponent implements OnInit {
  apod?: APOD;
  youtubeId?: string;

  constructor(private spaceService: CoolSpaceService) { }

  ngOnInit(): void {
    this.getApod();
  }

  getApod() {
    this.spaceService.displayApod(
      (result: any) => {
        this.apod = result;
        this.youtubeId = this.getYoutubeId(result.url);
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

}
