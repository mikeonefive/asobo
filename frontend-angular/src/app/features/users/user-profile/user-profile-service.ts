import { Injectable, inject } from '@angular/core';
import { computed } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';
import { UrlUtilService } from '../../../shared/utils/url/url-util-service';
import { environment } from '../../../../environments/environment';
import { UserProfile } from './models/user-profile-model';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private authService = inject(AuthService);

  userProfile = computed<UserProfile>(() => {
    // rewrite that not current user is fetchd, but user of profile
    const user = this.authService.currentUser();
    return {
      userProfileUrl: user?.username
        ? `${environment.userProfileBaseUrl}${user.username}`
        : '/login',
      pictureUrl: user?.pictureURI
        ? UrlUtilService.getMediaUrl(user.pictureURI)
        : UrlUtilService.getMediaUrl(environment.userDummyProfilePicRelativeUrl),
      pictureAlt: user?.username
        ? `${user.username}'s profile picture`
        : 'User profile picture',
      username: user?.username || 'Guest'
    };
  });
}
