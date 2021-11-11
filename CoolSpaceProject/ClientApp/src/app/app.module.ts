import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { APODComponent } from './apod/apod.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodListComponent } from './apod-list/apod-list.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarsRoverComponent } from './mars-rover/mars-rover.component';



@NgModule({
  declarations: [
    AppComponent,
    APODComponent,
    ApodListComponent,
    UserLoginComponent,
    UserFormComponent,
    NavBarComponent,
    MarsRoverComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
