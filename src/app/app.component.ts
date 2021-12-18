import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './entities/auth-state';
import { NzSiderComponent } from 'ng-zorro-antd/layout';

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
    private cdRef: ChangeDetectorRef
  ) {
    this.authState = store.select('auth');

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
    })

  }
}
