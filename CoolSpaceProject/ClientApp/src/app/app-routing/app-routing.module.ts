import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APODComponent } from '../apod/apod.component';
import { ApodListComponent } from '../apod-list/apod-list.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MarsRoverComponent } from '../mars-rover/mars-rover.component';
import { NewUserFormComponent } from '../new-user-form/new-user-form.component';
import { UpdateUserFormComponent } from '../update-user-form/update-user-form.component';
import { HomeComponent } from '../home/home.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apod', component: APODComponent },
  { path: 'apodList', component: ApodListComponent },
  { path: 'favoriteApodList', component: ApodListComponent },
  { path: 'userSignUp', component: NewUserFormComponent },
  { path: 'updateUser', component: UpdateUserFormComponent },
  { path: 'login',  component: UserLoginComponent },
  { path: 'marsRover', component: MarsRoverComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
