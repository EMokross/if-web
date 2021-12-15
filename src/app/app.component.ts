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
    store: Store<PageState>
  ) {
    this.authState = store.select('auth');
  }

}
