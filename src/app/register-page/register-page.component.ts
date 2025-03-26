import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {User} from '../types';

@Component({
  selector: 'app-register-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: '../login-page/login-page.component.scss',
  standalone: true
})
export class RegisterPageComponent {
  constructor(private router: Router, private api: ApiService) {
  }

  private _passwordRegEx: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*;+\-.,])[a-zA-Z0-9!@#$%^&*;+\-.,]{8,}$/;
  serverError: boolean = false;
  serverErrorMessage: string = '';

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this._passwordRegEx)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(this._passwordRegEx)]),
  })

  async onSubmit(){
    try {
      const response = await this.api.register(this.registerForm.value as User);
      if(response.status === 200){
        this.router.navigate(['/login']);
      }
      if(response.status === 400){
        this.serverErrorMessage = response.message;
        this.serverError = true;
      }
    }catch (error: any){
      alert('An error has occurred while creating new use, check console for more info.');
      console.error(error);
    }
  }

  isEmailInvalid(){
    return this.registerForm.controls['email'].invalid &&
      (this.registerForm.controls['email'].touched);
  }

  isPasswordInvalid(){
    return this.registerForm.controls['password'].invalid &&
      (this.registerForm.controls['password'].touched);
  }

  isConfirmPasswordInvalid(){
    return this.registerForm.controls['confirmPassword'].invalid &&
      (this.registerForm.controls['confirmPassword'].touched);
  }

  isPasswordsDifferent(){
    if (this.registerForm.controls['password'].dirty && this.registerForm.controls['confirmPassword'].dirty) {
      return this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value;
    } else {
      return false;
    }
  }

  openLoginPage() {
    this.router.navigate(['/login']);
  }
}
