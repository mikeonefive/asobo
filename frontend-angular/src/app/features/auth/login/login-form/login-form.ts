import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      identifier: ['', [
        Validators.required,
        Validators.minLength(environment.minIdentifierLength),
        Validators.email]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(environment.minPWLength)]
      ]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // TODO: call auth service
    } else {
      this.loginForm.markAllAsTouched(); // show errors
    }
  }
  
  get getFormControls() {
    return this.loginForm.controls;
  }
}
