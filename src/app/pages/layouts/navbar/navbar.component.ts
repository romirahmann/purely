import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userLogin: any = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getDataLogin();
  }

  getDataLogin() {
    this.userLogin = {
      username: this.authService.getUsername(),
      user_code: this.authService.getUserCode(),
      level_code: this.authService.getLevelCode(),
    };
    console.log(this.userLogin);
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
