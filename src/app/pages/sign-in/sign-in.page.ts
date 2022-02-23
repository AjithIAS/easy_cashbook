import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

 loginForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,private authService : AuthService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userPassword: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }

  get errorControl() {
    return this.loginForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let data = this.loginForm.value;
      console.log(this.loginForm.value)
      this.authService.SignIn(data.userName, data.userPassword).then(res => {
        console.log(res)
      })
    }
  }

}
