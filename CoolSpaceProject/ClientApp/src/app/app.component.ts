import { Component } from '@angular/core';
import { APOD } from './apod';
import { CoolSpaceService } from './cool-space.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CoolSpaceService ]
})
export class AppComponent {
  title = 'ClientApp';
  testApod?: APOD;

  constructor(private spaceservice: CoolSpaceService) {}

  getApod() {
    //console.log(`Current Date: ${this.testApod.date}`);
    this.spaceservice.displayApod(
      (result: any) => {
        this.testApod = result;
      }
    );
    //console.log(`New Date: ${this.testApod.date}`);
  }
}
