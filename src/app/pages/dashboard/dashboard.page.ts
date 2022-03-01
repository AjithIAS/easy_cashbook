import { Component, OnInit } from '@angular/core';
import { AuthService
 } from 'src/app/services/auth.service';
 import { DataService } from 'src/app/services/data.service';
 import { IonRouterOutlet } from '@ionic/angular';
 import { ModalController } from '@ionic/angular';
import { AddBookPage } from '../add-book/add-book.page';
import { BooksPage } from '../books/books.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  i:any;
  constructor(
    public authService : AuthService,
    public data :DataService,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    
  }


  // Open BOOKS
  async openBooks() {
    const modal = await this.modalController.create({
      component: BooksPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  test(){
    let data  = {
      name: "test",
      comments: "cmedddddd",
    }
    this.authService.test(data)
  }
}
