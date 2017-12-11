import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {BookService} from "../../../services/book.service.client";
import {CommentService} from "../../../services/comment.service.client";
declare let $: any;

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

  likedBooks;

  comments;
  currentEditComment;

  updateMessageFlag = false;
  updateMessage = 'Successfully updated';
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
               private bookService: BookService, private changeDetectorRef: ChangeDetectorRef,
               private commentService: CommentService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.bookService.findBooksForUser(this.user._id).subscribe(result => {
      this.books = result;
    });
    this.bookService.findLikedBooksForUser(this.user._id).subscribe(result => {
      this.likedBooks = result;
      console.log('liked book', result);
    });
    this.commentService.findCommentsForUser(this.user._id).subscribe(result => {
      this.comments = result;
      console.log('comment of user', result);
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
        $('#newBookModel').modal('hide');
        this.books = result;
      });
    });
  }

  editBook(book) {
    this.currentEditBook = book;
    this.changeDetectorRef.detectChanges();
    $('#editBookModel').modal('show');
  }

  updateBook() {
    this.bookService.updateBook(this.currentEditBook._id, this.currentEditBook).subscribe(r => {
      this.bookService.findBooksForUser(this.user._id).subscribe(result => {
        $('#editBookModel').modal('hide');
        this.books = result;
      });
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.currentEditBook._id).subscribe(r => {
      this.bookService.findBooksForUser(this.user._id).subscribe(result => {
        $('#editBookModel').modal('hide');
        this.books = result;
      });
    });
  }

  editComment(cmt) {
    this.currentEditComment = cmt;
    this.changeDetectorRef.detectChanges();
    $('#editCommentModel').modal('show');
  }

  deleteComment() {
    this.commentService.deleteComment(this.currentEditComment._id).subscribe(r => {
      this.commentService.findCommentsForUser(this.user._id).subscribe(result => {
        this.comments = result;
        $('#editCommentModel').modal('hide');
      });
    });
  }

  updateComment() {
    this.commentService.updateComment(this.currentEditComment._id, this.currentEditComment).subscribe(r => {
      this.commentService.findCommentsForUser(this.user._id).subscribe(result => {
        this.comments = result;
        $('#editCommentModel').modal('hide');
      });
    });
  }

}
