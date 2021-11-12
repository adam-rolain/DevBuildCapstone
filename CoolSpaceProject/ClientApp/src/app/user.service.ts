import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUserId: BehaviorSubject<number> = new BehaviorSubject(-1);

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

  setCurrentUserId(newId: number) {
    this.currentUserId.next(newId);
  }

  createNewUser(cb: any, newUser: User) {
    this.http.post<User>('/api/user/new', newUser).subscribe(
			result => {
				cb(result);
			}
		);
  }

  getUserInfo(cb: any, userId: number) {
    this.http.get<number>(`/api/user/currentUser/${userId}`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  updateUser(cb: any, user: User) {
    this.http.put<boolean>('/api/user/update', user).subscribe(
			result => {
				cb(result);
			}
		);
  }
}
