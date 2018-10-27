import { Injectable, NgZone } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Rx";


 
@Injectable()
export class DataProvider {
 
  constructor(private db: AngularFireDatabase, public zone: NgZone) { }
 
  getFiles() {
    let ref = this.db.list('articles');
 
    return ref.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
  }

   getPopular() {
    let ref = this.db.list('popular');
 
    return ref.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
  }

  getContent() {
    let ref = this.db.list('/articles/Content');
 
    return ref.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
  }

  getRecommended() {
    let ref = this.db.list('recommended');
 
    return ref.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
  }
}
