import { User } from './../../entities/user';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface PageState {
  user: User
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: Observable<User>

  constructor(private store: Store<PageState>) {
    this.user = store.select('user');
  }

  ngOnInit(): void {
  }

}
