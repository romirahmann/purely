import { Component } from '@angular/core';
import { QuizServicesService } from 'src/app/core/services/quiz-services.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-quiz',
  templateUrl: './detail-quiz.component.html',
  styleUrls: ['./detail-quiz.component.css'],
})
export class DetailQuizComponent {
  levelCode!: number;
  userCode!: any;
  questions: any[] = [];
  userAnswers: any[] = [];
  dataProgres!: any;

  currentQuestionIndex: number = 0;
  totalScore: number = 0;

  selectedAnswer: any;
  answerId: any = null;
  status: any = null;
  quizFinished: boolean = false;

  constructor(
    private api: QuizServicesService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDataLogin();
  }

  getDataLogin() {
    const level_code = this.auth.getLevelCode();
    this.userCode = this.auth.getUserCode();
    if (level_code !== null) {
      this.levelCode = parseInt(level_code);
      this.getQuestionByLevelCode();
      this.getDataProgressUser();
    } else {
      console.error('Level code is null');
    }
  }

  getQuestionByLevelCode() {
    this.api.getQustionByLevelCode(this.levelCode).subscribe((res: any) => {
      this.processAnswers(res.data);
    });
  }

  private processAnswers(data: any): void {
    this.questions = data.map((question: any) => {
      return {
        question_id: question.question_id,
        question: question.question,
        level_code: question.level_code,
        score: question.score,
        answers: question.answers
          ? question.answers.split(';').map((answer: string) => {
              const [answer_id, description, status] = answer.split(':');
              return { answer_id, description, status };
            })
          : [],
      };
    });
    if (this.questions.length === 1) {
      this.quizFinished = true;
    }
    console.log('Processed questions:', this.questions);
  }

  checkFinalScore() {
    console.log('Final Score:' + this.totalScore);
    const dataProgress = {
      score: this.dataProgres.score + this.totalScore,
    };

    if (dataProgress.score >= 50) {
      const newLevel = {
        level_code: 2,
      };
      console.log('User Code: ', this.userCode, ' newLevel: ', newLevel);
      this.api.updateUserData(this.userCode, newLevel).subscribe((res: any) => {
        console.log('Berhasil Update User', res);
      });
      this.auth.updateLevelUser(newLevel.level_code);
    }
    if (dataProgress.score >= 150) {
      const newLevel = {
        level_code: 3,
      };
      console.log('User Code: ', this.userCode, ' newLevel: ', newLevel);
      this.api.updateUserData(this.userCode, newLevel).subscribe((res: any) => {
        console.log('Berhasil Update User');
      });
      this.auth.updateLevelUser(newLevel.level_code);
    }

    console.log(dataProgress);
    // Update Score
    this.api.updateResult(this.userCode, dataProgress).subscribe((res: any) => {
      console.log(`Update Progress Berhasil!`);
      this.router.navigate(['/']);
    });
  }

  finishQuiz() {
    this.status = parseInt(this.selectedAnswer.status);
    this.answerId = this.selectedAnswer.answer_id;

    setTimeout(() => {
      if (this.selectedAnswer) {
        if (this.status === 1) {
          this.totalScore += this.questions[this.currentQuestionIndex].score;
          console.log('BENAR');
        }
        if (this.status === 0) {
          console.log('SALAH');
        }

        this.quizFinished =
          this.currentQuestionIndex === this.questions.length - 1;

        // Call to check the final score
        this.checkFinalScore();
      }
    }, 1000);
  }

  nextQuestion() {
    this.status = parseInt(this.selectedAnswer.status);
    this.answerId = this.selectedAnswer.answer_id;

    setTimeout(() => {
      if (this.status === 1) {
        this.totalScore += this.questions[this.currentQuestionIndex].score;
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
          this.selectedAnswer = null;
          if (this.currentQuestionIndex === this.questions.length - 1) {
            this.quizFinished = true;
          } else {
            this.quizFinished = false;
          }
        } else {
          this.quizFinished = true;
        }
      }
      if (this.status === 0) {
        alert('Yahh.. Jawabanmu salah, silahkan ulangi kembali!');
        setTimeout(() => {
          this.status = null;
          this.answerId = null;
          this.selectedAnswer = null;
        }, 2000);
      }
    }, 1000);
  }

  getDataProgressUser() {
    this.api.getResultByUserCode(this.userCode).subscribe((res: any) => {
      this.dataProgres = res.data[0];
      console.log(this.dataProgres);
    });
  }
}
