import { Component, inject } from '@angular/core';
import { Shared } from '../../../shared/shared.module';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [Shared],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
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
