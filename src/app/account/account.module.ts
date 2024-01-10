import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalSuccessComponent } from './layouts/modal-success/modal-success.component';

@NgModule({
  declarations: [RegistrasiComponent, LoginComponent, ModalSuccessComponent],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}
