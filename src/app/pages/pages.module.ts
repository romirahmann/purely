import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { ModalSuccessComponent } from './layouts/modal/modal-success/modal-success.component';
import { ModalConfirmComponent } from './layouts/modal/modal-confirm/modal-confirm.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LandingPageQuizComponent } from './landing-page-quiz/landing-page-quiz.component';
import { DetailQuizComponent } from './detail-quiz/detail-quiz.component';
import { AboutComponent } from './about/about.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressPageComponent } from './progress-page/progress-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { EventService } from '../core/services/event.service';
@NgModule({
  declarations: [
    ModalSuccessComponent,
    ModalConfirmComponent,
    LandingPageComponent,
    LayoutsComponent,
    LandingPageQuizComponent,
    DetailQuizComponent,
    AboutComponent,
    ProgressComponent,
    ProgressPageComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule],
  providers: [EventService],
})
export class PagesModule {}
