import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  bookForm: FormGroup;
  isSubmitted = false;
  @Input() data: any;

  constructor(
    public formBuilder: FormBuilder,
    private authService : AuthService,
    private database : DataService,
    private modal : ModalController,
    ) { }
  ngOnInit() {
    console.log(this.data)
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['']
    })

    if(this.data.type == 'edit'){
      this.getData();
    }
  }


  getData(){
    this.database.getbook(this.data.book_id).then((res:any) =>{
      console.log(this.database.parseData(res));
      
    })
  }
  get errorControl() {
    return this.bookForm.controls;
  }

  close(){
    this.modal.dismiss();
  }

  submitBook() {
    this.isSubmitted = true;
    if (!this.bookForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let data = this.bookForm.value;
      data['created_at'] = moment().format();
      // data = JSON.parse(data)
      console.log(this.bookForm.value)

      if(this.data.type == 'edit'){
        this.database.addBook(data).then(res => {
          console.log(res);
          this.modal.dismiss();
        }).catch(err => {
          console.log(err)
        })
      }
      else{
        this.database.editBook(data,this.data.id).then(res => {
          console.log(res);
          this.modal.dismiss();
        }).catch(err => {
          console.log(err)
        })
      }



      
    }
  }


}
