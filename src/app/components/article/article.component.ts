import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article;
  constructor(private articleService: ArticleService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      const articleId = params['aid'];
      this.articleService.findArticleById(articleId).subscribe(result => {
        this.article = result;
      });
    });
  }

}
