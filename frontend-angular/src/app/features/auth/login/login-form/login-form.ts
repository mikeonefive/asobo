import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';  // Add this import
import {environment} from '../../../../../environments/environment';
import {AuthService} from '../../auth-service';
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-login-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginForm {
  loginForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      public authService: AuthService,
      private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      identifier: ['', [
        Validators.required,
        Validators.minLength(environment.minIdentifierLength),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(environment.minPWLength)]
      ]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']); // TODO: decide where to navigate to after login
      },
      error: (err) => {
        console.error('Login failed:', err);
        // TODO: Show error message to user
      }
    });
  }

  get getFormControls() {
    return this.loginForm.controls;
  }

  protected readonly environment = environment;
}
