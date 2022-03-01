import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddBookPage } from 'src/app/pages/add-book/add-book.page';
@Component({
  selector: 'app-book-options',
  templateUrl: './book-options.component.html',
  styleUrls: ['./book-options.component.scss'],
})
export class BookOptionsComponent implements OnInit {
  @Input() book_id :string;
  constructor(
    private data : DataService,
    private popover : PopoverController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.book_id)
  }



  async edit() {
    const modal = await this.modalController.create({
      component: AddBookPage,
      componentProps: {
        'data': {
          type : 'edit',
          book_id:this.book_id,
        }
      },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    });
    this.popover.dismiss();
    return await modal.present();
  }

  delete(){
    this.data.deleteBook(this.book_id).then(res => {
      console.log(res);
      this.popover.dismiss();
    }).catch(error => {
      this.popover.dismiss();
      console.log(error);
    })
  }

}
