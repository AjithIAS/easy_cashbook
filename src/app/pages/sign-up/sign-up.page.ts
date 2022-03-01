import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signupForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,private authService : AuthService) { }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userPassword: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    }) 
  }

  get errorControl() {
    return this.signupForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.signupForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let data = this.signupForm.value;
      console.log(this.signupForm.value)
      this.authService.SignUp(data.userName, data.userPassword).then(res => {
        console.log(res)
      })
    }
  }

}
