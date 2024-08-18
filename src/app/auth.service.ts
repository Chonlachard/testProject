import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    // จำลองการเข้าสู่ระบบ
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
