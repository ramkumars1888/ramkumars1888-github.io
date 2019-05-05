(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<div class=\"side-bar\">\n\t\t<ul class=\"nav flex-column\">\n\t  \t<li class=\"nav-item\">\n\t    \t<a class=\"nav-link active\" routerLink=\"home\">\n\t\t\t\t\t<ion-icon name=\"list\"></ion-icon>\n\t\t\t\t</a>\n\t  \t</li>\n\t  \t<li class=\"nav-item\">\n\t    \t<a class=\"nav-link\" routerLink=\"new-user\">\n\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t\t</a>\n\t  \t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"content-container\">\n \t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: grid;\n  grid-template-columns: 60px auto;\n  height: 100%;\n  padding: 0px; }\n  .page-container .side-bar {\n    background: #252223; }\n  .page-container .side-bar .nav-link {\n      color: #FFF;\n      font-size: 28px; }\n  .page-container .content-container {\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZTpcXEFuZ3VsYXIgRGVtb1xcYW5ndWxhckZpcmViYXNlQ3J1ZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWSxFQUFBO0VBSmhCO0lBT00sbUJBQW1CLEVBQUE7RUFQekI7TUFVUSxXQUFXO01BQ1gsZUFBZSxFQUFBO0VBWHZCO0lBZ0JNLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICBcclxuICAgIC5zaWRlLWJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNTIyMjM7XHJcbiAgXHJcbiAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularFirebaseCrud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profie-pic/profie-pic.component */ "./src/app/profie-pic/profie-pic.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user-edit/user-edit.component.ts");
/* harmony import */ var _user_edit_user_edit_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-edit/user-edit.resolver */ "./src/app/user-edit/user-edit.resolver.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_8__["ProfiePicComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__["UserEditComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_11__["NewUserComponent"]
            ],
            entryComponents: [_profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_8__["ProfiePicComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["rootRouterConfig"], { useHash: false }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_16__["FirebaseService"], _user_edit_user_edit_resolver__WEBPACK_IMPORTED_MODULE_10__["UserEditResolver"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user-edit/user-edit.component.ts");
/* harmony import */ var _user_edit_user_edit_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-edit/user-edit.resolver */ "./src/app/user-edit/user-edit.resolver.ts");




var rootRouterConfig = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_1__["NewUserComponent"] },
    { path: 'details/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserEditComponent"], resolve: { data: _user_edit_user_edit_resolver__WEBPACK_IMPORTED_MODULE_3__["UserEditResolver"] } }
];


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-1\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchValue\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search by name...\" (keyup)=\"searchByName()\">\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text\"><ion-icon class=\"icon\" name=\"search\"></ion-icon></span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 filter-by-age\">\n    <div class=\"row\">\n      <div class=\"col-md-auto title\">\n        <span>Filter by age (older than):</span>\n      </div>\n      <div class=\"col\">\n        <span>0 </span>\n        <mat-slider\n          class=\"age-slider\"\n          max=\"100\"\n          min=\"0\"\n          step=\"1\"\n          thumbLabel=\"true\"\n          (ngModel)=\"ageValue\"\n          (change)=\"rangeChange($event)\">\n        </mat-slider>\n        <span> 100</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"list-group users-list\">\n  <div *ngFor=\"let item of items\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"row\">\n      <div class=\"col col-md-2 image-col\">\n        <img class=\"image\" [src]=\"item.payload.doc.data().profilePic\">\n      </div>\n      <div class=\"col col-md-8 text-col\">\n        <h5 class=\"mb-1\">{{item.payload.doc.data().name}} {{item.payload.doc.data().surname}}</h5>\n        <small>Age: {{item.payload.doc.data().age}}</small>\n      </div>\n      <div class=\"col col-md-2 actions-col\">\n        <button class=\"btn btn-outline-primary action\" (click)=\"viewDetails(item)\" type=\"button\">\n          <ion-icon class=\"icon\" name=\"arrow-round-forward\"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-by-age {\n  color: #6c757d; }\n  .filter-by-age .title {\n    align-self: center; }\n  .filter-by-age .age-slider {\n    width: 85%; }\n  .users-list {\n  padding: 40px 60px; }\n  .users-list .image-col {\n    text-align: center; }\n  .users-list .image-col .image {\n      border-radius: 50%;\n      width: 100px;\n      height: 100px; }\n  .users-list .text-col {\n    margin: auto 0px; }\n  .users-list .actions-col {\n    text-align: center;\n    margin: auto 0px; }\n  .users-list .actions-col .action {\n      line-height: 1; }\n  .users-list .actions-col .icon {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lOlxcQW5ndWxhciBEZW1vXFxhbmd1bGFyRmlyZWJhc2VDcnVkL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBO0VBRGxCO0lBSU0sa0JBQWtCLEVBQUE7RUFKeEI7SUFRTSxVQUFVLEVBQUE7RUFJZDtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUksa0JBQWlCLEVBQUE7RUFKckI7TUFPTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGFBQWEsRUFBQTtFQVRuQjtJQWFJLGdCQUFnQixFQUFBO0VBYnBCO0lBZ0JJLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQWpCcEI7TUFvQk0sY0FBYyxFQUFBO0VBcEJwQjtNQXVCTSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJ5LWFnZSB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5hZ2Utc2xpZGVyIHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVzZXJzLWxpc3Qge1xyXG4gICAgcGFkZGluZzogNDBweCA2MHB4O1xyXG4gIFxyXG4gICAgLmltYWdlLWNvbCB7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIFxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQtY29sIHtcclxuICAgICAgbWFyZ2luOiBhdXRvIDBweDtcclxuICAgIH1cclxuICAgIC5hY3Rpb25zLWNvbCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvIDBweDtcclxuICBcclxuICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    HomeComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    HomeComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    HomeComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    HomeComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    HomeComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-page\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Create User</li>\n    </ol>\n  </nav>\n  <div class=\"page-content\">\n    <div class=\"row\">\n      <div class=\"col col-md-4\">\n        <img class=\"profilePic\" src=\"{{profilePic}}\">\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Image</button>\n      </div>\n\n      <div class=\"col col-md-8\">\n\n        <form class=\"create-form\" [formGroup]=\"newUserForm\" novalidate (ngSubmit)=\"onSubmit(newUserForm.value)\">\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <mat-error *ngIf=\"newUserForm.get('name').hasError(validation.type) && (newUserForm.get('name').dirty || newUserForm.get('name').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\n              <mat-error *ngIf=\"newUserForm.get('surname').hasError(validation.type) && (newUserForm.get('surname').dirty || newUserForm.get('surname').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\n              <mat-error *ngIf=\"newUserForm.get('age').hasError(validation.type) && (newUserForm.get('age').dirty || newUserForm.get('age').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"row submit-button-container\">\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!newUserForm.valid\">Create</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-page {\n  padding: 20px 60px; }\n  .create-page .page-content {\n    background-color: #FFF; }\n  .create-page .page-content .profilePic {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .create-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .create-page .page-content .create-form {\n      padding: 20px; }\n  .create-page .page-content .create-form .submit-button-container {\n        justify-content: flex-end; }\n  .create-page .page-content .create-form .submit-button-container .submit-button {\n          width: 100%; }\n  .create-page .page-content .create-form .input-style {\n        width: 100%; }\n  .create-page .page-content .create-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXVzZXIvZTpcXEFuZ3VsYXIgRGVtb1xcYW5ndWxhckZpcmViYXNlQ3J1ZC9zcmNcXGFwcFxcbmV3LXVzZXJcXG5ldy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7SUFLTSxzQkFBc0IsRUFBQTtFQUw1QjtNQVFRLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osY0FBYztNQUNkLGlCQUFpQixFQUFBO0VBWHpCO01BZVEsY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBaEJ4QjtNQW9CUSxhQUFhLEVBQUE7RUFwQnJCO1FBd0JVLHlCQUF5QixFQUFBO0VBeEJuQztVQTJCWSxXQUFXLEVBQUE7RUEzQnZCO1FBZ0NVLFdBQVcsRUFBQTtFQWhDckI7UUFvQ1UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3LXVzZXIvbmV3LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXBhZ2Uge1xyXG5cclxuICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICBcclxuICAgIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIFxyXG4gICAgICAucHJvZmlsZVBpYyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2hhbmdlLWltZy1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNyZWF0ZS1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gIFxyXG4gICAgICAgIC5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gICAgICAgICAgLnN1Ym1pdC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuaW5wdXQtc3R5bGV7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profie-pic/profie-pic.component */ "./src/app/profie-pic/profie-pic.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");







