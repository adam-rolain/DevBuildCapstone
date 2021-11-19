import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search';

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

  getPreviousSearches(cb: any) {
    this.http.get<Search[]>(`/api/TechTransfer/PreviousSearches`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  saveSearch(cb: any, search: string) {
    this.http.get<boolean>(`/api/TechTransfer/SaveSearch?search=${search}`).subscribe(
			result => {
				cb(result);
			}
		);
  }
}
