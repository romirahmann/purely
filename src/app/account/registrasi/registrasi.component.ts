import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css'],
})
export class RegistrasiComponent {
  registrasiForm!: FormGroup;
  hideToglePassword = true;

  // password required
  wrongUsername = false;
  wrongPassword = false;

  // Emitter untuk modal
  @Output() information: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private api: AuthService,
    private route: Router
  ) {}

  ngOnInit() {
    this.registrasiForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  validationForm() {
    if (this.registrasiForm.invalid) {
      // Cek apakah input username kosong
      if (this.registrasiForm.controls['username'].invalid) {
        this.wrongUsername = true; // Tampilkan pesan kesalahan untuk username
      }

      // Cek apakah input password kosong
      if (this.registrasiForm.controls['password'].invalid) {
        this.wrongPassword = true; // Tampilkan pesan kesalahan untuk password
      }

      // Hentikan proses login jika form tidak valid
      return;
    } else {
      const textRegister = 'Register Succes!';
      // console.log(this.registrasiForm.value);
      this.information.emit(textRegister);
      const data = this.registrasiForm.value;
      this.register(data);
    }
  }
  onSubmit() {
    this.validationForm();
  }

  register(data: any) {
    this.api.registrasi(data).subscribe(
      (res: any) => {
        this.showModal();
      },
      (err: any) => {
        alert('Registrasi Gagal');
      }
    );
  }

  showModal() {
    const modalSuccess = document.querySelector('#modalSuccess');
    modalSuccess?.classList.remove('hidden');
    setTimeout(() => {
      modalSuccess?.classList.add('hidden');
      this.route.navigate(['/auth/login']);
    }, 2000);
  }

  togglePasswordVisibility() {
    const inputanPassword = document.querySelector('#password');
    this.hideToglePassword = !this.hideToglePassword;
    inputanPassword?.setAttribute('type', 'text');
  }
}
