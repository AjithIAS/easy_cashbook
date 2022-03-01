import { Component, OnInit } from '@angular/core';
import { AuthService
 } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit() {
    console.log(this.authService.userData.toJSON())
    let user = this.authService.userData.toJSON();
    // this.authService.addBook(user.uid)
  }

  test(){
    let data  = {
      name: "test",
      comments: "cmedddddd",
    }
    this.authService.test(data)
  }
}
