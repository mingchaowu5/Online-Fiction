import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import {AuthenticationService} from './services/authentication.service.client';
import {UserService} from './services/user.service.client';
import {BookService} from './services/book.service.client';
import {ArticleService} from './services/article.service.client';
import {CommentService} from './services/comment.service.client';
import {SharedService} from './services/shared.service.client';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import { AllBookComponent } from './components/home/all-book/all-book.component';
import { PeopleComponent } from './components/home/people/people.component';
import { BookComponent } from './components/book/book.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultDetailComponent } from './components/search-result/search-result-detail/search-result-detail.component';
import { PublicComponent } from './components/user/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    AdminComponent,
    AllBookComponent,
    PeopleComponent,
    BookComponent,
    ArticleComponent,
    SearchResultComponent,
    SearchResultDetailComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
  ],
  providers: [AuthenticationService, UserService, BookService, ArticleService, CommentService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
