import { environment } from './../../environments/environment';
import { AuthState } from './../entities/auth-state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

interface State {
  auth: AuthState
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  accessToken: string = '';
  refreshToken: string = '';
  baseUrl: string = environment.baseUrl;

  constructor(
    public http: HttpClient,
    store: Store<State>
  ) {
    store.select('auth').subscribe(state => {
      this.accessToken = state.accessToken;
      this.refreshToken = state.refreshToken;
    });
  }
}
