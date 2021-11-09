import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APOD } from './apod';

@Injectable({
  providedIn: 'root'
})
export class CoolSpaceService {

  constructor(private http: HttpClient) { }

  displayApod():APOD {
    let apod:APOD = {
      id: 0,
      date: "2021-11-04",
      explanation: "",
      hdurl: "",
      media_type: "string",
      service_version: "string",
      title: "string",
      url: "string",
    };
    this.http.get<APOD>('/api/apod').subscribe(
      (result: APOD) => {
        apod = result;
      }
    );
    return apod;
  }

}
