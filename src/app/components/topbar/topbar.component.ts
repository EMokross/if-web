import { AuthState } from './../../entities/auth-state';
import { User } from './../../entities/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';

interface State {
  auth: AuthState,
  user: User
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  isModalVisible = false;
  username: string;
  password: string;
  error: BehaviorSubject<string> = new BehaviorSubject<string>('');
  user: Observable<User>;
  authState: Observable<AuthState>;

  constructor(
    private auth: AuthService,
    store: Store<State>
  ) {
    this.user = store.select('user');
    this.authState = store.select('auth');
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  handleOk(): void {
    this.isModalVisible = false;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

  login(): void {
    this.auth.login({name: this.username, password: this.password}).subscribe(
      (res: User) => {
        this.handleCancel();

        this.username = '';
        this.password = '';
      },
      (err: HttpErrorResponse) => {
        this.error.next(err.error)
      }
    );
  }

  logout(): void {
    this.auth.logout();
  }

}
