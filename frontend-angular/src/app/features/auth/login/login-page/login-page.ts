import { Component } from '@angular/core';
import {LoginForm} from '../login-form/login-form';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    LoginForm,
    RouterLink
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

}
