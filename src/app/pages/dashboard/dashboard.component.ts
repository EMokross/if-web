import { User } from './../../entities/user';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LegendPosition } from '@swimlane/ngx-charts';
import { map } from 'rxjs/operators';

interface PageState {
  user: User
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: Observable<User>;
  kdData: Observable<any>;
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = '#5AA454';

  constructor(private store: Store<PageState>) {
    this.user = store.select('user');
    this.kdData = this.user.pipe(
      map(user => {
        console.log(user.kills, user.deaths);
        return [
          {
            name: "Kills",
            value: user.kills
          },
          {
            name: 'Deaths',
            value: user.deaths
          }
        ]
      })
    );
  }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
