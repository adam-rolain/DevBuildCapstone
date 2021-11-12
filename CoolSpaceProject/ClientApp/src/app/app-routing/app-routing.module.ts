import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { APODComponent } from '../apod/apod.component';
import { ApodListComponent } from '../apod-list/apod-list.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MarsRoverComponent } from '../mars-rover/mars-rover.component';
import { AppComponent } from '../app.component';


const routes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'apod', component: APODComponent },
  { path: 'apodList', component: ApodListComponent },
  { path: 'favoriteApodList', component: ApodListComponent },
  { path: 'userSignUp', component: UserFormComponent },
  { path: 'updateUser', component: UserFormComponent },
  { path: 'login',  component: UserLoginComponent },
  { path: 'marsRover', component: MarsRoverComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
