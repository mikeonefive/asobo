import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../../auth/models/user';
import {List} from '../../../core/data_structures/lists/list';
import {Comment} from '../../events/models/comment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.usersEndpoint);
  }
}
