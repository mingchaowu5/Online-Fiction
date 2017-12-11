import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {SharedService} from "../../../services/shared.service.client";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../../services/book.service.client";
import {CommentService} from "../../../services/comment.service.client";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  currentUser;
  user;
  books;
  comments;
  constructor(private userService: UserService, private sharedService: SharedService,
               private asRoute: ActivatedRoute, private bookService: BookService,
               private changeDetectorRef: ChangeDetectorRef,
               private commentService: CommentService) { }

  ngOnInit() {
    this.currentUser = this.sharedService.user;
    this.asRoute.params.subscribe(params => {
      const userId = params['uid'];
      this.userService.findUserById(userId).subscribe(result => {
        this.user = result;
      });
      this.bookService.findBooksForUser(userId).subscribe(result => {
        this.books = result;
      });
      this.commentService.findCommentsForUser(userId).subscribe(result => {
        this.comments = result;
      });
    });
  }

  toggleFollow(user) {
    this.userService.toggleFollow(this.currentUser._id, user._id).subscribe(r => {
      console.log('toggle follow from server', r);
      this.userService.findUserById(this.user._id).subscribe(result => {
        this.user = result;
        this.userService.findUserById(this.currentUser._id).subscribe(cUser => {
          this.currentUser = cUser;
          this.sharedService.user = cUser;
          console.log('current user', cUser);
        });
      });
    });
  }

}
