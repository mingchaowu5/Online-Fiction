import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  role = ['admin', 'reader', 'writer', 'editor'];

  updateMessageFlag = false;
  updateMessage = 'Successfully updated';
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  updateUser() {
    // console.log('update user');
    // console.log(this.user);
    this.userService.updateUser(this.user._id, this.user)
      .subscribe(user => {
        this.user = user;
        this.sharedService.user = user;
        this.updateMessageFlag = true;
      });
  }

  logOut() {
    this.userService.logout().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
