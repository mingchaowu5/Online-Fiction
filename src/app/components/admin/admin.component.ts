import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service.client";
import {BookService} from "../../services/book.service.client";
import {CommentService} from "../../services/comment.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service.client";
import {ArticleService} from "../../services/article.service.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser;
  users;
  selectedUser;
  nUsername;
  nPassword;

  books;
  selectedBook;
  nbTitle;

  articles;
  selectedArticle;
  naChapterName;

  comments;
  selectedComment;
  cText;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
               private bookService: BookService, private changeDetectorRef: ChangeDetectorRef,
               private commentService: CommentService, private articleService: ArticleService) { }

  ngOnInit() {
    this.currentUser = this.sharedService.user;
    this.userService.findAllUsers().subscribe(result => {
      this.users = result;
    });
    this.bookService.findAllBooks().subscribe(result => {
      this.books = result;
    });
    this.articleService.findAllArticles().subscribe(result => {
      this.articles = result;
    });
    this.commentService.findAllComments().subscribe(result => {
      this.comments = result;
    });
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  createUser() {
    if (this.nUsername && this.nPassword) {
      const newUser = {
        username: this.nUsername,
        password: this.nPassword,
      };
      this.userService.createUser(newUser).subscribe(r => {
        this.userService.findAllUsers().subscribe(result => {
          this.users = result;
        });
      });
    }
  }

  updateUser() {
    if (typeof this.selectedUser.bookshelf === 'string') {
      this.selectedUser.bookshelf = this.selectedUser.bookshelf.split(',');
    }
    if (typeof this.selectedUser.publishedBooks === 'string') {
      this.selectedUser.publishedBooks = this.selectedUser.publishedBooks.split(',');
    }
    this.userService.updateUser(this.selectedUser._id, this.selectedUser).subscribe(r => {
      this.userService.findAllUsers().subscribe(result => {
        this.users = result;
      });
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser._id).subscribe(r => {
      this.userService.findAllUsers().subscribe(result => {
        this.users = result;
        this.selectedUser = null;
      });
    });
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  createBook() {
    if (this.nbTitle) {
      const newBook = {
        title: this.nbTitle,
      };
      this.bookService.createBook(this.currentUser._id, newBook).subscribe(r => {
        this.bookService.findAllBooks().subscribe(result => {
          this.books = result;
        });
      });
    }
  }

  updateBook() {
    if (typeof this.selectedBook.articles === 'string') {
      this.selectedBook.articles = this.selectedBook.articles.split(',');
    }
    this.bookService.updateBook(this.selectedBook._id, this.selectedBook).subscribe(r => {
      this.bookService.findAllBooks().subscribe(result => {
        this.books = result;
      });
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.selectedBook._id).subscribe(r => {
      this.bookService.findAllBooks().subscribe(result => {
        this.books = result;
        this.selectedBook = null;
      });
    });
  }

  selectArticle(article) {
    this.selectedArticle = article;
  }

  createArticle() {
    if (this.naChapterName) {
      const newArticle = {
        chapterName: this.naChapterName,
      };
      this.articleService.createArticle(0, newArticle).subscribe(r => {
        this.articleService.findAllArticles().subscribe(result => {
          this.articles = result;
        });
      });
    }
  }

  updateArticle() {
    this.articleService.updateArticle(this.selectedArticle._id, this.selectedArticle).subscribe(r => {
      this.articleService.findAllArticles().subscribe(result => {
        this.articles = result;
        this.selectedArticle = null;
      });
    });
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.selectedArticle._id).subscribe(r => {
      this.articleService.findAllArticles().subscribe(result => {
        console.log(result);
        this.articles = result;
        this.selectedArticle = null;
      });
    });
  }

  selectComment(comment) {
    this.selectedComment = comment;
  }

  createComment() {
    if (this.cText) {
      const newComment = {
        text: this.cText,
      };
      this.commentService.createComment(newComment).subscribe(r => {
        this.commentService.findAllComments().subscribe(result => {
          this.comments = result;
        });
      });
    }
  }

  updateComment() {
    this.commentService.updateComment(this.selectedComment._id, this.selectedComment).subscribe(r => {
      this.commentService.findAllComments().subscribe(result => {
        this.comments = result;
        this.selectedComment = null;
      });
    });
  }

  deleteComment() {
    this.commentService.deleteComment(this.selectedComment._id).subscribe(r => {
      this.commentService.findAllComments().subscribe(result => {
        this.comments = result;
        this.selectedComment = null;
      });
    });
  }

}
