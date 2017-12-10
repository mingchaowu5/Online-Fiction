import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleComponent} from "../article/article.component";
import {ArticleService} from "../../services/article.service.client";
import {SharedService} from "../../services/shared.service.client";
import {BookService} from "../../services/book.service.client";
import {ActivatedRoute} from "@angular/router";
declare let $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  user;
  book;
  articles;
  naChapterNumber;
  naChapterName;
  naContent;

  currentEditArticle;
  constructor(private sharedService: SharedService, private articleService: ArticleService,
               private bookService: BookService, private acRoute: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.acRoute.params.subscribe(params => {
      const bookId = params['bid'];
      this.bookService.findBookById(bookId).subscribe(result => {
        this.book = result;
        console.log(this.book);
      });
      this.articleService.findArticlesForBook(bookId).subscribe(result => {
        this.articles = result;
      });
    });
  }

  createArticle() {
    const newArticle = {
      _book: this.book._id,
      chapterNumber: this.naChapterNumber,
      chapterName: this.naChapterName,
      content: this.naContent,
    };
    this.articleService.createArticle(this.book._id, newArticle).subscribe(r => {
      this.articleService.findArticlesForBook(this.book._id).subscribe(result => {
        $('#newArticleModel').modal('hide');
        this.articles = result;
      });
    });
  }

  editArticle(article) {
    this.currentEditArticle = article;
    this.changeDetectorRef.detectChanges();
    $('#editArticleModel').modal('show');
  }

  updateArticle() {
    this.articleService.updateArticle(this.currentEditArticle._id, this.currentEditArticle).subscribe(r => {
      this.articleService.findArticlesForBook(this.book._id).subscribe(result => {
        $('#editArticleModel').modal('hide');
        this.articles = result;
      });
    });
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.currentEditArticle._id).subscribe(r => {
      this.articleService.findArticlesForBook(this.book._id).subscribe(result => {
        $('#editArticleModel').modal('hide');
        this.articles = result;
      });
    });
  }

}
