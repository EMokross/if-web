import { UserGetParams } from './../entities/api/user-requests';
import { User } from './../entities/user';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends ApiService {

  getUser(params: UserGetParams): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })

    return this.http.get<User[]>(`${this.baseUrl}/user/${params.id}`, {headers: headers}).pipe(
      map(res => res[0])
    );
  }
}
