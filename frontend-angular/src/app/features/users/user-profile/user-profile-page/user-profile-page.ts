import {Component, inject, OnInit} from '@angular/core';
import {RegistrationForm} from "../../../auth/registration/registration-form/registration-form";
import {UserProfileForm} from '../user-profile-form/user-profile-form';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  imports: [
    RegistrationForm,
    UserProfileForm
  ],
  templateUrl: './user-profile-page.html',
  styleUrl: './user-profile-page.scss',
})
export class UserProfilePage implements OnInit {
  private route = inject(ActivatedRoute);
  profileUsername: string | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.profileUsername = params.get('username')!;
    });
  }
}
