import { User } from './../entities/user';
import { Injectable } from '@angular/core';
import { UserApiService } from '../api/user.api.service';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/user/user.actions';
import { first } from 'rxjs/operators';

interface State {
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: Store<State>,
    private userApi: UserApiService
  ) { }

  update(id: string) {
    this.userApi.getUser({id})
      .pipe(first())
      .subscribe(
        user => {
          console.log(user)
          this.store.dispatch(UserActions.update(user));
        }
      );
  }
}
