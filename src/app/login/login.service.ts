import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api'; // URL ของ API ของคุณ

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<boolean> {
    debugger
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map(response => {
          if (response.token) {
            // จัดเก็บ JWT token ใน localStorage หรือ sessionStorage
            localStorage.setItem('authToken', response.token);
            return true;
          }
          return false;
        }),
        catchError(() => {
          // จัดการกรณีข้อผิดพลาด เช่น แสดงข้อความแสดงข้อผิดพลาด
          return [false];
        })
      );
  }
}
