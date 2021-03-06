import { LoginBody, LoginResponse } from './../entities/api/auth-requests';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ApiService {

  login(body: LoginBody): Observable<LoginResponse> {
    console.log(body)
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, body);
  }
}
