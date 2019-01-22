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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _decide_decide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./decide/decide.component */ "./src/app/decide/decide.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_9__["MobileComponent"],
                _decide_decide_component__WEBPACK_IMPORTED_MODULE_10__["DecideComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: '', component: _decide_decide_component__WEBPACK_IMPORTED_MODULE_10__["DecideComponent"] },
                    { path: 'mobile', component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_9__["MobileComponent"] },
                    { path: 'pc', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/decide/decide.component.css":
/*!*********************************************!*\
  !*** ./src/app/decide/decide.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".load-wave{\r\n    top: 40%;\r\n    position: absolute;\r\n    height: 20%;\r\n    width: 20%;\r\n    left: 40%; \r\n}\r\n@media  screen and (max-width: 480px){\r\n    .load-wave{\r\n        width: 100%;\r\n        left: 0%; \r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjaWRlL2RlY2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7Q0FDYjtBQUNEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osU0FBUztLQUNaO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9kZWNpZGUvZGVjaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZC13YXZle1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBsZWZ0OiA0MCU7IFxyXG59XHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgICAubG9hZC13YXZle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlOyBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/decide/decide.component.html":
/*!**********************************************!*\
  !*** ./src/app/decide/decide.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets\\infinite.gif\" class=\"load-wave\">"

/***/ }),

/***/ "./src/app/decide/decide.component.ts":
/*!********************************************!*\
  !*** ./src/app/decide/decide.component.ts ***!
  \********************************************/
