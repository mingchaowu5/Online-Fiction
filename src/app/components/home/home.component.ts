import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service.client";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText;
  currentUser;
  currentPath;


  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.currentUser = this.sharedService.user;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
      }
    });
  }

  searchBook() {
    if (this.searchText) {
      this.router.navigate(['search-result', this.searchText]);
    }
  }

}
