import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LandingPageQuizComponent } from './landing-page-quiz/landing-page-quiz.component';
import { DetailQuizComponent } from './detail-quiz/detail-quiz.component';
import { AboutComponent } from './about/about.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressPageComponent } from './progress-page/progress-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LayoutsComponent },
  { path: 'quiz', component: LandingPageQuizComponent },
  { path: 'detail-quiz', component: DetailQuizComponent },
  { path: 'about', component: AboutComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'progress-page', component: ProgressPageComponent },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
