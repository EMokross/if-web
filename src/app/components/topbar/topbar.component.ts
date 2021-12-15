import { User } from './../../entities/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private auth: AuthService) { }

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
    this.auth.login({username: this.username, password: this.password}).subscribe(
      (res: User) => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        this.error.next(err.error)
      }
    );
  }

}
