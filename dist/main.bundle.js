webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_book_service_client__ = __webpack_require__("../../../../../src/app/services/book.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_article_service_client__ = __webpack_require__("../../../../../src/app/services/article.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_googlebook_service_client__ = __webpack_require__("../../../../../src/app/services/googlebook.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_all_book_all_book_component__ = __webpack_require__("../../../../../src/app/components/home/all-book/all-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_people_people_component__ = __webpack_require__("../../../../../src/app/components/home/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_book_book_component__ = __webpack_require__("../../../../../src/app/components/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_article_article_component__ = __webpack_require__("../../../../../src/app/components/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_search_result_search_result_component__ = __webpack_require__("../../../../../src/app/components/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_search_result_search_result_detail_search_result_detail_component__ = __webpack_require__("../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_user_public_public_component__ = __webpack_require__("../../../../../src/app/components/user/public/public.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_home_all_book_all_book_component__["a" /* AllBookComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_home_people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_search_result_search_result_component__["a" /* SearchResultComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_search_result_search_result_detail_search_result_detail_component__["a" /* SearchResultDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_user_public_public_component__["a" /* PublicComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* Routing */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_authentication_service_client__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_book_service_client__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_11__services_article_service_client__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_12__services_comment_service_client__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_13__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_14__services_googlebook_service_client__["a" /* GoogleBookService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_all_book_all_book_component__ = __webpack_require__("../../../../../src/app/components/home/all-book/all-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_people_people_component__ = __webpack_require__("../../../../../src/app/components/home/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_book_book_component__ = __webpack_require__("../../../../../src/app/components/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_article_article_component__ = __webpack_require__("../../../../../src/app/components/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_result_search_result_component__ = __webpack_require__("../../../../../src/app/components/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_result_search_result_detail_search_result_detail_component__ = __webpack_require__("../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_public_public_component__ = __webpack_require__("../../../../../src/app/components/user/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");













var APP_ROUTES = [
    // { path : '', component : HomeComponent},
    { path: 'allbook', component: __WEBPACK_IMPORTED_MODULE_5__components_home_all_book_all_book_component__["a" /* AllBookComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_6__components_home_people_people_component__["a" /* PeopleComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'book/:bid', component: __WEBPACK_IMPORTED_MODULE_7__components_book_book_component__["a" /* BookComponent */] },
    { path: 'article/:aid', component: __WEBPACK_IMPORTED_MODULE_8__components_article_article_component__["a" /* ArticleComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_11__components_user_public_public_component__["a" /* PublicComponent */] },
    { path: 'search-result/:term', component: __WEBPACK_IMPORTED_MODULE_9__components_search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: 'search-result/detail/:bid', component: __WEBPACK_IMPORTED_MODULE_10__components_search_result_search_result_detail_search_result_detail_component__["a" /* SearchResultDetailComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jy-max-width-700\" *ngIf=\"currentUser.role === 'admin'; else elseBlock\">\n\n  <h2>Administrator page</h2>\n\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"user-tab\" data-toggle=\"tab\" href=\"#userTab\">User</a>\n    </li>\n    <li class=\"nav-item\">\n      <a  class=\"nav-link\" id=\"book-tab\" data-toggle=\"tab\" href=\"#bookTab\">Book</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"article-tab\" data-toggle=\"tab\" href=\"#articleTab\">Article</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"comment-tab\" data-toggle=\"tab\" href=\"#commentTab\">Comment</a>\n    </li>\n  </ul>\n\n  <div class=\"tab-content\" id=\"myTabContent\">\n\n    <div class=\"tab-pane fade show active\" id=\"userTab\">\n      <ul class=\"list-inline\">\n        <li *ngFor=\"let user of users\" class=\"list-inline-item mr-1\">\n          <a class=\"text-primary h5\" (click)=\"selectUser(user)\">{{user.username}}</a>\n        </li>\n      </ul>\n      <form class=\"jy-form\" *ngIf=\"selectedUser\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)] = \"selectedUser.username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input type=\"text\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)] = \"selectedUser.password\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name:</label>\n          <input type=\"text\" class=\"form-control\" name=\"firstName\" id=\"firstName\" [(ngModel)] = \"selectedUser.firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name:</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\" [(ngModel)] = \"selectedUser.lastName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address:</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)] = \"selectedUser.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Phone number:</label>\n          <input type=\"number\" class=\"form-control\" name=\"phone\" id=\"phone\" [(ngModel)] = \"selectedUser.phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"likedBooks\">Liked books:</label>\n          <input type=\"text\" class=\"form-control\" name=\"likedBooks\" id=\"likedBooks\" [(ngModel)] = \"selectedUser.bookshelf\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"createdBooks\">Created books:</label>\n          <input type=\"text\" class=\"form-control\" name=\"createdBooks\" id=\"createdBooks\" [(ngModel)] = \"selectedUser.publishedBooks\">\n        </div>\n        <button (click)=\"updateUser()\" class=\"btn btn-primary btn-block\">Update User</button>\n        <button (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\">Delete User</button>\n      </form>\n      <form class=\"jy-form\">\n        <h3>Create new user</h3>\n        <div class=\"form-group\">\n          <label for=\"nUsername\">Username:</label>\n          <input name=\"nUsername\" id=\"nUsername\" placeholder=\"username\" type=\"text\" class=\"form-control\" [(ngModel)] = \"nUsername\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nPassword\">Password:</label>\n          <input name=\"nPassword\" id=\"nPassword\" placeholder=\"password\" type=\"password\" class=\"form-control\" [(ngModel)] = \"nPassword\"/>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"createUser()\">Create user</button>\n      </form>\n\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"bookTab\">\n      <ul class=\"list-inline\">\n        <li *ngFor=\"let book of books\" class=\"list-inline-item mr-2\">\n          <a class=\"text-primary h5\" (click)=\"selectBook(book)\">{{book.title}} |</a>\n        </li>\n      </ul>\n\n      <form class=\"jy-form\" *ngIf=\"selectedBook\">\n        <div class=\"form-group\">\n          <label for=\"ebTitle\">Title:</label>\n          <input type=\"text\" class=\"form-control\" name=\"ebTitle\" id=\"ebTitle\" [(ngModel)] = \"selectedBook.title\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ebDescription\">Description:</label>\n          <textarea rows=\"3\" class=\"form-control\" name=\"ebDescription\" id=\"ebDescription\" [(ngModel)] = \"selectedBook.description\"> </textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ebArticles\">Articles:</label>\n          <input type=\"text\" class=\"form-control\" name=\"ebArticles\" id=\"ebArticles\" [(ngModel)] = \"selectedBook.articles\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ebAuthor\">Author:</label>\n          <input type=\"text\" class=\"form-control\" name=\"ebAuthor\" id=\"ebAuthor\" [(ngModel)] = \"selectedBook._author\">\n        </div>\n        <button (click)=\"updateBook()\" class=\"btn btn-primary btn-block\">Update Book</button>\n        <button (click)=\"deleteBook()\" class=\"btn btn-danger btn-block\">Delete Book</button>\n      </form>\n\n      <form class=\"jy-form\">\n        <h3>Create new book</h3>\n        <div class=\"form-group\">\n          <label for=\"nbTitle\">Book Name:</label>\n          <input type=\"text\" class=\"form-control\" name=\"nbTitle\" id=\"nbTitle\" [(ngModel)] = \"nbTitle\" required>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"createBook()\">Create book</button>\n      </form>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"articleTab\">\n        <li *ngFor=\"let article of articles\" class=\"list-inline-item mr-2\">\n          <a class=\"text-primary h5\" (click)=\"selectArticle(article)\">{{article.chapterName}} |</a>\n        </li>\n\n      <form  *ngIf=\"selectedArticle\" class=\"jy-form\">\n        <div class=\"form-group\">\n          <label for=\"aCNumber\">Chapter Number: </label>\n          <input type=\"number\" class=\"form-control\" name=\"aCNumber\" id=\"aCNumber\" [(ngModel)] = \"selectedArticle.chapterNumber\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"aCName\">Chapter Name: </label>\n          <input type=\"text\" class=\"form-control\" name=\"aCName\" id=\"aCName\" [(ngModel)] = \"selectedArticle.chapterName\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"aContent\">Content:</label>\n          <textarea rows=\"5\" class=\"form-control\" name=\"aContent\" id=\"aContent\" [(ngModel)] = \"selectedArticle.content\"> </textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"aBook\">Book:</label>\n          <input type=\"text\" class=\"form-control\" name=\"aBook\" id=\"aBook\" [(ngModel)] = \"selectedArticle._book\">\n        </div>\n        <button (click)=\"updateArticle()\" class=\"btn btn-primary btn-block\">Update Article</button>\n        <button (click)=\"deleteArticle()\" class=\"btn btn-danger btn-block\">Delete Article</button>\n      </form>\n\n      <form class=\"jy-form\">\n        <h3>Create new article</h3>\n        <div class=\"form-group\">\n          <label for=\"naChapterName\">Chapter Name:</label>\n          <input type=\"text\" class=\"form-control\" name=\"naChapterName\" id=\"naChapterName\" [(ngModel)] = \"naChapterName\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"createArticle()\">Create article</button>\n      </form>\n\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"commentTab\">\n      <ul class=\"list-group\">\n        <li (click)=\"selectComment(comment)\" class=\"list-group-item\" *ngFor=\"let comment of comments\">{{comment.text}}</li>\n      </ul>\n\n      <form  *ngIf=\"selectedComment\" class=\"jy-form\">\n        <div class=\"form-group\">\n          <label for=\"cUser\">User: </label>\n          <input type=\"text\" class=\"form-control\" name=\"cUser\" id=\"cUser\" [(ngModel)] = \"selectedComment._user\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"cContent\">Content: </label>\n          <input type=\"text\" class=\"form-control\" name=\"cContent\" id=\"cContent\" [(ngModel)] = \"selectedComment.text\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"cBook\">Book: </label>\n          <input type=\"text\" class=\"form-control\" name=\"cBook\" id=\"cBook\" [(ngModel)] = \"selectedComment._book\">\n        </div>\n        <button (click)=\"updateComment()\" class=\"btn btn-primary btn-block\">Update Comment</button>\n        <button (click)=\"deleteComment()\" class=\"btn btn-danger btn-block\">Delete Comment</button>\n      </form>\n      <form class=\"jy-form\">\n        <h3>Create new comment</h3>\n        <div class=\"form-group\">\n          <label for=\"cText\">Content</label>\n          <input type=\"text\" class=\"form-control\" name=\"cText\" id=\"cText\" [(ngModel)] = \"cText\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"createComment()\">Create comment</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n\n<ng-template #elseBlock>\n  <h2>Unauthorized</h2>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service_client__ = __webpack_require__("../../../../../src/app/services/book.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_article_service_client__ = __webpack_require__("../../../../../src/app/services/article.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = (function () {
    function AdminComponent(userService, router, sharedService, bookService, changeDetectorRef, commentService, articleService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.bookService = bookService;
        this.changeDetectorRef = changeDetectorRef;
        this.commentService = commentService;
        this.articleService = articleService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.sharedService.user;
        this.userService.findAllUsers().subscribe(function (result) {
            _this.users = result;
        });
        this.bookService.findAllBooks().subscribe(function (result) {
            _this.books = result;
        });
        this.articleService.findAllArticles().subscribe(function (result) {
            _this.articles = result;
        });
        this.commentService.findAllComments().subscribe(function (result) {
            _this.comments = result;
        });
    };
    AdminComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    AdminComponent.prototype.createUser = function () {
        var _this = this;
        if (this.nUsername && this.nPassword) {
            var newUser = {
                username: this.nUsername,
                password: this.nPassword,
            };
            this.userService.createUser(newUser).subscribe(function (r) {
                _this.userService.findAllUsers().subscribe(function (result) {
                    _this.users = result;
                });
            });
        }
    };
    AdminComponent.prototype.updateUser = function () {
        var _this = this;
        if (typeof this.selectedUser.bookshelf === 'string') {
            this.selectedUser.bookshelf = this.selectedUser.bookshelf.split(',');
        }
        if (typeof this.selectedUser.publishedBooks === 'string') {
            this.selectedUser.publishedBooks = this.selectedUser.publishedBooks.split(',');
        }
        this.userService.updateUser(this.selectedUser._id, this.selectedUser).subscribe(function (r) {
            _this.userService.findAllUsers().subscribe(function (result) {
                _this.users = result;
            });
        });
    };
    AdminComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.selectedUser._id).subscribe(function (r) {
            _this.userService.findAllUsers().subscribe(function (result) {
                _this.users = result;
                _this.selectedUser = null;
            });
        });
    };
    AdminComponent.prototype.selectBook = function (book) {
        this.selectedBook = book;
    };
    AdminComponent.prototype.createBook = function () {
        var _this = this;
        if (this.nbTitle) {
            var newBook = {
                title: this.nbTitle,
            };
            this.bookService.createBook(this.currentUser._id, newBook).subscribe(function (r) {
                _this.bookService.findAllBooks().subscribe(function (result) {
                    _this.books = result;
                });
            });
        }
    };
    AdminComponent.prototype.updateBook = function () {
        var _this = this;
        if (typeof this.selectedBook.articles === 'string') {
            this.selectedBook.articles = this.selectedBook.articles.split(',');
        }
        this.bookService.updateBook(this.selectedBook._id, this.selectedBook).subscribe(function (r) {
            _this.bookService.findAllBooks().subscribe(function (result) {
                _this.books = result;
            });
        });
    };
    AdminComponent.prototype.deleteBook = function () {
        var _this = this;
        this.bookService.deleteBook(this.selectedBook._id).subscribe(function (r) {
            _this.bookService.findAllBooks().subscribe(function (result) {
                _this.books = result;
                _this.selectedBook = null;
            });
        });
    };
    AdminComponent.prototype.selectArticle = function (article) {
        this.selectedArticle = article;
    };
    AdminComponent.prototype.createArticle = function () {
        var _this = this;
        if (this.naChapterName) {
            var newArticle = {
                chapterName: this.naChapterName,
            };
            this.articleService.createArticle(0, newArticle).subscribe(function (r) {
                _this.articleService.findAllArticles().subscribe(function (result) {
                    _this.articles = result;
                });
            });
        }
    };
    AdminComponent.prototype.updateArticle = function () {
        var _this = this;
        this.articleService.updateArticle(this.selectedArticle._id, this.selectedArticle).subscribe(function (r) {
            _this.articleService.findAllArticles().subscribe(function (result) {
                _this.articles = result;
                _this.selectedArticle = null;
            });
        });
    };
    AdminComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.articleService.deleteArticle(this.selectedArticle._id).subscribe(function (r) {
            _this.articleService.findAllArticles().subscribe(function (result) {
                console.log(result);
                _this.articles = result;
                _this.selectedArticle = null;
            });
        });
    };
    AdminComponent.prototype.selectComment = function (comment) {
        this.selectedComment = comment;
    };
    AdminComponent.prototype.createComment = function () {
        var _this = this;
        if (this.cText) {
            var newComment = {
                text: this.cText,
            };
            this.commentService.createComment(newComment).subscribe(function (r) {
                _this.commentService.findAllComments().subscribe(function (result) {
                    _this.comments = result;
                });
            });
        }
    };
    AdminComponent.prototype.updateComment = function () {
        var _this = this;
        this.commentService.updateComment(this.selectedComment._id, this.selectedComment).subscribe(function (r) {
            _this.commentService.findAllComments().subscribe(function (result) {
                _this.comments = result;
                _this.selectedComment = null;
            });
        });
    };
    AdminComponent.prototype.deleteComment = function () {
        var _this = this;
        this.commentService.deleteComment(this.selectedComment._id).subscribe(function (r) {
            _this.commentService.findAllComments().subscribe(function (result) {
                _this.comments = result;
                _this.selectedComment = null;
            });
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service_client__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service_client__["a" /* BookService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_comment_service_client__["a" /* CommentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_article_service_client__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_article_service_client__["a" /* ArticleService */]) === "function" && _g || Object])
], AdminComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jy-max-width-700\">\n  <div class=\"row\">\n    <div class=\"col text-center\" *ngIf=\"article\">\n      <h2>{{'Chapter ' + article.chapterNumber + ': ' + article.chapterName}}</h2>\n      <p>{{article.content}}</p>\n      <a class=\"btn btn-primary\" routerLink=\"/book/{{article._book}}\">Back</a>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service_client__ = __webpack_require__("../../../../../src/app/services/article.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = (function () {
    function ArticleComponent(articleService, acRoute) {
        this.articleService = articleService;
        this.acRoute = acRoute;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            var articleId = params['aid'];
            _this.articleService.findArticleById(articleId).subscribe(function (result) {
                _this.article = result;
            });
        });
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/components/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service_client__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service_client__["a" /* ArticleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ArticleComponent);

var _a, _b;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jy-max-width-700\">\n  <div class=\"row\" *ngIf=\"book\">\n    <div class=\"col text-center\">\n      <h2>{{book.title}}</h2>\n      <h6 class=\"text-muted\">{{book._author.firstName}}</h6>\n      <p>{{book.description}}</p>\n    </div>\n  </div>\n  <div *ngIf=\"user && book\" class=\"my-2 text-center\">\n    <div *ngIf=\"user.bookshelf.indexOf(book._id) === -1; else elseBlock\">\n      <button class=\"btn btn-primary mr-2\" (click)=\"toggleLikeBook(book)\">Like</button>\n    </div>\n    <ng-template #elseBlock>\n      <button class=\"btn btn-danger mr-2\" (click)=\"toggleLikeBook(book)\" >Unlike</button>\n    </ng-template>\n  </div>\n\n  <button class=\"btn btn-primary btn-block my-2 mx-auto\" *ngIf=\"user && book && book._author._id === user._id\"\n          data-toggle=\"modal\" data-target=\"#newArticleModel\">Create new chapter</button>\n\n  <li *ngFor=\"let article of articles\" class=\"list-group-item\">\n    <div class=\"row\">\n      <div class=\"col-9\">\n        <p>\n          <a routerLink=\"/article/{{article._id}}\">{{'Chapter ' + article.chapterNumber + ': ' + article.chapterName}}</a>\n        </p>\n      </div>\n      <div class=\"col-3\">\n        <a (click)=\"editArticle(article)\" class=\"pull-right\" *ngIf=\"user && book && book._author._id === user._id\">\n          <span class=\"fa fa-cog\"></span>\n        </a>\n      </div>\n    </div>\n  </li>\n\n  <div class=\"row mx-auto\">\n    <div class=\"col\">\n      <hr>\n      <h3>Comments</h3>\n\n      <div class=\"row\" *ngFor=\"let cmt of comments\">\n        <div class=\"col\">\n          <a routerLink=\"/user/{{cmt._user._id}}\"><strong>{{cmt._user.firstName}}</strong></a>\n          <p>{{cmt.text}}</p>\n        </div>\n      </div>\n\n      <form *ngIf=\"user && user.role === 'editor'\" class=\"mb-4\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Comment\" [(ngModel)]=\"bookComment\" name=\"comment\">\n        <button (click)=\"createComment()\" type=\"button\" class=\"btn btn-primary btn-block\">Leave a comment</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"modal fade\" id=\"newArticleModel\" tabindex=\"-1\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create new chapter</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"naChapterNumber\">Chapter number:</label>\n            <input type=\"number\" class=\"form-control\" name=\"naChapterNumber\" id=\"naChapterNumber\" [(ngModel)] = \"naChapterNumber\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"naChapterName\">Chapter name:</label>\n            <input type=\"text\" class=\"form-control\" name=\"naChapterName\" id=\"naChapterName\" [(ngModel)] = \"naChapterName\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"naContent\">Content:</label>\n            <textarea rows=\"8\" class=\"form-control\" name=\"naContent\" id=\"naContent\" [(ngModel)] = \"naContent\"> </textarea>\n          </div>\n          <div *ngIf=\"!naChapterNumber || !naChapterName\" class=\"alert alert-danger\">\n            Chapter number and name are required\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\"  class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"createArticle()\" [disabled]=\"!naChapterNumber || !naChapterName\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editArticleModel\" tabindex=\"-1\" *ngIf=\"currentEditArticle\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"chapterNumber\">Chapter number:</label>\n            <input type=\"number\" class=\"form-control\" name=\"chapterNumber\" id=\"chapterNumber\" [(ngModel)] = \"currentEditArticle.chapterNumber\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"chapterName\">Chapter name:</label>\n            <input type=\"text\" class=\"form-control\" name=\"naChapterName\" id=\"chapterName\" [(ngModel)] = \"currentEditArticle.chapterName\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"content\">Content:</label>\n            <textarea rows=\"8\" class=\"form-control\" name=\"naContent\" id=\"content\" [(ngModel)] = \"currentEditArticle.content\"> </textarea>\n          </div>\n          <div *ngIf=\"!currentEditArticle.chapterNumber || !currentEditArticle.chapterName\" class=\"alert alert-danger\">\n            Chapter number and name are required\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\"  class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteArticle()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"updateArticle()\"\n                [disabled]=\"!currentEditArticle.chapterNumber || !currentEditArticle.chapterName\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service_client__ = __webpack_require__("../../../../../src/app/services/article.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service_client__ = __webpack_require__("../../../../../src/app/services/book.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookComponent = (function () {
    function BookComponent(sharedService, articleService, userService, bookService, acRoute, changeDetectorRef, commentService) {
        this.sharedService = sharedService;
        this.articleService = articleService;
        this.userService = userService;
        this.bookService = bookService;
        this.acRoute = acRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.commentService = commentService;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.acRoute.params.subscribe(function (params) {
            var bookId = params['bid'];
            _this.bookService.findBookById(bookId).subscribe(function (result) {
                _this.book = result;
                console.log(_this.book);
            });
            _this.articleService.findArticlesForBook(bookId).subscribe(function (result) {
                _this.articles = result;
            });
            _this.commentService.findCommentsForBook(bookId).subscribe(function (result) {
                _this.comments = result;
            });
        });
    };
    BookComponent.prototype.toggleLikeBook = function (book) {
        var _this = this;
        this.userService.toggleLikeBook(this.user._id, this.book._id).subscribe(function (result) {
            _this.user = result;
            console.log(_this.user);
        });
    };
    BookComponent.prototype.createArticle = function () {
        var _this = this;
        var newArticle = {
            _book: this.book._id,
            chapterNumber: this.naChapterNumber,
            chapterName: this.naChapterName,
            content: this.naContent,
        };
        this.articleService.createArticle(this.book._id, newArticle).subscribe(function (r) {
            _this.articleService.findArticlesForBook(_this.book._id).subscribe(function (result) {
                $('#newArticleModel').modal('hide');
                _this.articles = result;
            });
        });
    };
    BookComponent.prototype.editArticle = function (article) {
        this.currentEditArticle = article;
        this.changeDetectorRef.detectChanges();
        $('#editArticleModel').modal('show');
    };
    BookComponent.prototype.updateArticle = function () {
        var _this = this;
        this.articleService.updateArticle(this.currentEditArticle._id, this.currentEditArticle).subscribe(function (r) {
            _this.articleService.findArticlesForBook(_this.book._id).subscribe(function (result) {
                $('#editArticleModel').modal('hide');
                _this.articles = result;
            });
        });
    };
    BookComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.articleService.deleteArticle(this.currentEditArticle._id).subscribe(function (r) {
            _this.articleService.findArticlesForBook(_this.book._id).subscribe(function (result) {
                $('#editArticleModel').modal('hide');
                _this.articles = result;
            });
        });
    };
    BookComponent.prototype.createComment = function () {
        var _this = this;
        if (this.bookComment) {
            var newComment = {
                text: this.bookComment,
                _user: this.user._id,
                _book: this.book._id,
            };
            this.commentService.createComment(newComment).subscribe(function (r) {
                _this.commentService.findCommentsForBook(_this.book._id).subscribe(function (result) {
                    _this.comments = result;
                });
            });
        }
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        template: __webpack_require__("../../../../../src/app/components/book/book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book/book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service_client__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service_client__["a" /* ArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service_client__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service_client__["a" /* BookService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_comment_service_client__["a" /* CommentService */]) === "function" && _g || Object])
], BookComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/all-book/all-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/all-book/all-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let book of books; index as i\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <a routerLink=\"/book/{{book._id}}\"><h4 class=\"card-title\">{{book.title}}</h4></a>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{book.articles.length + ' Chapters'}}</h6>\n          <p class=\"card-text\">{{book.description}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/all-book/all-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service_client__ = __webpack_require__("../../../../../src/app/services/book.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllBookComponent = (function () {
    function AllBookComponent(router, sharedService, bookService) {
        this.router = router;
        this.sharedService = sharedService;
        this.bookService = bookService;
    }
    AllBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.findAllBooks().subscribe(function (result) {
            _this.books = result;
        });
    };
    return AllBookComponent;
}());
AllBookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-book',
        template: __webpack_require__("../../../../../src/app/components/home/all-book/all-book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/all-book/all-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service_client__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service_client__["a" /* BookService */]) === "function" && _c || Object])
], AllBookComponent);

