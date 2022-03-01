import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,private authService : AuthService) { }
  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      passwordResetEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }

  get errorControl() {
    return this.forgotForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.forgotForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let data = this.forgotForm.value;
      console.log(this.forgotForm.value)
      this.authService.ForgotPassword(data.passwordResetEmail).then(res => {
        console.log(res)
      })
    }
  }
}
