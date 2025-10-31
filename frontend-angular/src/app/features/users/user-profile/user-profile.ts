import {Component, computed, inject, signal} from '@angular/core';
import {AuthService} from '../../auth/services/auth-service';
import {Router} from '@angular/router';
import {UserProfileService} from './user-profile-service';
import {ProfilePictureUpload} from '../profile-picture-upload/profile-picture-upload';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Password} from 'primeng/password';

@Component({
  selector: 'app-user-profile',
  imports: [
    ProfilePictureUpload,
    IconField,
    InputIcon,
    InputText,
    FormsModule,
    FloatLabel,
    InputGroup,
    InputGroupAddon,
    Password,
    ReactiveFormsModule
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
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

  isEditingUsername = signal(false);
  isEditingFirstName = signal(false);
  isEditingSurname = signal(false);
  isEditingLocation = signal(false);
  isEditingEmail = signal(false);
  username = signal('')
  firstName = signal('');
  surname = signal('');
  location = signal('');
  email = signal('');

  showPasswordRequirements = false;

  toggleEdit(field: 'username' | 'firstName' | 'surname' | 'location' | 'email') {
    if (field === 'username') {
      this.isEditingUsername.set(!this.isEditingUsername)
    } else if (field === 'firstName') {
      this.isEditingFirstName.set(!this.isEditingFirstName());
    } else if (field === 'surname') {
      this.isEditingSurname.set(!this.isEditingSurname());
    } else if (field === 'location') {
      this.isEditingLocation.set(!this.isEditingLocation());
    } else if (field === 'email') {
      this.isEditingEmail.set(!this.isEditingEmail());
    }
  }

  handleFileSelected(file: File) {
    this.selectedImage = file;
  }

  toggleRequirements(): void {
    this.showPasswordRequirements = !this.showPasswordRequirements;
  }

  get getFormControls() {
    return this.userForm.controls;
  }
}
