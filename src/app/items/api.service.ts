import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/items'; // URL ของ API

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลทั้งหมด
  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // ค้นหาข้อมูลตามคำค้นหา
  searchItems(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?search=${query}`);
  }
}
