import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APOD } from './apod';

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
}