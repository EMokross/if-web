import { LoginBody, LoginResponse } from './../entities/api/auth-requests';
import { User } from './../entities/user';
import { AuthApiService } from './../api/auth.api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthState } from '../entities/auth-state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import * as UserActions from '../actions/user.actions';

interface State {
  auth: AuthState,
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: Observable<AuthState>

  constructor(
    private authApi: AuthApiService,
    private store: Store<State>
  ) {
    this.authState = store.select('auth');
  }

  login({username, password}: LoginBody): Observable<User> {
    return this.authApi.login({username, password}).pipe(
      map((res: LoginResponse) => {
        this.store.next(AuthActions.update({
          accessToken: res.accessToken as string,
          refreshToken: '',
          isLogged: true,
          userId: res.user.id as string
        }));

        this.store.next(UserActions.update(res.user));

        return res.user;
      })
    )
  }
}
