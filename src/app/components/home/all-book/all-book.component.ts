import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {BookService} from "../../../services/book.service.client";

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {

  books;
  constructor(private router: Router, private sharedService: SharedService,
               private bookService: BookService) { }

  ngOnInit() {
    this.bookService.findAllBooks().subscribe(result => {
      this.books = result;
    });
  }

}
