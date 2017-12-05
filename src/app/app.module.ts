import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { BookNewComponent } from './components/book/book-new/book-new.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { ArticleNewComponent } from './components/article/article-new/article-new.component';
import { ArticleEditComponent } from './components/article/article-edit/article-edit.component';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    BookNewComponent,
    BookEditComponent,
    BookListComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    ArticleListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
