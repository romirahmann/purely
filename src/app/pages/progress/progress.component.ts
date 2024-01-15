import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { QuizServicesService } from 'src/app/core/services/quiz-services.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  userCode!: any;
  dataUser!: any;

  constructor(
    private apiQuiz: QuizServicesService,
    private AuthService: AuthService
  ) {}
  ngOnInit() {
    this.dataUserLogin();
  }

  dataUserLogin() {
    this.userCode = this.AuthService.getUserCode();
    this.getDataUser();
  }

  getDataUser() {
    this.apiQuiz.getResultByUserCode(this.userCode).subscribe((res: any) => {
      this.dataUser = res.data[0];
    });
  }
}
