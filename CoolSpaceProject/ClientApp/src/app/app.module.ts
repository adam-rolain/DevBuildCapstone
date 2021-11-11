import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { APODComponent } from './apod/apod.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodListComponent } from './apod-list/apod-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    APODComponent,
    ApodListComponent,
    UserLoginComponent,
    UserFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
