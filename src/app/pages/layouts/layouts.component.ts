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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLogin();
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

  signOut() {
    this.authService.logout();
    this.userLogin = null;
  }

  toggleUserMenu() {
    const userDropdown = document.getElementById('user-dropdown');
    if (userDropdown) {
      userDropdown.classList.toggle('hidden');
    }
  }
}
