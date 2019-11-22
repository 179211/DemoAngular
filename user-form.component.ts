import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  user: User = { Id: '1', Name: 'AAA', Gender: 'Male', DOB: '1990/02/02', IsActive: true, Avatar: 'NoImg'};

  ngOnInit() {
  }

}