/*! exports provided: DecideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecideComponent", function() { return DecideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DecideComponent = /** @class */ (function () {
    function DecideComponent() {
    }
    DecideComponent.prototype.ngOnInit = function () {
        if (screen.width < 500) {
            location.href = "/mobile";
        }
        else {
            location.href = "/pc";
        }
    };
    DecideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-decide',
            template: __webpack_require__(/*! ./decide.component.html */ "./src/app/decide/decide.component.html"),
            styles: [__webpack_require__(/*! ./decide.component.css */ "./src/app/decide/decide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DecideComponent);
    return DecideComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-circle{  \r\n    right: -14%;\r\n    position: absolute;\r\n    background-size: cover;\r\n    height: 110%;\r\n    background-position-x: right;\r\n    background-repeat: no-repeat;\r\n    background-image: url('back.gif');\r\n    width: 40%;\r\n    top: -5%;\r\n    border-top-left-radius: 50%;\r\n    border-bottom-left-radius: 50%;\r\n    border: 1px solid #FF6EC7;\r\n}\r\n.padding-0{\r\n    padding: 0px;\r\n}\r\n.round-button {\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 34%;\r\n\tbox-sizing: border-box;\r\n\tdisplay:block;\r\n\twidth:80px;\r\n\theight:80px;\r\n\tpadding-top: 14px;\r\n\tpadding-left: 8px;\r\n\tline-height: 20px;\r\n\tborder: 6px solid #fff;\r\n\tborder-radius: 50%;\r\n\tcolor:#f5f5f5;\r\n\ttext-align:center;\r\n\ttext-decoration:none;\r\n    background-color: rgb(213, 10, 131);\r\n\tfont-size:20px;\r\n\tfont-weight:bold;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.round-button:hover {\r\n\tbackground-color: rgba(0,0,0,0.8);\r\n\tbox-shadow: 0px 0px 10px rgba(255,255,100,1);\r\n\ttext-shadow: 0px 0px 10px rgba(255,255,100,1);\r\n}\r\n.max-size{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.top-pink-border{\r\n    height: 3px;\r\n    background-color: #FF6EC7;\r\n    box-shadow: 0px 1px 3px 0px #FF6EC78c;\r\n}\r\n.logo{\r\n    height: 100px;\r\n    cursor: pointer;\r\n}\r\n.logo-container{\r\n    padding: 0px 6%;\r\n}\r\n.logo-footer{\r\n    height: 60px;\r\n    cursor: pointer;\r\n}\r\n.logo-footer-container{\r\n   text-align: center;\r\n}\r\n.nav-item{\r\n    text-align: center;\r\n    font-size: 1.5vw;\r\n    font-weight: 600;\r\n    padding: 45px 0px;\r\n    font-family: sans-serif;\r\n}\r\n.nav-item a{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n.nav-item-active{\r\n    color: #FF6EC7;\r\n}\r\n.message-main{\r\n    padding: 5% 5%;\r\n}\r\n.bold-message{    font-size: 2.0vw;\r\n  \r\n}\r\n.main-headline {\r\n    font-size: 3vw;\r\n    \r\n    font-weight: bold;\r\n}\r\n.petened-color{\r\n    color: #FF6EC7;\r\n}\r\n.normal-text{\r\n    font-size: 1.4vw;\r\n}\r\n.div-type{\r\n    background: #ffffff;\r\n    z-index: 1000000;\r\n    position: relative;\r\n    padding: 20px 0px;\r\n}\r\n.supper-bold{\r\n    font-size: 2.5vw;\r\n    color: #FF6EC7;\r\n    font-family: auto;\r\n    font-weight: bolder;\r\n}\r\n.super-bold-upper{\r\n    text-align: center;\r\n    padding: 0px;\r\n}\r\n.italic-text{\r\n    font-style: italic;\r\n}\r\n.line-black{\r\n    width: 95%;\r\n    border: 1px solid;\r\n    margin: auto;\r\n    margin-top: 6%;\r\n}\r\n.image-bottles{\r\n    height: 200px;\r\n}\r\n.image-bottles-container{\r\n    text-align: center;\r\n}\r\n.bottle-message{\r\n    font-weight: bold;\r\n}\r\n.type-about{\r\n    background-image: radial-gradient(white 20%, #cbe5fe 60%);\r\n}\r\n.type-imp{\r\n    width: 100%;\r\n}\r\n.image-bottle{\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n.about-content{   \r\n     margin-left: 50%;\r\n    margin-top: 10%;\r\n    position: absolute;\r\n    z-index: 100;\r\n}\r\n.about-headline{\r\n    font-size: 3vw;\r\n    font-family: auto;\r\n    color: #59595b;\r\n    font-weight: bold;\r\n}\r\n.about-main-content{\r\n    font-size: 2.5vw;\r\n    font-family: auto;\r\n}\r\n.learn-more-btn{\r\n    border-radius: 15px;\r\n    color: #ffffffbd;\r\n    cursor: pointer;\r\n    background-color: #FF6EC7c9;\r\n    padding: 10px 25px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    border: 0px;\r\n}\r\n.image_bk{\r\n    width: 100%;\r\n}\r\n.other-product{\r\n    width: 100%;\r\n    height: 40%;\r\n}\r\n.footer{\r\n    width: 100%;\r\n    height: 65%;\r\n    background-color: #FF6EC7;\r\n}\r\n.wave{\r\n    width: 100%;\r\n}\r\n.socialMedia ul {\r\n\tdisplay: flex;\r\n    position: absolute;\r\n    padding-left: 0px;\r\n\ttop: 80%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, 30%);\r\n\t        transform: translate(-50%, 30%);\r\n}\r\n.socialMedia ul li {\r\n\tlist-style: none;\r\n}\r\n.socialMedia ul li a {\r\n    cursor: pointer;\r\n\twidth: 70px;\r\n\theight: 70px;\r\n\tbackground: #fff;\r\n\ttext-align: center;\r\n\tline-height: 70px;\r\n\tfont-size: 35px;\r\n\tmargin: 0 10px;\r\n\tdisplay: block;\r\n\tborder-radius: 50%;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tborder: 3px solid #fff;\r\n\tz-index: 1;\r\n\ttransition: all 0.5s ease-in-out;\r\n\tbox-shadow: 0 2px 10px 0 rgba(0, 0, 0, .16), 0 2px 10px 0\r\n\t\trgba(0, 0, 0, .12);\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0\r\n\t\trgba(0, 0, 0, .12);\r\n}\r\n.socialMedia ul li a .fa {\r\n\ttransition: all 0.5s ease-in-out;\r\n\tposition: relative;\r\n\tcolor: #262626;\r\n\tz-index: 3;\r\n}\r\n.socialMedia ul li a:hover {\r\n\tbox-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0\r\n\t\trgba(0, 0, 0, .15);\r\n\t-webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0\r\n\t\trgba(0, 0, 0, .15);\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n.socialMedia ul li a:hover .fa {\r\n\t-webkit-transform: rotate(360deg);\r\n\t        transform: rotate(360deg);\r\n\tcolor: #fff;\r\n}\r\n.socialMedia ul li a:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: gray;\r\n\ttransition: all 0.5s ease-in-out;\r\n\tz-index: 2;\r\n}\r\n.socialMedia ul li a:hover:before {\r\n\ttop: 0;\r\n}\r\n.socialMedia ul li:nth-child(1) a:before {\r\n\tbackground: #3b5999;\r\n}\r\n.socialMedia ul li:nth-child(2) a:before {\r\n\tbackground: #55acee;\r\n}\r\n.socialMedia ul li:nth-child(3) a:before {\r\n\tbackground: #cd201f;\r\n}\r\n.socialMedia ul li:nth-child(4) a:before {\r\n\tbackground: #e4405f;\r\n}\r\n.socialMedia ul li:nth-child(5) a:before {\r\n\tbackground: #dd4b39;\r\n}\r\n.footer-content{\r\n    position: absolute;\r\n    top: 100px;\r\n    width: 100%;\r\n    color: #f5f5f5;\r\n}\r\n.touch{   \r\n     padding: 40px;\r\n    padding-top: 5%;\r\n}\r\n.touch form input{\r\n    padding: 0 22px 0 22px;\r\n    height: 40px;\r\n}\r\n.touch form input:focus{\r\n    border-color: #39ff14;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ff6ec7;\r\n}\r\n.touch form button{\r\n    height: 40px;\r\n    background-color: #FF6EC7;\r\n    color: #ffffff;\r\n}\r\n.touch form button:hover{\r\n    background-color: #555555;\r\n    color: #ffffff;\r\n}\r\n.nav-item a{\r\n    cursor: pointer;\r\n}\r\n.copyRightA{\r\n   color:  #ff6ec7 !important;\r\n   text-decoration:none;\r\n}\r\n.copyRightA:hover{\r\n    color:  #555555;\r\n    text-decoration:none;\r\n}\r\n.pink-color{\r\n    color:  #ff6ec7 ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixrQ0FBNkM7SUFDN0MsV0FBVztJQUNYLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0NBQ2IsdUJBQXVCO0NBQ3ZCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixxQkFBcUI7SUFDbEIsb0NBQW9DO0NBQ3ZDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEMsNkNBQTZDO0NBQzdDLDhDQUE4QztDQUM5QztBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0dBQ0csbUJBQW1CO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Qsa0JBQWtCLGlCQUFpQjs7Q0FFbEM7QUFDRDtJQUNJLGVBQWU7O0lBRWYsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksMERBQTBEO0NBQzdEO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtLQUNLLGlCQUFpQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUdEO0NBQ0MsY0FBYztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckIsU0FBUztDQUNULFVBQVU7Q0FDVix3Q0FBZ0M7U0FBaEMsZ0NBQWdDO0NBQ2hDO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQixZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsaUNBQWlDO0NBQ2pDO3FCQUNvQjtDQUNwQjtxQkFDb0I7Q0FDcEI7QUFFRDtDQUNDLGlDQUFpQztDQUNqQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFdBQVc7Q0FDWDtBQUVEO0NBQ0M7cUJBQ29CO0NBQ3BCO3FCQUNvQjtDQUNwQiw4QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCO0FBRUQ7Q0FDQyxrQ0FBMEI7U0FBMUIsMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGlDQUFpQztDQUNqQyxXQUFXO0NBQ1g7QUFFRDtDQUNDLE9BQU87Q0FDUDtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7QUFFRDtLQUNLLGNBQWM7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDZEQUE2RDtDQUNoRTtBQUNEO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7R0FDRywyQkFBMkI7R0FDM0IscUJBQXFCO0NBQ3ZCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYWxmLWNpcmNsZXsgIFxyXG4gICAgcmlnaHQ6IC0xNCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvYmFjay5naWYnKTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB0b3A6IC01JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjZFQzc7XHJcbn1cclxuLnBhZGRpbmctMHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnJvdW5kLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDM0JTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0d2lkdGg6ODBweDtcclxuXHRoZWlnaHQ6ODBweDtcclxuXHRwYWRkaW5nLXRvcDogMTRweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb2xvcjojZjVmNWY1O1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMywgMTAsIDEzMSk7XHJcblx0Zm9udC1zaXplOjIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5yb3VuZC1idXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyNTUsMjU1LDEwMCwxKTtcclxuXHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMjU1LDI1NSwxMDAsMSk7XHJcbn1cclxuLm1heC1zaXple1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRvcC1waW5rLWJvcmRlcntcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkVDNztcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAjRkY2RUM3OGM7XHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDBweCA2JTtcclxufVxyXG4ubG9nby1mb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ28tZm9vdGVyLWNvbnRhaW5lcntcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYtaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogNDVweCAwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4ubmF2LWl0ZW0gYXtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5uYXYtaXRlbS1hY3RpdmV7XHJcbiAgICBjb2xvcjogI0ZGNkVDNztcclxufVxyXG4ubWVzc2FnZS1tYWlue1xyXG4gICAgcGFkZGluZzogNSUgNSU7XHJcbn1cclxuLmJvbGQtbWVzc2FnZXsgICAgZm9udC1zaXplOiAyLjB2dztcclxuICBcclxufVxyXG4ubWFpbi1oZWFkbGluZSB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnBldGVuZWQtY29sb3J7XHJcbiAgICBjb2xvcjogI0ZGNkVDNztcclxufVxyXG4ubm9ybWFsLXRleHR7XHJcbiAgICBmb250LXNpemU6IDEuNHZ3O1xyXG59XHJcbi5kaXYtdHlwZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLnN1cHBlci1ib2xke1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIGNvbG9yOiAjRkY2RUM3O1xyXG4gICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5zdXBlci1ib2xkLXVwcGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5pdGFsaWMtdGV4dHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ubGluZS1ibGFja3tcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbi5pbWFnZS1ib3R0bGVze1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uaW1hZ2UtYm90dGxlcy1jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvdHRsZS1tZXNzYWdle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnR5cGUtYWJvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQod2hpdGUgMjAlLCAjY2JlNWZlIDYwJSk7XHJcbn1cclxuLnR5cGUtaW1we1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlLWJvdHRsZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYWJvdXQtY29udGVudHsgICBcclxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5hYm91dC1oZWFkbGluZXtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICBjb2xvcjogIzU5NTk1YjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hYm91dC1tYWluLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbn1cclxuLmxlYXJuLW1vcmUtYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmYmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RUM3Yzk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcbi5pbWFnZV9ia3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5vdGhlci1wcm9kdWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFQzc7XHJcbn1cclxuLndhdmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG5cdHRvcDogODAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAzMCUpO1xyXG59XHJcblxyXG4uc29jaWFsTWVkaWEgdWwgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaSBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHR3aWR0aDogNzBweDtcclxuXHRoZWlnaHQ6IDcwcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDcwcHg7XHJcblx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0Ym94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwXHJcblx0XHRyZ2JhKDAsIDAsIDAsIC4xMik7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNiksIDAgMnB4IDEwcHggMFxyXG5cdFx0cmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4uc29jaWFsTWVkaWEgdWwgbGkgYSAuZmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjb2xvcjogIzI2MjYyNjtcclxuXHR6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uc29jaWFsTWVkaWEgdWwgbGkgYTpob3ZlciB7XHJcblx0Ym94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgLjE4KSwgMCA0cHggMTVweCAwXHJcblx0XHRyZ2JhKDAsIDAsIDAsIC4xNSk7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTgpLCAwIDRweCAxNXB4IDBcclxuXHRcdHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaSBhOmhvdmVyIC5mYSB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhIHVsIGxpIGE6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMDAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IGdyYXk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhIHVsIGxpIGE6aG92ZXI6YmVmb3JlIHtcclxuXHR0b3A6IDA7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoMSkgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICMzYjU5OTk7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoMikgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICM1NWFjZWU7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoMykgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICNjZDIwMWY7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoNCkgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICNlNDQwNWY7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoNSkgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn1cclxuLmZvb3Rlci1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi50b3VjaHsgICBcclxuICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbi50b3VjaCBmb3JtIGlucHV0e1xyXG4gICAgcGFkZGluZzogMCAyMnB4IDAgMjJweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4udG91Y2ggZm9ybSBpbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjogIzM5ZmYxNDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCBmZjZlYzc7XHJcbn1cclxuLnRvdWNoIGZvcm0gYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkVDNztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50b3VjaCBmb3JtIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2LWl0ZW0gYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29weVJpZ2h0QXtcclxuICAgY29sb3I6ICAjZmY2ZWM3ICFpbXBvcnRhbnQ7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5jb3B5UmlnaHRBOmhvdmVye1xyXG4gICAgY29sb3I6ICAjNTU1NTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLnBpbmstY29sb3J7XHJcbiAgICBjb2xvcjogICNmZjZlYzcgO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid padding-0 max-size\">\n  <div class=\"top-pink-border\"></div>\n  <div class=\"row nav\">\n    <div class=\"col-xs-5 logo-container\">\n      <img onclick=\"location.href=''\" src=\"assets\\logo.png\" class=\"logo\">\n    </div>\n    <div class=\"row col-xs-4\">\n      <div class=\"col-xs-4 nav-item nav-item-active\"><a href=\"#\">Home</a></div>\n      <div class=\"col-xs-4 nav-item\"><a (click)=\"scroll(products)\">Product</a></div>\n      <div class=\"col-xs-4 nav-item\"><a (click)=\"scroll(about)\">About Us</a></div>\n    </div>\n    <div class=\"col-xs-3\"></div>\n  </div>\n  <div class=\"message-main\">\n    <span class=\"bold-message\">Life is a little like a message</span>\n    <br>\n    <span class=\"bold-message\">in a bottle, to be carried by</span>\n    <br>\n    <span class=\"main-headline petened-color\">the winds and the tides.</span>\n    <br>\n    <br>\n    <span class=\"normal-text\">At <span class=\"petened-color\">Listo</span>,\n      We believe in a better wotter. Simply dummy test of printing a<br>\n      Lorem Ipsum is simply dummy text of the printing and industry.\n      Lorem Ipsumhas<br> been the industry's ever 1500s,\n      when an unknown printer took a galley of type <br>\n      and scrambled it to make a type specimen.<br>\n    </span>\n  </div>\n  <div class=\"half-circle\">\n    <a href=\"#\" class=\"round-button\"><i class=\"fa fa-play fa-2x\"></i></a>\n  </div>\n</div>\n<div class=\"container-fluid padding-0 max-size div-type\" #products>\n  <div class=\"row\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-4\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-2 super-bold-upper\"><span class=\"supper-bold\">Mintral Water</span><br>\n      <span class=\"italic-text\">Life is a little like message</span>\n    </div>\n    <div class=\"col-xs-4\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-1\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\"></div>\n    <div class=\"col-xs-3 image-bottles-container\">\n      <img src=\"assets\\20ltr.png\" class=\"image-bottles\"><br>\n      <span class=\"bottle-message\">20 LTR</span>\n    </div>\n    <div class=\"col-xs-3 image-bottles-container\">\n      <img src=\"assets\\5ltr.png\" class=\"image-bottles\"><br>\n      <span class=\"bottle-message\">5 LTR</span>\n    </div>\n    <div class=\"col-xs-3\"></div>\n  </div>\n  <div class=\"row\" style=\"    padding: 20px 100px;\">\n    <div class=\"col-xs-4 image-bottles-container\">\n      <img src=\"assets\\1ltr.png\" class=\"image-bottles\"><br>\n      <span class=\"bottle-message\">1 LTR</span>\n    </div>\n    <div class=\"col-xs-4 image-bottles-container\">\n      <img src=\"assets\\500ml_0.png\" class=\"image-bottles\"><br>\n      <span class=\"bottle-message\">500 m</span>\n    </div>\n    <div class=\"col-xs-4 image-bottles-container\">\n      <img src=\"assets\\1ltr.png\" class=\"image-bottles\"><br>\n      <span class=\"bottle-message\">2 LTR</span>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid padding-0 max-size type-about\">\n  <img src=\"assets\\2_bottle.png\" class=\"image-bottle\">\n  <div class=\"about-content\">\n    <span class=\"about-headline\">About Our <span class=\"pink-color\">Mineral Water</span></span>\n    <br>\n    <br>\n    <br>\n    <br>\n    <span class=\"about-main-content\">\n      Our body needs a Lots of Mineral's such<br>\n      as <span class=\"petened-color\">Zinc, Calcium and Mangesium.</span>\n      <br>Which is usually found in<span class=\"petened-color\"> Mineral Water.</span>\n    </span>\n    <br>\n    <br>\n    <br>\n    <button class=\"learn-more-btn\">LEARN MORE</button>\n  </div>\n</div>\n<img src=\"assets\\bk_div.png\" class=\"image_bk\">\n<img src=\"assets\\5th.jpg\" class=\"container-fluid padding-0 type-imp\">\n<div class=\"container-fluid padding-0 other-product\">\n  <div class=\"row\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-4\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-2 super-bold-upper\"><span class=\"supper-bold\">Stay In Touch</span><br>\n      <span class=\"italic-text\">don't worry we hate spams too</span>\n    </div>\n    <div class=\"col-xs-4\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-1\"></div>\n  </div>\n  <div class='row touch'>\n    <form (submit)=\"onSubmit($event)\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-3\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\" [(ngModel)]='nameId' [ngModelOptions]=\"{standalone: true}\" required=\"required\">\n      </div>\n      <div class=\"col-md-3\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Your Email Address\" [(ngModel)]='emailId'[ngModelOptions]=\"{standalone: true}\" required=\"required\">\n      </div>\n      <div class=\"col-md-2\">\n        <button type=\"submit\" class=\"form-control\" >Subscribe</button>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </form>\n  </div>\n</div>\n<div class=\"container-fluid padding-0 footer\" #about>\n  <img src=\"assets\\wav.png\" class=\"wave\">\n  <div class=\"logo-footer-container\">\n    <img src=\"assets\\logo.png\" class=\"logo-footer\">\n  </div>\n  <div class=\"socialMedia\">\n    <div class=\"container-fluid text-center\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <ul>\n            <li><a id=\"facebook_link\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"twitte_link\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"youtube_link\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"instagram_link\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"google_link\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n          <div class=\"row footer-content\">\n            <br>\n            <br>\n            <span [innerHTML]=\"addressLineOne\"></span><br>\n            <span [innerHTML]=\"addressLineTwo\"></span><br>\n            <br>\n            <span [innerHTML]=\"copyRight\" class=\"copyRight\"></span>\n            <br>\n          </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.addressLineOne = "Room No.73,Trupti Sadan CHS,Behind 90 Feet police staion,";
        this.addressLineTwo = "Kurla,Mumbai -400072";
        this.copyRight = "Listo©2018,Developed by <a class='copyRightA' style='color:  #ff6ec7' href='https://dreamkasper.com'>The Dream Kasper,co</a>.,";
        this.nameId = "";
        this.emailId = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (screen.width < 500) {
            location.href = "/mobile";
        }
    };
    HomeComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        console.log(this.nameId);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('name', this.nameId);
        params = params.append('email', this.emailId);
        this.http.get("https://rest.dreamkasper.com/ECommerce/sub", {
            params: params
        }).subscribe(function (response) {
            if (response == true) {
                alert("Thank You for subscription..!!!");
            }
            else {
                alert("false");
            }
        });
    };
    HomeComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mobile/mobile.component.css":
/*!*********************************************!*\
  !*** ./src/app/mobile/mobile.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Carousel Styles */\r\n.carousel-indicators .active {\r\n    background-color: #2980b9;\r\n}\r\n.carousel-inner img {\r\n    width: 50%;\r\n    max-height: 460px;\r\n    margin: auto;\r\n}\r\n.carousel-indicators li {\r\n    background-color: #00000061;\r\n}\r\n.carousel-control {\r\n    width: 0;\r\n}\r\n.image-msg{\r\n    position: absolute;\r\n    z-index: 10000;\r\n    top: 0px;\r\n    width: 100%;\r\n    font-size: 5vw;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.carousel-control.left,\r\n.carousel-control.right {\r\n\topacity: 1;\r\n\tfilter: alpha(opacity=100);\r\n\tbackground-image: none;\r\n\tbackground-repeat: no-repeat;\r\n\ttext-shadow: none;\r\n}\r\n.carousel-control.left span {\r\n\tpadding: 15px;\r\n}\r\n.carousel-control.right span {\r\n\tpadding: 15px;\r\n}\r\n.carousel-control .glyphicon-chevron-left, \r\n.carousel-control .glyphicon-chevron-right, \r\n.carousel-control .icon-prev, \r\n.carousel-control .icon-next {\r\n\tposition: absolute;\r\n\ttop: 45%;\r\n\tz-index: 5;\r\n\tdisplay: inline-block;\r\n}\r\n.carousel-control .glyphicon-chevron-left,\r\n.carousel-control .icon-prev {\r\n\tleft: 0;\r\n}\r\n.carousel-control .glyphicon-chevron-right,\r\n.carousel-control .icon-next {\r\n\tright: 0;\r\n}\r\n.carousel-control.left span,\r\n.carousel-control.right span {\r\n    cursor: pointer;\r\n        color: #FF6EC7;\r\n        margin-right: 0px;\r\n}\r\n.carousel-control.left span:hover,\r\n.carousel-control.right span:hover {\r\n\topacity: .7;\r\n\tfilter: alpha(opacity=70);\r\n}\r\n/* Carousel Header Styles */\r\n.header-text {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 1.8%;\r\n    right: auto;\r\n    width: 96.66666666666666%;\r\n    color: #fff;\r\n}\r\n.header-text h2 {\r\n    font-size: 40px;\r\n}\r\n.header-text h2 span {\r\n    background-color: #2980b9;\r\n\tpadding: 10px;\r\n}\r\n.header-text h3 span {\r\n\tbackground-color: #000;\r\n\tpadding: 15px;\r\n}\r\n.btn-min-block {\r\n    min-width: 170px;\r\n    line-height: 26px;\r\n}\r\n.btn-theme {\r\n    color: #fff;\r\n    background-color: transparent;\r\n    border: 2px solid #fff;\r\n    margin-right: 15px;\r\n}\r\n.btn-theme:hover {\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-color: #fff;\r\n}\r\n.main-home{\r\n    background-color:#FF6EC7; \r\n    border-top: 5px solid #FF6EC7;\r\n    padding: 0px;\r\n}\r\n.logo-holder{\r\n    height: 50px;\r\n    text-align: center;\r\n    background-color:#ffffff; \r\n}\r\n.logo{\r\n    height: 40px;\r\n    margin-top: 5px; \r\n    margin-left: -10px;\r\n}\r\n.messageContainer{\r\n    color: #ffffff;\r\n    text-align: center;\r\n    padding: 25px;\r\n    padding-bottom: 50px;\r\n    position: relative;\r\n    \r\n}\r\n.messageContainer span{\r\n    font-size: 4vw;\r\n}\r\n.messageContainer div{\r\n    font-size: 7vw;\r\n    font-weight: 600;\r\n}\r\n#spl-bottle{\r\n    position: absolute;\r\n    width: 70%;\r\n    left: 15%;\r\n    bottom: -60%;\r\n}\r\n.second-home{\r\n    padding: 25px;\r\n    padding-top: 60px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\r\n.supper-bold{\r\n    font-size: 4.5vw;\r\n    color: #FF6EC7;\r\n    font-family: auto;\r\n    font-weight: bolder;\r\n}\r\n.super-bold-upper{\r\n    text-align: center;\r\n    padding: 0px;\r\n}\r\n.italic-text{\r\n    font-style: italic;\r\n    font-size: 2.5vw;\r\n}\r\n.line-black{\r\n    width: 95%;\r\n    border: 1px solid;\r\n    margin: auto;\r\n    margin-top: 6%;\r\n}\r\n.about{\r\n    background-image: radial-gradient(white 20%, #cbe5fe 60%);\r\n    padding: 0px;\r\n    position: relative;\r\n}\r\n.image-bottle{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.about-headline{\r\n    padding-top: 15px;\r\n    font-size: 7vw;\r\n    font-family: auto;\r\n    color: #59595b;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.pink-color{\r\n    color:  #FF6EC7 ;\r\n}\r\n.pink-color-new{\r\n    color: #FF6EC7;\r\n    font-weight: bold;\r\n}\r\n.image_bk{\r\n    width: 100%;\r\n}\r\n.padding-0{\r\n    padding: 0px;\r\n}\r\n.type-imp{\r\n    height: 250px;\r\n    width: 100%;\r\n}\r\n.other-product{\r\n    width: 100%;\r\n    padding-top: 10px;\r\n}\r\n.other-product form{\r\n    padding: 30px 40px;\r\n}\r\n.other-product form input:focus{\r\n    border-color: #39ff14;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ff6ec7;\r\n}\r\n.other-product form button{\r\n    height: 40px;\r\n    background-color:#FF6EC7;\r\n    color: #ffffff;\r\n}\r\n.other-product form button:hover{\r\n    background-color: #555555;\r\n    color: #ffffff;\r\n}\r\n.form-element{\r\n    margin-bottom: 10px;\r\n    height: 50px;\r\n}\r\n.footer{\r\n    width: 100%;\r\n    height: 50%;\r\n    background-color: #FF6EC7;\r\n}\r\n.wave{\r\n    width: 100%;\r\n    margin-top: -2px;\r\n}\r\n.myContent{\r\n    margin-top: 10%;\r\n    color: #ffffff;\r\n}\r\n.socialMedia ul {\r\n\tdisplay: flex;\r\n    position: absolute;\r\n    padding-left: 0px;\r\n\ttop: 80%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, 30%);\r\n\t        transform: translate(-50%, 30%);\r\n}\r\n.socialMedia ul li {\r\n\tlist-style: none;\r\n}\r\n.logo-footer{\r\n    height: 60px;\r\n    cursor: pointer;\r\n}\r\n.logo-footer-container{\r\n   text-align: center;\r\n}\r\n.socialMedia ul li a {\r\n    cursor: pointer;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: #fff;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 25px;\r\n    margin: 0 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n    position: relative;\r\n\toverflow: hidden;\r\n\tborder: 3px solid #fff;\r\n\tz-index: 1;\r\n\ttransition: all 0.5s ease-in-out;\r\n\tbox-shadow: 0 2px 10px 0 rgba(0, 0, 0, .16), 0 2px 10px 0\r\n\t\trgba(0, 0, 0, .12);\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0\r\n\t\trgba(0, 0, 0, .12);\r\n}\r\n.socialMedia ul li a .fa {\r\n\ttransition: all 0.5s ease-in-out;\r\n\tposition: relative;\r\n\tcolor: #262626;\r\n\tz-index: 3;\r\n}\r\n.socialMedia ul li a:hover {\r\n\tbox-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0\r\n\t\trgba(0, 0, 0, .15);\r\n\t-webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0\r\n\t\trgba(0, 0, 0, .15);\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n}\r\n.socialMedia ul li a:hover .fa {\r\n\t-webkit-transform: rotate(360deg);\r\n\t        transform: rotate(360deg);\r\n\tcolor: #fff;\r\n}\r\n.socialMedia ul li a:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: gray;\r\n\ttransition: all 0.5s ease-in-out;\r\n\tz-index: 2;\r\n}\r\n.socialMedia ul li a:hover:before {\r\n\ttop: 0;\r\n}\r\n.socialMedia ul li:nth-child(1) a:before {\r\n\tbackground: #3b5999;\r\n}\r\n.socialMedia ul li:nth-child(2) a:before {\r\n\tbackground: #55acee;\r\n}\r\n.socialMedia ul li:nth-child(3) a:before {\r\n\tbackground: #cd201f;\r\n}\r\n.socialMedia ul li:nth-child(4) a:before {\r\n\tbackground: #e4405f;\r\n}\r\n.socialMedia ul li:nth-child(5) a:before {\r\n\tbackground: #dd4b39;\r\n}\r\n.footer-content{\r\n    position: absolute;\r\n    top: 100px;\r\n    width: 100%;\r\n    color: #f5f5f5;\r\n}\r\n.about_message{\r\n    background-image: url('blur.png');\r\n    width: 100%;\r\n    top: 100px;\r\n    opacity: 0.95;\r\n    text-align: center;\r\n    padding: 10px;\r\n    position: absolute;\r\n    background-size: cover;\r\n}\r\n.learn-more{\r\n    width: 100px;\r\n    margin: auto;\r\n    background-color: #ff6ec7;\r\n    color: #ffffff;\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBcUI7QUFDckI7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSxTQUFTO0NBQ1o7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUVEOztDQUVDLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEI7QUFFRDtDQUNDLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBRUQ7Ozs7Q0FJQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEI7QUFFRDs7Q0FFQyxRQUFRO0NBQ1I7QUFFRDs7Q0FFQyxTQUFTO0NBQ1Q7QUFFRDs7SUFFSSxnQkFBZ0I7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO0NBQ3pCO0FBRUQ7O0NBRUMsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQjtBQUVELDRCQUE0QjtBQUM1QjtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QixjQUFjO0NBQ2Q7QUFFRDtDQUNDLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2Q7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qixt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YixpQkFBaUI7Q0FDakIsaUNBQWlDO0NBQ2pDLFdBQVc7Q0FDWDtBQUVEO0NBQ0MsT0FBTztDQUNQO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtDQUNsQjtBQUNEO0lBQ0ksa0NBQTZDO0lBQzdDLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQ2Fyb3VzZWwgU3R5bGVzICovXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWF4LWhlaWdodDogNDYwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2MTtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbCB7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4uaW1hZ2UtbXNne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wubGVmdCxcclxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHNwYW4ge1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHNwYW4ge1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LCBcclxuLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LCBcclxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldiwgXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDQ1JTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCxcclxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCB7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLmxlZnQgc3BhbixcclxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQgc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRjZFQzc7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLmxlZnQgc3Bhbjpob3ZlcixcclxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQgc3Bhbjpob3ZlciB7XHJcblx0b3BhY2l0eTogLjc7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxufVxyXG5cclxuLyogQ2Fyb3VzZWwgSGVhZGVyIFN0eWxlcyAqL1xyXG4uaGVhZGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxLjglO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTYuNjY2NjY2NjY2NjY2NjYlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dCBoMiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dCBoMiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0IGgzIHNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0cGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmJ0bi1taW4tYmxvY2sge1xyXG4gICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4uYnRuLXRoZW1lIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLXRoZW1lOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG4ubWFpbi1ob21le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY2RUM3OyBcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjRkY2RUM3O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5sb2dvLWhvbGRlcntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjsgXHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59XHJcbi5tZXNzYWdlQ29udGFpbmVye1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxufVxyXG4ubWVzc2FnZUNvbnRhaW5lciBzcGFue1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuLm1lc3NhZ2VDb250YWluZXIgZGl2e1xyXG4gICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jc3BsLWJvdHRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICBib3R0b206IC02MCU7XHJcbn1cclxuXHJcbi5zZWNvbmQtaG9tZXtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uc3VwcGVyLWJvbGR7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgY29sb3I6ICNGRjZFQzc7XHJcbiAgICBmb250LWZhbWlseTogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnN1cGVyLWJvbGQtdXBwZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5pdGFsaWMtdGV4dHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbn1cclxuLmxpbmUtYmxhY2t7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG4uYWJvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQod2hpdGUgMjAlLCAjY2JlNWZlIDYwJSk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZS1ib3R0bGV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWJvdXQtaGVhZGxpbmV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogN3Z3O1xyXG4gICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICBjb2xvcjogIzU5NTk1YjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGluay1jb2xvcntcclxuICAgIGNvbG9yOiAgI0ZGNkVDNyA7XHJcbn1cclxuLnBpbmstY29sb3ItbmV3e1xyXG4gICAgY29sb3I6ICNGRjZFQzc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmltYWdlX2Jre1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhZGRpbmctMHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4udHlwZS1pbXB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm90aGVyLXByb2R1Y3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5vdGhlci1wcm9kdWN0IGZvcm17XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5vdGhlci1wcm9kdWN0IGZvcm0gaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6ICMzOWZmMTQ7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggZmY2ZWM3O1xyXG59XHJcbi5vdGhlci1wcm9kdWN0IGZvcm0gYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY2RUM3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm90aGVyLXByb2R1Y3QgZm9ybSBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkVDNztcclxufVxyXG4ud2F2ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuLm15Q29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc29jaWFsTWVkaWEgdWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHR0b3A6IDgwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMzAlKTtcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhIHVsIGxpIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5cclxuLmxvZ28tZm9vdGVye1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dvLWZvb3Rlci1jb250YWluZXJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc29jaWFsTWVkaWEgdWwgbGkgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0Ym94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwXHJcblx0XHRyZ2JhKDAsIDAsIDAsIC4xMik7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNiksIDAgMnB4IDEwcHggMFxyXG5cdFx0cmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4uc29jaWFsTWVkaWEgdWwgbGkgYSAuZmEge1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjb2xvcjogIzI2MjYyNjtcclxuXHR6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uc29jaWFsTWVkaWEgdWwgbGkgYTpob3ZlciB7XHJcblx0Ym94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgLjE4KSwgMCA0cHggMTVweCAwXHJcblx0XHRyZ2JhKDAsIDAsIDAsIC4xNSk7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTgpLCAwIDRweCAxNXB4IDBcclxuXHRcdHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaSBhOmhvdmVyIC5mYSB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhIHVsIGxpIGE6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMDAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IGdyYXk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhIHVsIGxpIGE6aG92ZXI6YmVmb3JlIHtcclxuXHR0b3A6IDA7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoMSkgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICMzYjU5OTk7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoMikgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICM1NWFjZWU7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoMykgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICNjZDIwMWY7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoNCkgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICNlNDQwNWY7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB1bCBsaTpudGgtY2hpbGQoNSkgYTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn1cclxuLmZvb3Rlci1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLmFib3V0X21lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2JsdXIucG5nXCIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubGVhcm4tbW9yZXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZlYzc7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mobile/mobile.component.html":
/*!**********************************************!*\
  !*** ./src/app/mobile/mobile.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main-home\">\n  <div class=\"logo-holder\">\n    <img class=\"logo\" src=\"assets\\logo.png\">\n  </div>\n  <div class=\"messageContainer\">\n    <span>Life is a little like a message</span><br>\n    <span>in a bottle, to be carried by</span>\n    <br>\n    <div>the winds and the tides.</div>\n    <img src=\"assets/500ml_1.png\" id='spl-bottle'>\n  </div>\n</div>\n<div class=\"container-fluid second-home\">\n  <div>\n    At Listo, We believe in a better wotter. Simply hello dummy test of printing a\n    Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsumhas\n    been the industry's ever 1500s, when an unknown printer took a galley of type\n    and scrambled it to make a type specimen\n  </div>\n</div>\n<div class=\"container-fluid div-type\">\n  <div class=\"row\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-3\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-4 super-bold-upper\"><span class=\"supper-bold\">Mintral Water</span><br>\n      <span class=\"italic-text\">Life is a little like message</span>\n    </div>\n    <div class=\"col-xs-3\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-1\"></div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- Carousel -->\n    <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"3\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"4\"></li>\n      </ol>\n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\">\n        <div class=\"item active\">\n          <img src=\"assets\\20ltr.png\" alt=\"20ltr\">\n          <div class=\"image-msg\">20 Ltr</div>\n        </div>\n        <div class=\"item\">\n          <img src=\"assets\\5ltr.png\" alt=\"5ltr\">\n          <div class=\"image-msg\">5 Ltr</div>\n        </div>\n        <div class=\"item\">\n          <img src=\"assets\\1ltr.png\" alt=\"2ltr\">\n          <div class=\"image-msg\">2 Ltr</div>\n        </div>\n        <div class=\"item\">\n          <img src=\"assets\\1ltr.png\" alt=\"1ltr\">\n          <div class=\"image-msg\">1 Ltr</div>\n        </div>\n        <div class=\"item\">\n          <img src=\"assets\\500ml_0.png\" alt=\"500ml\">\n          <div class=\"image-msg\">500 Ml</div>\n        </div>\n      </div>\n      <!-- Controls -->\n      <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      </a>\n    </div><!-- /carousel -->\n  </div>\n</div>\n\n<div class=\"container-fluid about\">\n  <div class=\"about-headline\">About Our <span class=\"pink-color\">Mineral Water</span></div>\n  <img class=\"image-bottle\" src=\"assets\\2_bottle_mob.png\">\n  <div class=\"about_message\">\n      Our body needs a Lots of Mineral's such<br>\n      <span class=\"pink-color-new\">as Zinc, Calcium and Mangesium.</span><br>\n      Which is usually found in Mineral Water.\n      <button class=\"form-control learn-more\">Learn more</button>\n  </div>\n</div>\n<img src=\"assets\\bk_div.png\" class=\"image_bk\">\n<img src=\"assets\\5th.jpg\" class=\"container-fluid padding-0 type-imp\">\n<div class=\"container-fluid padding-0 other-product\">\n  <div class=\"row\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-3\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-4 super-bold-upper\"><span class=\"supper-bold\">Stay Tn Touch</span><br>\n      <span class=\"italic-text\">don't worry we hate spams too</span>\n    </div>\n    <div class=\"col-xs-3\">\n      <div class=\"line-black\"></div>\n    </div>\n    <div class=\"col-xs-1\"></div>\n  </div>\n  <form (submit)=\"onSubmit($event)\">\n    <input type=\"text\" class=\"form-control form-element\" placeholder=\"Your Name\" [(ngModel)]='nameId' [ngModelOptions]=\"{standalone: true}\">\n    <input type=\"email\" class=\"form-control form-element\" placeholder=\"Your email address\" [(ngModel)]='emailId'[ngModelOptions]=\"{standalone: true}\" >\n    <button type=\"submit\" class=\"form-control\">Subscribe</button>\n  </form>\n\n</div>\n<div class=\"container-fluid padding-0 footer\" #about>\n  <img src=\"assets\\wav.png\" class=\"wave\">\n  <div class=\"logo-footer-container\">\n    <img src=\"assets\\logo.png\" class=\"logo-footer\">\n  </div>\n  <div class=\"socialMedia\">\n    <div class=\"container-fluid text-center\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <ul>\n            <li><a id=\"facebook_link\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"twitte_link\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"youtube_link\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"instagram_link\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <li><a id=\"google_link\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-4\"></div>\n      </div>\n      <div class=\"row myContent\">\n          <br>\n          <br>\n          <span [innerHTML]=\"addressLineOne\">hello</span><br>\n          <span [innerHTML]=\"addressLineTwo\">Yes</span><br>\n          <br>\n          <span [innerHTML]=\"copyRight\" class=\"copyRight\">come</span>\n          <br>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MobileComponent = /** @class */ (function () {
    function MobileComponent(http) {
        this.http = http;
        this.addressLineOne = "Room No.73,Trupti Sadan CHS,Behind 90 Feet police staion,";
        this.addressLineTwo = "Kurla,Mumbai -400072";
        this.copyRight = "Listo©2018,<br>Developed by <a class='copyRightA' style='color:  #ff6ec7' href='https://dreamkasper.com'>The Dream Kasper,co</a>.";
        this.nameId = "";
        this.emailId = "";
    }
    MobileComponent.prototype.ngOnInit = function () {
        if (screen.width >= 500) {
            location.href = "/pc";
        }
    };
    MobileComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        console.log(this.nameId);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('name', this.nameId);
        params = params.append('email', this.emailId);
        this.http.get("https://rest.dreamkasper.com/ECommerce/sub", {
            params: params
        }).subscribe(function (response) {
            if (response == true) {
                alert("Thank You for subscription..!!!");
            }
            else {
                alert("false");
            }
        });
    };
    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile',
            template: __webpack_require__(/*! ./mobile.component.html */ "./src/app/mobile/mobile.component.html"),
            styles: [__webpack_require__(/*! ./mobile.component.css */ "./src/app/mobile/mobile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
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
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular Apps\Listo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map