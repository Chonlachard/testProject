import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from './login.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: LoginService,
    private router: Router,
    private dialog: MatDialog 
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // เรียกใช้ AuthService เพื่อเข้าสู่ระบบ
      this.authService.login(email, password).subscribe(success => {
        if (success) {
          // นำทางไปยังหน้าหลักหลังจากเข้าสู่ระบบสำเร็จ
          this.router.navigate(['/home']);
        } else {
          // จัดการกรณีเข้าสู่ระบบล้มเหลว (เช่น แสดงข้อความแสดงข้อผิดพลาด)
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onForgotPassword() {
    // จัดการกรณีลืมรหัสผ่าน
  }

  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, {
      width: '400px'
    });
  }
}
