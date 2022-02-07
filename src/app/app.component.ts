import { UserService } from './services/user.service';
import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { INIT, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './entities/auth-state';
import { NzSiderComponent } from 'ng-zorro-antd/layout';
import { state } from '@angular/animations';
import { first } from 'rxjs/operators';

interface PageState {
  auth: AuthState
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidebar') elSidebar: NzSiderComponent;
  
  authState: Observable<AuthState>

  constructor(
    store: Store<PageState>,
    private cdRef: ChangeDetectorRef,
    private userService: UserService
  ) {
    this.authState = store.select('auth');

    this.init();
  }

  ngAfterViewInit(): void {
    this.authState.subscribe(state => {
      console.log(state.isLogged)
      if (state.isLogged)
        this.elSidebar.nzWidth = '15vw'
      else
        this.elSidebar.nzWidth = 1;

      this.elSidebar.updateStyleMap();
      this.cdRef.detectChanges();
    });
  }

  private init(): void {
    this.authState
      .pipe(first())
      .subscribe(state => {
        if (state.isLogged) {
          this.userService.update(state.userId);
        }
      })
  }
}
