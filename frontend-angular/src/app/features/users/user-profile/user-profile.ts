import {Component, computed, inject, signal} from '@angular/core';
import {AuthService} from '../../auth/auth-service';
import {Router} from '@angular/router';
import {UserProfileService} from './user-profile-service';
import {ProfilePictureUpload} from '../profile-picture-upload/profile-picture-upload';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';

@Component({
  selector: 'app-user-profile',
  imports: [
    ProfilePictureUpload,
    IconField,
    InputIcon
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {
  private userProfileService = inject(UserProfileService);
  authService = inject(AuthService);
  private router = inject(Router);

  previewUrl = signal<string | ArrayBuffer | null>(null);
  userProfile = this.userProfileService.userProfile;
  selectedImage: File | null = null;
  selectedImageUrl = computed(() => this.userProfile().pictureUrl);
  displayImage = computed(() => this.previewUrl() || this.selectedImageUrl());

  handleFileSelected(file: File) {
    this.selectedImage = file;
  }
}
