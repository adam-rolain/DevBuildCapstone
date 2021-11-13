import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserId: BehaviorSubject<number> = new BehaviorSubject(-1);

  constructor(private http: HttpClient) { }

  public getCurrentUserId(): Observable<number> {
    return this.currentUserId;
  }

  loginUser(cb: any, userName: string, password: string) {
    this.http.get<boolean>(`/api/user/login?userName=${userName}&password=${password}`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  getCurrentUserIdFromUserDAL(cb: any) {
    this.http.get<number>(`/api/user/currentUser`).subscribe(
			result => {
				cb(result);
			}
		);
  }

  setCurrentUserId(newId: number) {
    console.log(`UserId before login: ${this.currentUserId.value}`)
    this.currentUserId.next(newId);
    console.log(`UserId after login: ${this.currentUserId.value}`)
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

  logoutUser(cb: any) {
    this.http.get<boolean>('/api/user/logout').subscribe(
      result => {
        cb(result);
      }
    )
  }
}
