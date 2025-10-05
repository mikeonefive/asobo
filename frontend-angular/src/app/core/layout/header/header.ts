import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../../features/auth/auth-service';
import {environment} from '../../../../environments/environment';
import {UrlUtilService} from '../../../shared/utils/url/url-util-service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public authService: AuthService,) {
  }

  get userProfile() {
    const user = this.authService.currentUser();
    return {
      userProfileUrl: user?.username
        ? `${environment.userProfileBaseUrl}${user?.username}`
        : '/login',
      pictureUrl: user?.pictureURI
        ? UrlUtilService.getMediaUrl(user.pictureURI)
        : UrlUtilService.getMediaUrl(environment.userDummyProfilePicRelativeUrl),
      pictureAlt: user?.username
        ? `${user.username}'s profile picture`
        : 'User profile picture',
      username: user?.username || 'Guest'
    };
  }

  protected readonly environment = environment;
}
