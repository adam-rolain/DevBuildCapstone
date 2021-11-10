import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { APODComponent } from './apod/apod.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodListComponent } from './apod-list/apod-list.component';

@NgModule({
  declarations: [
    AppComponent,
    APODComponent,
    ApodListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
