import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ModalSuccessComponent } from './layouts/modal/modal-success/modal-success.component';
import { ModalConfirmComponent } from './layouts/modal/modal-confirm/modal-confirm.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [ModalSuccessComponent, ModalConfirmComponent, LandingPageComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
