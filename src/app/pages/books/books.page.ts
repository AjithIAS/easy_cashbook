import { Component, OnInit } from '@angular/core';
import { AuthService
 } from 'src/app/services/auth.service';
 import { DataService } from 'src/app/services/data.service';
//  import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddBookPage } from '../add-book/add-book.page';
import { BookOptionsComponent } from 'src/app/popups/book-options/book-options.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books : any;
  constructor(
    public authService : AuthService,
    public data :DataService,
    // private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.data.getBooks().subscribe((res:any) => {
      console.log(res);
      this.books = this.data.parseData(res);
      console.log(this.books )
    })
  }


  async addBook() {
    const modal = await this.modalController.create({
      component: AddBookPage,
      componentProps: {
        'data': {
          type : 'create',
          book_id:null,
        }
      },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    });
    return await modal.present();
  }

  close(){
    this.modalController.dismiss();
  }


  async openMenus(ev: any,id) {
    console.log(id)
    const popover = await this.popoverController.create({
      component: BookOptionsComponent,
      cssClass: 'book_menus',
      event: ev,
      componentProps: { book_id: id },
      // translucent: true,
      size:'auto',
      side: 'bottom',
      alignment: 'end'
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
