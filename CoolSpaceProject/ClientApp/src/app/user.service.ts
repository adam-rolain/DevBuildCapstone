import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(cb: any, userName: string, password: string) {
    this.http.get<boolean>(`/api/user/login?userName=${userName}&password=${password}`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  getCurrentUserId(cb: any) {
    this.http.get<number>(`/api/user/currentUser`).subscribe(
			result => {
				cb(result);
			}
		);
  }
}
