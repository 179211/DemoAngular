import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/shared/user.service';
import { User } from 'src/app/users/shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

  users: User[];
  items: Array<any>;

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      console.log(data);
      this.users = data.map(e => {
        return {
          Id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      });
    });
  }

  deleteUser(user: User) {

  }

  selectUser(user: User) {

  }

  private handleError(error) {
    console.log(error);
  }
}
