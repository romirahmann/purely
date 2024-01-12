import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  userLogin!: any;
  @Input() dataLogin!: any;

  constructor(private api: AuthService, private route: Router) {}
  ngOnInit() {
    console.log(this.dataLogin);
  }

  showModal() {
    alert('Silahkan Login terlebih dahulu!');
  }
}
