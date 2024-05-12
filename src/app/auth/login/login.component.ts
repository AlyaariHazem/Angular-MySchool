import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Shared } from '../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Shared,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  [x: string]: any;
  email: string = '';
  password: string = '';
  private authService = inject(AuthService);
  login(loginform: any): void {
    if (loginform.valid) {
      const data = loginform.value;
      this.authService.signIn(data.email, data.password).subscribe(res => {
      this.authService.router.navigateByUrl('users');
        console.log('res', res);
      });
    } else {
      console.log('there is error ');
    }

  }

  onPasswordChanged(pass: string): void {
    console.log('password', pass);
  }

  onEmailChanged(email: string): void {
    console.log('password', email);
  }
}
