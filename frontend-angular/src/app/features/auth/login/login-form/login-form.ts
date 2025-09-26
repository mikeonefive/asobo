import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../environments/environment';
import {AuthService} from '../../auth-service';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  loginForm: FormGroup;
  loggedIn: boolean;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.loggedIn = false;
    this.loginForm = this.formBuilder.group({
      identifier: ['', [
        Validators.required,
        Validators.minLength(environment.minIdentifierLength),
        /*Validators.email*/]
      ],
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

    this.auth.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // TODO: save JWT, navigate, etc.
        localStorage.setItem('jwt', response.token);
        this.loggedIn = true;
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }

  get getFormControls() {
    return this.loginForm.controls;
  }
}
