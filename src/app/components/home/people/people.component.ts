import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(result => {
      this.users = result;
    });
  }

}
