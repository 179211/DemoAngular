import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUsers() {
    return this.db.collection('Users').snapshotChanges();
  }

  getUser(Id: string) {
    return this.db.collection('Users').doc(Id).snapshotChanges();
  }

  createUser(user: User) {
    return this.db.collection('Users').add(user);
  }

  deleteUser(Id: string) {
    return this.db.collection('Users').doc(Id).delete();
  }

  updateUser(user: User) {
    return this.db.collection('Users').doc(user.Id).update(user);
  }

  searchUsers(searchValue) {
    return this.db.collection('Users', ref => ref.where('Name', '>=', searchValue)
      .where('Name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }
}
