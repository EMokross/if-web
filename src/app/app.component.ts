import { CookieService } from './services/cookie.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './entities/auth-state';

interface PageState {
  auth: AuthState
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  authState: Observable<AuthState>

  constructor(
    store: Store<PageState>,
    private auth: AuthService,
    private cookie: CookieService
  ) {
    this.authState = store.select('auth');
  }
}