var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(fb, dialog, router, firebaseService) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.firebaseService = firebaseService;
        this.ProfilePic = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=404";
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    NewUserComponent.prototype.createForm = function () {
        this.newUserForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NewUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_4__["ProfiePicComponent"], {
            height: '400px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.ProfilePic = result.link;
            }
        });
    };
    NewUserComponent.prototype.resetFields = function () {
        this.ProfilePic = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=404";
        this.newUserForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    NewUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.firebaseService.createUser(value, this.ProfilePic)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/home']);
        });
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.scss */ "./src/app/new-user/new-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/profie-pic/profie-pic.component.html":
/*!******************************************************!*\
  !*** ./src/app/profie-pic/profie-pic.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Select Profile Image</h5>\n    </div>\n  </div>\n  <div class=\"d-flex align-content-center flex-wrap\">\n    <div *ngFor=\"let profile of profiles\">\n      <img class=\"img-thumbnail\" [src]=profilePic.link (click)= \"close(profilePic)\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profie-pic/profie-pic.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profie-pic/profie-pic.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmllLXBpYy9lOlxcQW5ndWxhciBEZW1vXFxhbmd1bGFyRmlyZWJhc2VDcnVkL3NyY1xcYXBwXFxwcm9maWUtcGljXFxwcm9maWUtcGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWUtcGljL3Byb2ZpZS1waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/profie-pic/profie-pic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profie-pic/profie-pic.component.ts ***!
  \****************************************************/
