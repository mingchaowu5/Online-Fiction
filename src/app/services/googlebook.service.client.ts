import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookService {
  key = 'AIzaSyDUiYUv4ocRKQ89ACiLwywaUrvhwpk3W6I'
  searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=QUERY&maxResults=30';
  bookUrl = 'https://www.googleapis.com/books/v1/volumes/volumeId?volumeId=BOOK_ID';
  constructor(private http: Http) {

  }

  searchBooks(searchText) {
    const url = this.searchUrl.replace('CLIENT_ID', this.key).replace('QUERY', searchText);
    return this.http.get(url).map((res: Response) => {
      console.log(res);
      return res.json();
    });
  }

  getBook(bookId) {
    const url = this.bookUrl.replace('CLIENT_ID', this.key).replace('BOOK_ID', bookId);
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
}
