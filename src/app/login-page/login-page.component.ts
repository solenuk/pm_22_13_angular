import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {User} from '../types';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  standalone: true
})
export class LoginPageComponent {
  constructor(private router: Router, private api: ApiService) {
  }

  private _passwordRegEx: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*;+\-.,])[a-zA-Z0-9!@#$%^&*;+\-.,]{8,}$/;
  serverError: boolean = false;
  serverErrorMessage: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this._passwordRegEx)]),
  })


  openRegisterPage() {
    this.router.navigate(['/register']);
  }

  isEmailInvalid(){
    return this.loginForm.controls['email'].invalid &&
      (this.loginForm.controls['email'].touched);
  }

  isPasswordInvalid(){
    return this.loginForm.controls['password'].invalid &&
      (this.loginForm.controls['password'].touched);
  }

  async onSubmit(){
    try {
      const response = await this.api.login(this.loginForm.value as User);
      if(response.status === 200){
        sessionStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/']);
      }
      if(response.status === 400 || response.status === 401){
        this.serverErrorMessage = response.message;
        this.serverError = true;
      }
    }catch (error: any){
      alert('An error has occurred while creating new use, check console for more info.');
      console.error(error);
    }
  }
}