/*! exports provided: ProfiePicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiePicComponent", function() { return ProfiePicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ProfiePicComponent = /** @class */ (function () {
    function ProfiePicComponent(dialogRef, firebaseService) {
        this.dialogRef = dialogRef;
        this.firebaseService = firebaseService;
        this.profilePics = new Array();
    }
    ProfiePicComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ProfiePicComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getProfile()
            .subscribe(function (data) { return _this.profilePics = data; });
    };
    ProfiePicComponent.prototype.close = function (profilePic) {
        this.dialogRef.close(profilePic);
    };
    ProfiePicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profie-pic',
            template: __webpack_require__(/*! ./profie-pic.component.html */ "./src/app/profie-pic/profie-pic.component.html"),
            styles: [__webpack_require__(/*! ./profie-pic.component.scss */ "./src/app/profie-pic/profie-pic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ProfiePicComponent);
    return ProfiePicComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getProfile = function () {
        return this.db.collection('/profilePic').valueChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    FirebaseService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('users').doc(userKey).set(value);
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('users').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    FirebaseService.prototype.createUser = function (value, profilePic) {
        return this.db.collection('users').add({
            name: value.name,
            nameToSearch: value.name.toLowerCase(),
            surname: value.surname,
            age: parseInt(value.age),
            profilePic: profilePic
        });
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-page\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit User</li>\n    </ol>\n  </nav>\n  <div class=\"page-content\">\n    <div class=\"row\">\n      <div class=\"col col-md-4\">\n        <img class=\"profilePic\" [src]=\"item.profilePic\">\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Profile</button>\n      </div>\n      <div class=\"col col-md-8\">\n\n        <form class=\"edit-form\" [formGroup]=\"editUserForm\" novalidate (ngSubmit)=\"onSubmit(editUserForm.value)\">\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <mat-error *ngIf=\"editUserForm.get('name').hasError(validation.type) && (editUserForm.get('name').dirty || editUserForm.get('name').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\n              <mat-error *ngIf=\"editUserForm.get('surname').hasError(validation.type) && (editUserForm.get('surname').dirty || editUserForm.get('surname').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\n              <mat-error *ngIf=\"editUserForm.get('age').hasError(validation.type) && (editUserForm.get('age').dirty || editUserForm.get('age').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"row submit-button-container\">\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!editUserForm.valid\">Save</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"delete-button\" color=\"warn\" type=\"button\" (click)=\"delete()\">Delete</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-edit/user-edit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-page {\n  padding: 20px 60px; }\n  .edit-page .page-content {\n    background-color: #FFF; }\n  .edit-page .page-content .profilePic {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .edit-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .edit-page .page-content .edit-form {\n      padding: 20px; }\n  .edit-page .page-content .edit-form .submit-button-container {\n        justify-content: flex-end; }\n  .edit-page .page-content .edit-form .submit-button-container .submit-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .submit-button-container .delete-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .input-style {\n        width: 100%; }\n  .edit-page .page-content .edit-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1lZGl0L2U6XFxBbmd1bGFyIERlbW9cXGFuZ3VsYXJGaXJlYmFzZUNydWQvc3JjXFxhcHBcXHVzZXItZWRpdFxcdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7SUFLTSxzQkFBc0IsRUFBQTtFQUw1QjtNQVFRLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osY0FBYztNQUNkLGlCQUFpQixFQUFBO0VBWHpCO01BZVEsY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBaEJ4QjtNQW9CUSxhQUFhLEVBQUE7RUFwQnJCO1FBd0JVLHlCQUF5QixFQUFBO0VBeEJuQztVQTJCWSxXQUFXLEVBQUE7RUEzQnZCO1VBK0JZLFdBQVcsRUFBQTtFQS9CdkI7UUFvQ1UsV0FBVyxFQUFBO0VBcENyQjtRQXdDVSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtcGFnZSB7XHJcblxyXG4gICAgcGFkZGluZzogMjBweCA2MHB4O1xyXG4gIFxyXG4gICAgLnBhZ2UtY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgXHJcbiAgICAgIC5wcm9maWxlUGljIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jaGFuZ2UtaW1nLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZWRpdC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gIFxyXG4gICAgICAgIC5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gICAgICAgICAgLnN1Ym1pdC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmRlbGV0ZS1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuaW5wdXQtc3R5bGV7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/user-edit/user-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.ts ***!
  \**************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profie-pic/profie-pic.component */ "./src/app/profie-pic/profie-pic.component.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");








var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(firebaseService, route, fb, router, dialog) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.createForm();
            }
        });
    };
    UserEditComponent.prototype.createForm = function () {
        this.editUserForm = this.fb.group({
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: [this.item.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: [this.item.age, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    UserEditComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_profie_pic_profie_pic_component__WEBPACK_IMPORTED_MODULE_5__["ProfiePicComponent"], {
            height: '400px',
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.item.avatar = result.link;
            }
        });
    };
    UserEditComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value.avatar = this.item.avatar;
        value.age = Number(value.age);
        this.firebaseService.updateUser(this.item.id, value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    UserEditComponent.prototype.delete = function () {
        var _this = this;
        this.firebaseService.deleteUser(this.item.id)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    UserEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/user-edit/user-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/user-edit/user-edit.resolver.ts ***!
  \*************************************************/
/*! exports provided: UserEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditResolver", function() { return UserEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var UserEditResolver = /** @class */ (function () {
    function UserEditResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    UserEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.firebaseService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    UserEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], UserEditResolver);
    return UserEditResolver;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB6mDBvzlFw0paVZgcjNiotmpugnruu9sU",
        authDomain: "project-demo-9a530.firebaseapp.com",
        databaseURL: "https://project-demo-9a530.firebaseio.com",
        projectId: "project-demo-9a530",
        storageBucket: "project-demo-9a530.appspot.com",
        messagingSenderId: "408528386363"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Angular Demo\angularFirebaseCrud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map