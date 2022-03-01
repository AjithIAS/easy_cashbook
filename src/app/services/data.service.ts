
import { Injectable, NgZone } from '@angular/core';
import { User } from "../shared/services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Router } from "@angular/router";
import { AuthService } from './auth.service';
import { Books } from '../shared/intefaces/expense-model';
import { Observable } from 'rxjs';
// import { popoverController } from '@ionic/core';
export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userData :any;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public db: AngularFireDatabase,
    public auth: AuthService,
    // public popover : popoverController
  ) { 
    this.userData = this.auth.getUser();
  }

  // Create New Books
  addBook(data:Books){       
    return this.db.database.ref('users/' + this.userData.uid + '/books/').push(
      data
    );
  }

  // Get Books BY USER
  getBooks(): Observable<SnapshotAction<any>[]>{
      return this.db.list('users/' + this.userData.uid + '/books').snapshotChanges();
  }


  // DELETE Book by user
  deleteBook(key: string): Promise<void> {
    return this.db.list('users/' + this.userData.uid + '/books').remove(key);
  }

  // GET BOOK BY ID
  getbook(id:string) {
  console.log(id)
    return this.db.database.ref('users/' + this.userData.uid + '/books').orderByChild('name').equalTo(id).once('value');
  }

  editBook(key: string, bookData:Books): Promise<void> {
    return this.db.list('users/' + this.userData.uid + '/books').update(key, bookData);
  }





  // Parse Data 
  parseData(obj){
    const data = [];
      obj.forEach(snapshot => {
      const expense = snapshot.payload.exportVal();
      expense.id = snapshot.key;
      data.push(expense);
    });
    return data;
  }

}