var _a, _b, _c;
//# sourceMappingURL=all-book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jy-below-nav {\r\n  margin-top: 70px;\r\n}\r\n\r\n.bg-img {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/pictures/book_background.jpg") + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light fixed-top bg-light trans\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul class=\"navbar-nav \">\n      <li class=\"nav-item\" [ngClass]=\"{'active': currentPath === '/allbook'}\">\n        <a class=\"nav-link\" routerLink=\"/allbook\">All books</a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{'active': currentPath === '/people'}\">\n        <a class=\"nav-link\" routerLink=\"/people\">All people</a>\n      </li>\n    </ul>\n    <form class=\"form-inline mr-auto ml-auto\" (submit)=\"searchBook()\">\n      <input class=\"form-control mr-sm-2 mb-0\" type=\"text\" placeholder=\"Search book\" [(ngModel)]=\"searchText\" name=\"search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n\n    <ul class=\"navbar-nav\">\n      <li class=\"mr-1\"><a routerLink=\"/register\" class=\"nav-link\"><i class=\"fa fa-user\"></i> Register</a></li>\n      <li><a routerLink=\"/profile\" class=\"nav-link\"><i class=\"fa fa-sign-in\"></i>  Login</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"jumbotron jumbotron-fluid bg-img\" *ngIf=\"currentPath === '/'\">\n  <div class=\"container text-center\">\n    <h1 class=\"text-center text-white mt-4\">Write and read books</h1>\n  </div>\n</div>\n\n\n<div class=\"jy-below-nav\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.sharedService.user;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                _this.currentPath = event.url;
            }
        });
    };
    HomeComponent.prototype.searchBook = function () {
        if (this.searchText) {
            this.router.navigate(['search-result', this.searchText]);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let user of users\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <a routerLink=\"/user/{{user._id}}\"><h4 class=\"card-title\">{{user.firstName}}</h4></a>\n          <p class=\"card-text\">{{'Role: ' + user.role}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = (function () {
    function PeopleComponent(userService) {
        this.userService = userService;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findAllUsers().subscribe(function (result) {
            _this.users = result;
        });
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/components/home/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/people/people.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  body{ text-align:center}\r\n  #div50{ margin:auto;max-width :75%}\r\n\r\n</style>\r\n<body>\r\n<div >\r\n  <div *ngIf=\"book\">\r\n\r\n    <!--<img class=\"img-fluid\" [src]=\"book.urls.full\">-->\r\n    <h3>{{book.volumeInfo.title}}</h3>\r\n    <h6>{{book.volumeInfo.authors}}</h6>\r\n    <img class=\"img-fluid\" [src]=\"book.volumeInfo.imageLinks.smallThumbnail\">\r\n    <p id=\"div50\">{{book.volumeInfo.description}}</p>\r\n\r\n  </div>\r\n  <div class=\"div\"  *ngIf=\"book\">\r\n    <div class=\"col-6\">\r\n      <!--<h6>Author: {{book.volumeInfo.authors}}</h6>-->\r\n      <!--<img class=\"img-fluid\" [src]=\"book.volumeInfo.imageLinks.smallThumbnail\">-->\r\n      <!--<p>{{book.volumeInfo.description}}</p>-->\r\n\r\n\r\n    </div>\r\n    <div class=\"col-6\" >\r\n      <!--<p class=\"lead\"><strong>Likes:</strong> {{book.likes}}    <strong>  Views:</strong> {{book.views}}</p>-->\r\n      <hr>\r\n\r\n\r\n    </div>\r\n    <div class=\"col\">\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_googlebook_service_client__ = __webpack_require__("../../../../../src/app/services/googlebook.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-search-result-detail',
//   templateUrl: './search-result-detail.component.html',
//   styleUrls: ['./search-result-detail.component.css']
// })
// export class SearchResultDetailComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultDetailComponent = (function () {
    function SearchResultDetailComponent(googlebookService, acRoute, sharedService) {
        this.googlebookService = googlebookService;
        this.acRoute = acRoute;
        this.sharedService = sharedService;
    }
    SearchResultDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.acRoute.params.subscribe(function (params) {
            _this.bookId = params['bid'];
            _this.googlebookService.getBook(_this.bookId).subscribe(function (data) {
                _this.book = data;
                console.log(_this.book);
            });
        });
    };
    return SearchResultDetailComponent;
}());
SearchResultDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-result-detail',
        template: __webpack_require__("../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-result/search-result-detail/search-result-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_googlebook_service_client__["a" /* GoogleBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_googlebook_service_client__["a" /* GoogleBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], SearchResultDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=search-result-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-result/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h4>Books from <a href=\"https://google.com/\">GoogleBook</a></h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngFor = \"let book of books\" class=\"col-12 col-sm-6 col-md-4\">\r\n      <a routerLink=\"/search-result/detail/{{book.id}}\">\r\n        <!--<img class=\"img-fluid\" [src] = \"pic.urls.small\"/>-->\r\n        <p>{{book.volumeInfo.title}}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_googlebook_service_client__ = __webpack_require__("../../../../../src/app/services/googlebook.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultComponent = (function () {
    function SearchResultComponent(googlebookService, sharedService, acRoute) {
        this.googlebookService = googlebookService;
        this.sharedService = sharedService;
        this.acRoute = acRoute;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            var searchText = params['term'];
            console.log(searchText);
            _this.googlebookService.searchBooks(searchText).subscribe(function (data) {
                console.log(data);
                _this.books = data.items;
                console.log(_this.books);
            });
        });
    };
    return SearchResultComponent;
}());
SearchResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-result',
        template: __webpack_require__("../../../../../src/app/components/search-result/search-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-result/search-result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_googlebook_service_client__["a" /* GoogleBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_googlebook_service_client__["a" /* GoogleBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SearchResultComponent);

var _a, _b, _c;
//# sourceMappingURL=search-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jy-max-width-700\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" required/>\n    <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" required/>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            console.log(user);
            _this.sharedService.user = user;
            _this.router.navigate(['profile']);
        }, function (err) {
            console.log(err);
            if (err === 'Unauthorized') {
                _this.errorFlag = true;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book-edit {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 8px;\r\n  margin-right: 20px;\r\n  display: none;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.jy-book:hover .book-edit {\r\n  display : block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>{{user.firstName + ' ' + user.lastName}}</h3>\n      <h5>{{'Role: ' + user.role}}</h5>\n      <a *ngIf=\"user.role === 'admin'\" class=\"btn btn-primary\" routerLink=\"/admin\">Admin page</a>\n\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"about-tab\" data-toggle=\"tab\" href=\"#about\">About</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"user.role === 'writer'\">\n          <a class=\"nav-link\" id=\"book-tab\" data-toggle=\"tab\" href=\"#myBook\">My books</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"user.role === 'editor'\">\n          <a  class=\"nav-link\" id=\"comment-tab\" data-toggle=\"tab\" href=\"#myComment\">My comments</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"book-like-tab\" data-toggle=\"tab\" href=\"#likedBook\">Liked books</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"following-tab\" data-toggle=\"tab\" href=\"#following\">Following</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"user.role === 'editor' || user.role === 'writer'\">\n          <a class=\"nav-link\" id=\"follower-tab\" data-toggle=\"tab\" href=\"#follower\">Followers</a>\n        </li>\n      </ul>\n\n      <div class=\"tab-content\" id=\"myTabContent\">\n\n        <div class=\"tab-pane fade show active\" id=\"about\">\n          <form class=\"jy-max-width-700 mx-auto\" *ngIf=\"user\">\n            <div class=\"form-group\">\n              <label for=\"firstName\">First Name:</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstName\" id=\"firstName\" [(ngModel)] = \"user.firstName\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lastName\">Last Name:</label>\n              <input type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\" [(ngModel)] = \"user.lastName\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Email address:</label>\n              <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)] = \"user.email\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"phone\">Phone number:</label>\n              <input type=\"number\" class=\"form-control\" name=\"phone\" id=\"phone\" [(ngModel)] = \"user.phone\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"role\">Role</label>\n              <select class=\"form-control\" id=\"role\" name=\"role\" [(ngModel)] = \"user.role\">\n                <option *ngFor=\"let r of role\" [value]=\"r\">{{r}}</option>\n              </select>\n            </div>\n            <div *ngIf=\"updateMessageFlag\" class=\"alert alert-success\" role=\"alert\">\n              {{updateMessage}}\n            </div>\n            <button (click)=\"updateUser()\" class=\"btn btn-primary btn-block\">Save</button>\n            <button (click)=\"logOut()\" class=\"btn btn-danger btn-block\">Log out</button>\n          </form>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"myBook\">\n          <button class=\"btn btn-primary btn-block my-2 mx-auto jy-max-width-700\" data-toggle=\"modal\" data-target=\"#newBookModel\">Create book</button>\n          <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let book of books; index as i\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <a routerLink=\"/book/{{book._id}}\"><h4 class=\"card-title\">{{book.title}}</h4></a>\n                  <h6 class=\"card-subtitle mb-2 text-muted\">{{book.articles.length + ' Chapters'}}</h6>\n                  <p class=\"card-text\">{{book.description}}</p>\n                </div>\n              </div>\n              <div class=\"book-edit\">\n                <a (click)=\"editBook(book)\"><i class=\"fa fa-cog\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"myComment\">\n          <div class=\"row my-2\" >\n            <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let cmt of comments; index as i\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <a routerLink=\"/book/{{cmt._book._id}}\"><h4 class=\"card-title\">{{cmt._book.title}}</h4></a>\n                  <p class=\"card-text\">{{cmt.text}}</p>\n                </div>\n              </div>\n              <div class=\"book-edit\">\n                <a (click)=\"editComment(cmt)\"><i class=\"fa fa-cog\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"likedBook\">\n          <div class=\"row my-2\">\n            <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let book of likedBooks\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <a routerLink=\"/book/{{book._id}}\"><h4 class=\"card-title\">{{book.title}}</h4></a>\n                  <h6 class=\"card-subtitle mb-2 text-muted\">{{book.articles.length + ' Chapters'}}</h6>\n                  <p class=\"card-text\">{{book.description}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"following\">\n          <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let user of followings\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <a routerLink=\"/user/{{user._id}}\"><h4 class=\"card-title\">{{user.firstName}}</h4></a>\n                  <p class=\"card-text\">{{'Role: ' + user.role}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"follower\">\n          <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-lg-4 mb-4 jy-book\" *ngFor=\"let user of followers\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <a routerLink=\"/user/{{user._id}}\"><h4 class=\"card-title\">{{user.firstName}}</h4></a>\n                  <p class=\"card-text\">{{'Role: ' + user.role}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"newBookModel\" tabindex=\"-1\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create new book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"nbTitle\">Title:</label>\n            <input type=\"text\" class=\"form-control\" name=\"nbTitle\" id=\"nbTitle\" [(ngModel)] = \"nbTitle\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nbDescription\">Description:</label>\n            <textarea rows=\"3\" class=\"form-control\" name=\"nbDescription\" id=\"nbDescription\" [(ngModel)] = \"nbDescription\"> </textarea>\n          </div>\n          <div *ngIf=\"!nbTitle\" class=\"alert alert-danger\">\n            Book title is required\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\"  class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"createBook()\" [disabled]=\"!nbTitle\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editBookModel\" tabindex=\"-1\" *ngIf=\"currentEditBook\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form #eaF=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"ebTitle\">Title:</label>\n            <input type=\"text\" class=\"form-control\" name=\"ebTitle\" id=\"ebTitle\" [(ngModel)] = \"currentEditBook.title\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"ebDescription\">Description:</label>\n            <textarea rows=\"3\" class=\"form-control\" name=\"ebDescription\" id=\"ebDescription\" [(ngModel)] = \"currentEditBook.description\"> </textarea>\n          </div>\n          <div *ngIf=\"!currentEditBook.title\" class=\"alert alert-danger\">\n            Book title is required\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\"  class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteBook()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"updateBook()\" [disabled]=\"!currentEditBook.title\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editCommentModel\" tabindex=\"-1\" *ngIf=\"currentEditComment\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit comment</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form #eaF=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"ecText\">Content:</label>\n            <input type=\"text\" class=\"form-control\" name=\"ecText\" id=\"ecText\" [(ngModel)] = \"currentEditComment.text\" required>\n          </div>\n          <div *ngIf=\"!currentEditComment.text\" class=\"alert alert-danger\">\n            Comment cannot be empty\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\"  class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteComment()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"updateComment()\" [disabled]=\"!currentEditComment.text\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_book_service_client__ = __webpack_require__("../../../../../src/app/services/book.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(userService, router, sharedService, bookService, changeDetectorRef, commentService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.bookService = bookService;
        this.changeDetectorRef = changeDetectorRef;
        this.commentService = commentService;
        this.role = ['admin', 'reader', 'writer', 'editor'];
        this.updateMessageFlag = false;
        this.updateMessage = 'Successfully updated';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.bookService.findBooksForUser(this.user._id).subscribe(function (result) {
            _this.books = result;
        });
        this.bookService.findLikedBooksForUser(this.user._id).subscribe(function (result) {
            _this.likedBooks = result;
            console.log('liked book', result);
        });
        this.commentService.findCommentsForUser(this.user._id).subscribe(function (result) {
            _this.comments = result;
            console.log('comment of user', result);
        });
        this.userService.findFollowingUsers(this.user._id).subscribe(function (result) {
            _this.followings = result;
        });
        this.userService.findFollowedUsers(this.user._id).subscribe(function (result) {
            _this.followers = result;
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        // console.log('update user');
        // console.log(this.user);
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (user) {
            _this.user = user;
            _this.sharedService.user = user;
            _this.updateMessageFlag = true;
        });
    };
    ProfileComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout().subscribe(function (result) {
            _this.router.navigate(['/']);
        });
    };
    ProfileComponent.prototype.createBook = function () {
        var _this = this;
        var newBook = {
            title: this.nbTitle,
            description: this.nbDescription,
            _author: this.user._id
        };
        this.bookService.createBook(this.user._id, newBook).subscribe(function (r) {
            _this.bookService.findBooksForUser(_this.user._id).subscribe(function (result) {
                $('#newBookModel').modal('hide');
                _this.books = result;
            });
        });
    };
    ProfileComponent.prototype.editBook = function (book) {
        this.currentEditBook = book;
        this.changeDetectorRef.detectChanges();
        $('#editBookModel').modal('show');
    };
    ProfileComponent.prototype.updateBook = function () {
        var _this = this;
        this.bookService.updateBook(this.currentEditBook._id, this.currentEditBook).subscribe(function (r) {
            _this.bookService.findBooksForUser(_this.user._id).subscribe(function (result) {
                $('#editBookModel').modal('hide');
                _this.books = result;
            });
        });
    };
    ProfileComponent.prototype.deleteBook = function () {
        var _this = this;
        this.bookService.deleteBook(this.currentEditBook._id).subscribe(function (r) {
            _this.bookService.findBooksForUser(_this.user._id).subscribe(function (result) {
                $('#editBookModel').modal('hide');
                _this.books = result;
            });
        });
    };
    ProfileComponent.prototype.editComment = function (cmt) {
        this.currentEditComment = cmt;
        this.changeDetectorRef.detectChanges();
        $('#editCommentModel').modal('show');
    };
    ProfileComponent.prototype.deleteComment = function () {
        var _this = this;
        this.commentService.deleteComment(this.currentEditComment._id).subscribe(function (r) {
            _this.commentService.findCommentsForUser(_this.user._id).subscribe(function (result) {
                _this.comments = result;
                $('#editCommentModel').modal('hide');
            });
        });
    };
    ProfileComponent.prototype.updateComment = function () {
        var _this = this;
        this.commentService.updateComment(this.currentEditComment._id, this.currentEditComment).subscribe(function (r) {
            _this.commentService.findCommentsForUser(_this.user._id).subscribe(function (result) {
                _this.comments = result;
                $('#editCommentModel').modal('hide');
            });
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_book_service_client__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_book_service_client__["a" /* BookService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/public/public.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jy-max-width-700\">\n  <div class=\"row\" *ngIf=\"user\">\n    <div class=\"col\">\n      <h3>{{user.firstName + ' ' + user.lastName}}</h3>\n      <h5>{{'Role: ' + user.role}}</h5>\n\n      <div *ngIf=\"currentUser && (user.role === 'writer' || user.role === 'editor') && user._id !== currentUser._id\">\n        <div *ngIf=\"user.followedBy.indexOf(currentUser._id) === -1; then thenBlock else elseBlock\"></div>\n        <ng-template #thenBlock>\n          <button (click)=\"toggleFollow(user)\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i>  Follow</button>\n        </ng-template>\n        <ng-template #elseBlock>\n          <button (click)=\"toggleFollow(user)\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-minus\"></i>  Unfollow</button>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"user.role === 'writer'\">\n        <h4>Books</h4>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-6 mb-4\" *ngFor=\"let book of books; index as i\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <a routerLink=\"/book/{{book._id}}\"><h4 class=\"card-title\">{{book.title}}</h4></a>\n                <h6 class=\"card-subtitle mb-2 text-muted\">{{book.articles.length + ' Chapters'}}</h6>\n                <p class=\"card-text\">{{book.description}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"user.role === 'editor'\">\n        <h4>Comments</h4>\n        <div class=\"row my-2\" >\n          <div class=\"col-12 col-md-6\" *ngFor=\"let cmt of comments\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <a routerLink=\"/book/{{cmt._book._id}}\"><h4 class=\"card-title\">{{cmt._book.title}}</h4></a>\n                <p class=\"card-text\">{{cmt.text}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_book_service_client__ = __webpack_require__("../../../../../src/app/services/book.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PublicComponent = (function () {
    function PublicComponent(userService, sharedService, asRoute, bookService, changeDetectorRef, commentService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.asRoute = asRoute;
        this.bookService = bookService;
        this.changeDetectorRef = changeDetectorRef;
        this.commentService = commentService;
    }
    PublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.sharedService.user;
        this.asRoute.params.subscribe(function (params) {
            var userId = params['uid'];
            _this.userService.findUserById(userId).subscribe(function (result) {
                _this.user = result;
            });
            _this.bookService.findBooksForUser(userId).subscribe(function (result) {
                _this.books = result;
            });
            _this.commentService.findCommentsForUser(userId).subscribe(function (result) {
                _this.comments = result;
            });
        });
    };
    PublicComponent.prototype.toggleFollow = function (user) {
        var _this = this;
        this.userService.toggleFollow(this.currentUser._id, user._id).subscribe(function (r) {
            console.log('toggle follow from server', r);
            _this.userService.findUserById(_this.user._id).subscribe(function (result) {
                _this.user = result;
                _this.userService.findUserById(_this.currentUser._id).subscribe(function (cUser) {
                    _this.currentUser = cUser;
                    _this.sharedService.user = cUser;
                    console.log('current user', cUser);
                });
            });
        });
    };
    return PublicComponent;
}());
PublicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public',
        template: __webpack_require__("../../../../../src/app/components/user/public/public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/public/public.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_book_service_client__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_book_service_client__["a" /* BookService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */]) === "function" && _f || Object])
], PublicComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jy-max-width-700\">\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input name=\"username\" placeholder=\"username\" type=\"text\" class=\"form-control\"\n           required [(ngModel)] = \"username\"/>\n    <input name=\"password1\" placeholder=\"password\" type=\"password\" class=\"form-control\"\n           required [(ngModel)] = \"password1\"/>\n    <input name=\"password2\" placeholder=\"verify password\" type=\"password\" class=\"form-control\"\n           required [(ngModel)] = \"password2\"/>\n    <div class=\"form-group\">\n      <label for=\"role\">Role</label>\n      <select class=\"form-control\" id=\"role\" name=\"role\" [(ngModel)] = \"userRole\">\n        <option *ngFor=\"let r of role\" [value]=\"r\">{{r}}</option>\n      </select>\n    </div>\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\n    <a class=\"btn btn-danger btn-block\" routerLink=\"/login\" >Cancel</a>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Password does not match';
        this.role = ['admin', 'reader', 'writer', 'editor'];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.password1 === this.password2) {
            this.userService.findUserByUsername(this.username).subscribe(function (data) {
                if (data) {
                    _this.errorMsg = 'Username already taken';
                    _this.errorFlag = true;
                }
                else {
                    _this.errorFlag = false;
                    var user = {
                        username: _this.username,
                        password: _this.password1,
                        role: _this.userRole
                    };
                    _this.userService.register(user)
                        .subscribe(function (newUser) {
                        _this.sharedService.user = newUser;
                        _this.router.navigate(['profile']);
                    });
                }
            });
        }
        else {
            this.errorMsg = 'Password does not match';
            this.errorFlag = true;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/article.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleService = (function () {
    function ArticleService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    ArticleService.prototype.createArticle = function (bookId, article) {
        return this.http.post(this.baseUrl + '/api/book/' + bookId + '/article', article)
            .map(function (res) {
            return res.json();
        });
    };
    ArticleService.prototype.findArticlesForBook = function (bookId) {
        return this.http.get(this.baseUrl + '/api/book/' + bookId + '/article')
            .map(function (res) {
            return res.json();
        });
    };
    ArticleService.prototype.findArticleById = function (articleId) {
        return this.http.get(this.baseUrl + '/api/article/' + articleId)
            .map(function (res) {
            return res.json();
        });
    };
    ArticleService.prototype.findAllArticles = function () {
        return this.http.get(this.baseUrl + '/api/article')
            .map(function (res) {
            return res.json();
        });
    };
    ArticleService.prototype.updateArticle = function (articleId, article) {
        return this.http.put(this.baseUrl + '/api/article/' + articleId, article)
            .map(function (res) {
            return res.json();
        });
    };
    ArticleService.prototype.deleteArticle = function (articleId) {
        return this.http.delete(this.baseUrl + '/api/article/' + articleId)
            .map(function (res) {
            return res.json();
        });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ArticleService);

var _a, _b, _c;
//# sourceMappingURL=article.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookService = (function () {
    function BookService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    BookService.prototype.createBook = function (userId, book) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/book', book)
            .map(function (res) {
            return res.json();
        });
    };
    BookService.prototype.findAllBooks = function () {
        return this.http.get(this.baseUrl + '/api/book')
            .map(function (res) {
            return res.json();
        });
    };
    BookService.prototype.findBooksForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/book')
            .map(function (res) {
            return res.json();
        });
    };
    BookService.prototype.findLikedBooksForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/like/book')
            .map(function (res) {
            return res.json();
        });
    };
    BookService.prototype.findBookById = function (bookId) {
        return this.http.get(this.baseUrl + '/api/book/' + bookId)
            .map(function (res) {
            return res.json();
        });
    };
    BookService.prototype.updateBook = function (bookId, book) {
        return this.http.put(this.baseUrl + '/api/book/' + bookId, book)
            .map(function (res) {
            return res.json();
        });
    };
    BookService.prototype.deleteBook = function (bookId) {
        return this.http.delete(this.baseUrl + '/api/book/' + bookId)
            .map(function (res) {
            return res.json();
        });
    };
    return BookService;
}());
BookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
], BookService);

