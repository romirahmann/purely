import { Component } from '@angular/core';
import { QuizServicesService } from 'src/app/core/services/quiz-services.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.css'],
})
export class ProgressPageComponent {
  dataResult!: any;
  userCode!: any;
  dataUserLogin!: any;

  constructor(
    private apiQuiz: QuizServicesService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.getAllResult();
    this.getUserCode();
  }

  getUserCode() {
    this.userCode = this.authService.getUserCode();
    this.getDataUserLogin();
  }

  getDataUserLogin() {
    this.apiQuiz.getResultByUserCode(this.userCode).subscribe((res: any) => {
      this.dataUserLogin = res.data[0];
      console.log(this.dataUserLogin);
    });
  }

  getAllResult() {
    this.apiQuiz.getAllResult().subscribe((res: any) => {
      this.dataResult = res.data;
    });
  }
}
