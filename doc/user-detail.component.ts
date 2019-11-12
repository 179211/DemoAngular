import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  user: User;
  id: string;
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.id = this.route.snapshot.paramMap.get('Id');
    this.userService.getUser(this.id)
    .subscribe(data => {
      console.log(data.payload.data());
      this.user = {
        Id: data.payload.id,
        ...data.payload.data()
      } as User;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
