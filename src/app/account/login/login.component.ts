import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  hideToglePassword = true;
  // Validation
  wrongUsername = false;
  wrongPassword = false;
  // EMITTER TO MODAL
  @Output() information: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private api: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      // Cek apakah input username kosong
      if (this.loginForm.controls['username'].invalid) {
        this.wrongUsername = true; // Tampilkan pesan kesalahan untuk username
      }

      // Cek apakah input password kosong
      if (this.loginForm.controls['password'].invalid) {
        this.wrongPassword = true; // Tampilkan pesan kesalahan untuk password
      }

      // Hentikan proses login jika form tidak valid
      return;
    } else {
      const textLogin = 'Login Success!';
      const data = this.loginForm.value;
      this.information.emit(textLogin);
      this.login(data);
    }
  }

  togglePasswordVisibility() {
    const inputanPassword = document.querySelector('#password');
    this.hideToglePassword = !this.hideToglePassword;
    inputanPassword?.setAttribute('type', 'text');
  }

  showModal() {
    const modalSuccess = document.querySelector('#modalSuccess');
    modalSuccess?.classList.remove('hidden');
    setTimeout(() => {
      modalSuccess?.classList.add('hidden');
      this.route.navigate(['']);
    }, 2000);
  }

  login(data: any) {
    this.api.login(data).subscribe(
      (res: any) => {
        this.api.savetoken(
          res.userData.token,
          res.userData.username,
          res.userData.user_code,
          res.userData.level_code
        );
        this.cdr.detectChanges();
        // console.log(res.userData);
        this.showModal();
      },
      (err: any) => {
        alert('Username atau Password Salah!');
      }
    );
  }
}
