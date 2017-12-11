import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe((user) => {
        console.log(user);
        this.sharedService.user = user;
        this.router.navigate(['profile']);
      }, (err) => {
        console.log(err);
        if (err === 'Unauthorized') {
          this.errorFlag = true;
        }
      });
  }

}
