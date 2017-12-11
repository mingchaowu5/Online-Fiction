// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-search-result-detail',
//   templateUrl: './search-result-detail.component.html',
//   styleUrls: ['./search-result-detail.component.css']
// })
// export class SearchResultDetailComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleBookService} from '../../../services/googlebook.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

declare let $: any;
@Component({
  selector: 'app-search-result-detail',
  templateUrl: './search-result-detail.component.html',
  styleUrls: ['./search-result-detail.component.css']
})
export class SearchResultDetailComponent implements OnInit {

  book;
  bookId;
  user;

  constructor(private googlebookService: GoogleBookService, private acRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.acRoute.params.subscribe(params => {
      this.bookId = params['bid'];
      this.googlebookService.getBook(this.bookId).subscribe((data) => {
        this.book = data;
        console.log(this.book);
      });
    });
  }



}
