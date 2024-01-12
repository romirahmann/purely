import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LandingPageQuizComponent } from './landing-page-quiz/landing-page-quiz.component';

const routes: Routes = [
  { path: '', component: LayoutsComponent },
  { path: 'quiz', component: LandingPageQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
