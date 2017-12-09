import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {
  }

  createComment(comment) {
    return this.http.post(this.baseUrl + '/api/create/comment', comment)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findAllComments() {
    return this.http.get(this.baseUrl + '/api/comment')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCommentsForBook(bookId) {
    return this.http.get(this.baseUrl + '/api/book/' + bookId + '/comment')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCommentById(commentId) {
    return this.http.get(this.baseUrl + '/api/comment/' + commentId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateComment(commentId, comment) {
    return this.http.put(this.baseUrl + '/api/comment/' + commentId, comment)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteComment(commentId) {
    return this.http.delete(this.baseUrl + '/api/comment/' + commentId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

}
