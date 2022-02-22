import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-verify-emai',
  templateUrl: './verify-emai.page.html',
  styleUrls: ['./verify-emai.page.scss'],
})
export class VerifyEmaiPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
