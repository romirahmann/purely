import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { QuizServicesService } from 'src/app/core/services/quiz-services.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  @Input() dataLogin!: any;
  score!: number;

  constructor(
    private api: AuthService,
    private route: Router,
    private apiQuiz: QuizServicesService
  ) {}
  ngOnInit() {
    this.getScore();
  }

  getScore() {
    this.apiQuiz
      .getResultByUserCode(this.dataLogin.user_code)
      .subscribe((res: any) => {
        this.score = res.data[0].score;
        console.log(this.score);
      });
  }

  showModal() {
    alert('Silahkan Login terlebih dahulu!');
  }

  startQuiz() {
    if (this.score < 350) {
      this.route.navigate(['/quiz']);
    } else {
      alert('Kamu sudah menyelesaikan seluruh quiz :D');
      this.route.navigate(['/progress']);
    }
  }
}
