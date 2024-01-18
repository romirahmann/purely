import { EventService } from 'src/app/core/services/event.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit {
  userLogin: any = null;

  userCode!: any;

  // EMITER LOGIN
  @Output() infoLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.isLogin();
    this.receivedData();
  }

  isLogin() {
    if (!this.userLogin && this.authService.getToken()) {
      this.userCode = this.authService.getUserCode();
      this.getDataUser();
      this.infoLogin.emit(this.userLogin);
    }
  }

  getDataUser() {
    this.userLogin = {
      username: this.authService.getUsername(),
      user_code: this.userCode,
      level_code: this.authService.getLevelCode(),
    };
  }

  receivedData() {
    this.eventService.loginSuccessEvent.subscribe((data) => {
      this.userLogin = data;
      console.log('Received data in NavbarComponent:', this.userLogin);
      // Further actions with the received data
    });
  }
}
