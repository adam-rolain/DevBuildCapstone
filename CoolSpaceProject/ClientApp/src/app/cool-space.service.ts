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
}