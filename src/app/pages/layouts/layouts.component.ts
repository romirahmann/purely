import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent {
  userLogin!: any;

  // EMITER LOGIN
  @Output() infoLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor(private api: AuthService, private route: Router) {}

  ngOnInit() {
    this.isLogin();
  }

  isLogin() {
    if (!this.userLogin && this.api.getToken()) {
      this.getDataUser();
      this.infoLogin.emit(this.userLogin);
    }
  }

  getDataUser() {
    this.userLogin = {
      username: this.api.getUsername(),
      user_code: this.api.getUserCode(),
      level_code: this.api.getLevelCode(),
    };
  }

  signOut() {
    this.api.logout();
    this.userLogin = null;
  }
}
