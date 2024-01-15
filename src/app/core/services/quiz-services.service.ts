import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuizServicesService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private Router: Router) {}
  ngOnInit() {}

  // User
  updateUserData(user_code: any, data: any) {
    return this.http.put<any>(`${this.apiUrl}/master/users/${user_code}`, data);
  }

  // Question
  getQustionByLevelCode(level_code: number) {
    return this.http.get<any>(
      `${this.apiUrl}/master/getQuestion-by-levelCode/${level_code}`
    );
  }

  getAnswerByQuestionId(questionId: number) {
    return this.http.get<any>(
      `${this.apiUrl}/master/getQuestion-by-levelCode/${questionId}`
    );
  }

  addResult(data: any) {
    return this.http.post<any>(`${this.apiUrl}/master/add-progress`, data);
  }

  updateResult(user_code: any, data: any) {
    return this.http.put<any>(
      `${this.apiUrl}/master/update-progress/${user_code}`,
      data
    );
  }

  getResultByUserCode(user_code: any) {
    return this.http.get<any>(`${this.apiUrl}/master/result/${user_code}`);
  }
}
