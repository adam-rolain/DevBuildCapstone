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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarsRoverComponent } from './mars-rover/mars-rover.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { HomeComponent } from './home/home.component';
import { MarsRoverListComponent } from './mars-rover-list/mars-rover-list.component';

@NgModule({
  declarations: [
    AppComponent,
    APODComponent,
    ApodListComponent,
    UserLoginComponent,
    NavBarComponent,
    MarsRoverComponent,
    NewUserFormComponent,
    UpdateUserFormComponent,
    HomeComponent,
    MarsRoverListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
