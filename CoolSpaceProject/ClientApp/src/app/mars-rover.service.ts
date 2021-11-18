import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rover } from './rover';
import { MarsRover } from './mars-rover';
import { Photos } from './photos';
import { MarsRoverResponse } from './mars-rover-response';
import { SaveFavoriteRover } from './save-favorite-rover';
import { FavoriteRover } from './favorite-rover';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverService {

  constructor(private http: HttpClient) { }


  displayMarsRoverByDateRange(cb: any, earth_date: string, roverName: string) {
    this.http.get<MarsRoverResponse>(`/api/marsrover?earthDate=${earth_date}&roverName=${roverName}`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  addFavoriteRover(cb: any, favoriteRover: SaveFavoriteRover) {
    this.http.post<number>(`/api/favoriteRover`, favoriteRover).subscribe(
		  result => {
			  cb(result);
		  }
	  );
  }

  deleteFavoriteRover(cb: any, favoriteRoverId: number) {
    this.http.delete<boolean>(`/api/favoriteRover/delete/${favoriteRoverId}`).subscribe(
			result =>{
				cb(result);
			}
		)
  }

  getFavoriteRovers(cb: any, ) {
    this.http.get<FavoriteRover[]>(`/api/favoriteRoverList`).subscribe(
      result => {
        cb(result);
      }
    );
  }



}
