import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  authToken = new BehaviorSubject<string>(
    localStorage.getItem('auth_token') || ''
  );

  constructor(private http: HttpClient) {}

  // AUTHENTICATION
  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
  }
  registrasi(data: any) {
    return this.http.post<any>(`${this.apiUrl}/master/registrasi`, data);
  }

  savetoken(token: any) {
    localStorage.setItem('auth_token', token);
    this.authToken.next(token);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.authToken.next('');
  }

  // FUNGSI GET
  getToken() {
    return localStorage.getItem('auth_token');
  }
}
