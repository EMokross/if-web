import { CookieService } from './cookie.service';
import { LoginBody, LoginResponse } from './../entities/api/auth-requests';
import { User } from './../entities/user';
import { AuthApiService } from './../api/auth.api.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { AuthState } from '../entities/auth-state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth/auth.actions';
import * as UserActions from '../store/user/user.actions';
import { UserApiService } from '../api/user.api.service';

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
    private userApi: UserApiService,
    private store: Store<State>,
    private cookie: CookieService
  ) {
    this.authState = store.select('auth');
  }

  login({name, password}: LoginBody): Observable<User> {
    return this.authApi.login({name, password}).pipe(
      map((res: LoginResponse) => {
        this.store.next(AuthActions.update({
          accessToken: res.accessToken as string,
          refreshToken: '',
          isLogged: true,
          userId: res.user._id as string
        }));

        this.store.next(UserActions.update(res.user));

        return res.user;
      })
    )
  }

  logout(): void {
    this.store.next(UserActions.reset());
    this.store.next(AuthActions.reset());
  }
}
