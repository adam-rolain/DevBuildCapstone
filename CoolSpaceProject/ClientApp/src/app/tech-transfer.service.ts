import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechTransferService {

  constructor(private http: HttpClient) { }

  searchPatents(cb: any, search: string) {
    this.http.get<number>(`/api/TechTransfer?search=${search}`).subscribe(
			result => {
				cb(result);
			}
		);
  }
}
