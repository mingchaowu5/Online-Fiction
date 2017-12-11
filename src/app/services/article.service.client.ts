import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {
  }

  createArticle(bookId, article) {
    return this.http.post(this.baseUrl + '/api/book/' + bookId + '/article', article)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findArticlesForBook(bookId) {
    return this.http.get(this.baseUrl + '/api/book/' + bookId + '/article')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findArticleById(articleId) {
    return this.http.get(this.baseUrl + '/api/article/' + articleId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findAllArticles() {
    return this.http.get(this.baseUrl + '/api/article')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateArticle(articleId, article) {
    return this.http.put(this.baseUrl + '/api/article/' + articleId, article)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteArticle(articleId) {
    return this.http.delete(this.baseUrl + '/api/article/' + articleId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

}
