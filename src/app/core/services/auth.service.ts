import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  authToken = new BehaviorSubject<string>(
    localStorage.getItem('auth_token') || ''
  );
  authUsername = new BehaviorSubject<any>(localStorage.getItem('username'));
  authUserCode = new BehaviorSubject<any>(localStorage.getItem('user_code'));
  authLevelCode = new BehaviorSubject<any>(localStorage.getItem('level_code'));

  constructor(private http: HttpClient, private Router: Router) {}

  // AUTHENTICATION
  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
  }
  registrasi(data: any) {
    return this.http.post<any>(`${this.apiUrl}/master/registrasi`, data);
  }

  savetoken(token: any, username: any, user_code: any, level_code: any) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('user_code', user_code);
    localStorage.setItem('level_code', level_code);
    this.authToken.next(token);
    this.authToken.next(username);
    this.authToken.next(user_code);
    this.authToken.next(level_code);
  }

  updateLevelUser(level_code: any) {
    localStorage.setItem('level_code', level_code);
    this.authToken.next(level_code);
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_code');
    localStorage.removeItem('level_code');
    this.authToken.next('');
    this.authUsername.next('');
    this.authUserCode.next('');
    this.authLevelCode.next('');

    this.Router.navigate(['/auth/login']);
  }

  // FUNGSI GET
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getUserCode(): string | null {
    return localStorage.getItem('user_code');
  }
  getLevelCode(): string | null {
    return localStorage.getItem('level_code');
  }
}
