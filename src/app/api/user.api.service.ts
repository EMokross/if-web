import { UserGetParams } from './../entities/api/user-requests';
import { User } from './../entities/user';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends ApiService {

  getUser(params: UserGetParams): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })

    return this.http.get<User>(`${this.baseUrl}/users/${params.id}`, {headers: headers});
  }
}
