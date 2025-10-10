import {computed, Injectable, signal, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from '@angular/router';
import {User} from './models/user';
import {LoginResponse} from './models/login-response';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token';
  private readonly USER_KEY = 'current_user';

  // Signal to track current user state
  private currentUserSignal = signal<User | null>(this.getUserFromStorage());

  // Public readonly signals
  public currentUser = this.currentUserSignal.asReadonly();
  public isLoggedIn = computed(() => !!this.currentUser() && !!this.getToken());

  private http = inject(HttpClient);
  private router = inject(Router);

  login(credentials: { identifier: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.loginEndpoint, credentials)
      .pipe(
        // tap lets you do some side-effect (here: setSession with response data) without changing the data
        tap(response => {
          this.setSession(response);
        })
      );
  }

  register(formData: FormData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.registerEndpoint, formData)
        .pipe(
            tap(response => {
              this.setSession(response);
            })
        );
  }

  private setSession(authResult: LoginResponse): void {
    // Store JWT token
    localStorage.setItem(this.TOKEN_KEY, authResult.token);

    // Store user object
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResult.user));

    // Update signal
    this.currentUserSignal.set(authResult.user);
  }

  logout(): void {
    // Clear storage
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);

    // Update signal
    this.currentUserSignal.set(null);

    // Navigate to login
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch (e) {
        console.error('Error parsing user from storage', e);
        return null;
      }
    }
    return null;
  }

  // Refresh user data from backend
  refreshUser(): Observable<User> {
    return this.http.get<User>('/api/auth/me')
      .pipe(
        tap(user => {
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
          this.currentUserSignal.set(user);
        })
      );
  }
}
