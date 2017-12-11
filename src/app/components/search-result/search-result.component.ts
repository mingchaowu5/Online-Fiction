import { Component, OnInit } from '@angular/core';
import {GoogleBookService} from '../../services/googlebook.service.client';
 import {SharedService} from '../../services/shared.service.client';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  books;
  constructor(private googlebookService: GoogleBookService, private sharedService: SharedService,
               private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      const searchText = params['term'];
      console.log(searchText);
      this.googlebookService.searchBooks(searchText).subscribe((data) => {
        console.log(data);
        this.books = data.items;
        console.log(this.books);
      });
    });
  }

}
