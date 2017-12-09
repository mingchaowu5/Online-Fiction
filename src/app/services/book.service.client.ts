import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {
  }

  createBook(userId, book) {
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/book', book)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findAllBooks() {
    return this.http.get(this.baseUrl + '/api/book')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findBooksForUser(userId) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/book')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findBookById(bookId) {
    return this.http.get(this.baseUrl + '/api/book/' + bookId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateBook(bookId, book) {
    return this.http.put(this.baseUrl + '/api/book/' + bookId, book)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteBook(bookId) {
    return this.http.delete(this.baseUrl + '/api/book/' + bookId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

}
