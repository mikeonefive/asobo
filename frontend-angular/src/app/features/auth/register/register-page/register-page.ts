import { Component, inject, OnInit } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterForm} from '../register-form/register-form';
import {RouterLink, Router} from "@angular/router";
import {AuthService} from '../../auth-service';

@Component({
  selector: 'app-register-page',
  imports: [
    ReactiveFormsModule,
    RegisterForm,
    RouterLink,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
      if(this.authService.isLoggedIn()){
        this.router.navigate(['/events']);
      }
  }


}
