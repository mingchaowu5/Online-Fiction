import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password1: string;
  password2: string;
  userRole;
  errorFlag: boolean;
  errorMsg = 'Password does not match';
  role = ['admin', 'reader', 'writer', 'editor'];
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  register() {
    if (this.password1 === this.password2) {
      this.userService.findUserByUsername(this.username).subscribe((data) => {
        if (data) {
          this.errorMsg = 'Username already taken';
          this.errorFlag = true;
        } else {
          this.errorFlag = false;
          const user = {
            username: this.username,
            password: this.password1,
            role: this.userRole
          };
          this.userService.register(user)
            .subscribe((newUser) => {
              this.sharedService.user = newUser;
              this.router.navigate(['profile']);
            });
        }
      });
    } else {
      this.errorMsg = 'Password does not match';
      this.errorFlag = true;
    }
  }

}
