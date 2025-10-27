import {Component, inject} from '@angular/core';
import {AuthService} from '../../auth/auth-service';
import {Router} from '@angular/router';
import {Avatar} from 'primeng/avatar';
import {UserProfileService} from './user-profile-service';

@Component({
  selector: 'app-user-profile',
  imports: [
    Avatar
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {
  private userProfileService = inject(UserProfileService);
  authService = inject(AuthService);
  private router = inject(Router);

  userProfile = this.userProfileService.userProfile;
}
