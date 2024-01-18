import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalSuccessComponent } from './layouts/modal-success/modal-success.component';
import { EventService } from '../core/services/event.service';

@NgModule({
  declarations: [RegistrasiComponent, LoginComponent, ModalSuccessComponent],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
  providers: [EventService],
})
export class AccountModule {}
