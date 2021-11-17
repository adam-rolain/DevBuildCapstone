import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rover } from './rover';
import { MarsRover } from './mars-rover';
import { Photos } from './photos';
import { MarsRoverResponse } from './mars-rover-response';

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



}
