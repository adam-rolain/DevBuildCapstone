import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APOD } from './apod';
import { SaveFavoriteApod } from './save-favorite-apod';

@Injectable({
  providedIn: 'root'
})
export class CoolSpaceService {

  constructor(private http: HttpClient) { }

  displayApod(cb: any) {
    this.http.get<APOD>('/api/apod').subscribe(
			result => {
				cb(result);
			}
		);
  }

  displayApodByDate(cb: any, date: string) {
    this.http.get<APOD>(`/api/apod/${date}`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  displayApodByDateRange(cb: any, start_date: string, end_date: string) {
    this.http.get<APOD>(`/api/apod/daterange?startDate=${start_date}&endDate=${end_date}`).subscribe(
			result => {
				cb(result);
			}
		);
  }
  
  AddApodtoFavoriteList(cb: any, saveFavoriteApod: SaveFavoriteApod){
	  this.http.post<boolean>(`/api/favoriteApod`, saveFavoriteApod).subscribe(
		  result => {
			  cb(result);
		  }
	  );
  }

  GetFavoriteApodList(cb: any){
	this.http.get<APOD[]>(`/api/favoriteApodList`).subscribe(
		result => {
			cb(result);
		}
	);
}

}