import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {BookService} from "../../../services/book.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  role = ['admin', 'reader', 'writer', 'editor'];

  books;
  nbTitle;
  nbDescription;
  currentEditBook;

  updateMessageFlag = false;
  updateMessage = 'Successfully updated';
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
               private bookService: BookService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.bookService.findBooksForUser(this.user._id).subscribe(result => {
      this.books = result;
    });
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

  createBook() {
    const newBook = {
      title: this.nbTitle,
      description: this.nbDescription,
      _author: this.user._id
    };
    this.bookService.createBook(this.user._id, newBook).subscribe(r => {
      this.bookService.findBooksForUser(this.user._id).subscribe(result => {
        this.books = result;
      });
    });
  }

  editBook(book) {
    this.currentEditBook = book;
  }

}
