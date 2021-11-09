import { Component } from '@angular/core';
import { APOD } from './apod';
import { CoolSpaceService } from './cool-space.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  apod: APOD = {
    id: 0,
    date: "2021-11-04",
    explanation: "",
    hdurl: "",
    media_type: "string",
    service_version: "string",
    title: "string",
    url: "string",
  };

  constructor(private spaceservice: CoolSpaceService) {this.apod = spaceservice.displayApod()}
}