var _a, _b, _c;
//# sourceMappingURL=book.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/comment.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommentService = (function () {
    function CommentService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    CommentService.prototype.createComment = function (comment) {
        return this.http.post(this.baseUrl + '/api/create/comment', comment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findAllComments = function () {
        return this.http.get(this.baseUrl + '/api/comment')
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findCommentsForBook = function (bookId) {
        return this.http.get(this.baseUrl + '/api/book/' + bookId + '/comment')
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findCommentsForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/comment')
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findCommentById = function (commentId) {
        return this.http.get(this.baseUrl + '/api/comment/' + commentId)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.updateComment = function (commentId, comment) {
        return this.http.put(this.baseUrl + '/api/comment/' + commentId, comment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.deleteComment = function (commentId) {
        return this.http.delete(this.baseUrl + '/api/comment/' + commentId)
            .map(function (res) {
            return res.json();
        });
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CommentService);

var _a, _b, _c;
//# sourceMappingURL=comment.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/googlebook.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleBookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleBookService = (function () {
    function GoogleBookService(http) {
        this.http = http;
        this.key = 'AIzaSyDUiYUv4ocRKQ89ACiLwywaUrvhwpk3W6I';
        this.searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=QUERY&maxResults=30';
        this.bookUrl = 'https://www.googleapis.com/books/v1/volumes/volumeId?volumeId=BOOK_ID';
    }
    GoogleBookService.prototype.searchBooks = function (searchText) {
        var url = this.searchUrl.replace('CLIENT_ID', this.key).replace('QUERY', searchText);
        return this.http.get(url).map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    GoogleBookService.prototype.getBook = function (bookId) {
        var url = this.bookUrl.replace('CLIENT_ID', this.key).replace('BOOK_ID', bookId);
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    return GoogleBookService;
}());
GoogleBookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GoogleBookService);

var _a;
//# sourceMappingURL=googlebook.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = null;
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.register = function (user) {
        var url = this.baseUrl + '/api/register';
        this.options.withCredentials = true;
        return this.http.post(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password,
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            console.log(response);
            return response.json();
        }).catch(function (e) {
            if (e.status === 401) {
                console.log(e);
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Unauthorized');
            }
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            _this.sharedService.user = null;
            return status;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findFollowingUsers = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/following')
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findFollowedUsers = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/followed')
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findAllUsers = function () {
        return this.http.get(this.baseUrl + '/api/user')
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.toggleFollow = function (uid1, uid2) {
        return this.http.post(this.baseUrl + '/api/user/' + uid1 + '/toggle-follow/' + uid2, {})
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.toggleLikeBook = function (userId, bookId) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/togglelike/' + bookId, {})
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/assets/pictures/book_background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "book_background.3358585ce0e242787c9e.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map