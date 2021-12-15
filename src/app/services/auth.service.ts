import { CookieService } from './cookie.service';
import { LoginBody, LoginResponse } from './../entities/api/auth-requests';
import { User } from './../entities/user';
import { AuthApiService } from './../api/auth.api.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { AuthState } from '../entities/auth-state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import * as UserActions from '../actions/user.actions';
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

  init(id: string, accessToken: string): Observable<boolean> {
    console.log('init auth')

    this.store.next(AuthActions.update({
      accessToken: accessToken,
      refreshToken: '',
      isLogged: false,
      userId: id
    }))


    return this.userApi.getUser({id: id}).pipe(
      catchError(err => of(false)),
      map(res => {
        if (!res) {
          return false;
        }

        this.store.next(AuthActions.update({
          accessToken: accessToken,
          refreshToken: '',
          isLogged: true,
          userId: id
        }));

        this.store.next(UserActions.update(res as User));

        return true;
      })
    )
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

        this.cookie.set('accessToken', res.accessToken);
        this.cookie.set('userId', res.user.id);

        return res.user;
      })
    )
  }

  logout(): void {
    this.store.next(UserActions.reset());
    this.store.next(AuthActions.reset());

    this.cookie.remove('accessToken', 'userId');
  }
}
