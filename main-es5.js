(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n<!-- <video-view></video-view> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"nav\">\n  <h1 class=\"nav-heading\">Welcome to video bookmarks!</h1>\n  <span class=\"spacing\"></span>\n  <search-input class=\"nav-search\"></search-input>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-input/search-input.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-input/search-input.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search-input\">\n  <input matInput [(ngModel)]=\"input\" placeholder=\"Video url\">\n</mat-form-field>\n<button mat-icon-button matTooltip=\"Save a video\" aria-label=\"Icon button with plus\" (click)=\"addVideo(input)\">\n  <mat-icon>add</mat-icon>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\" color=\"default\">\n  <mat-slide-toggle class=\"mat-typography toolbar-slide\" color=\"primary\" [checked]=\"checked\"\n    (change)=\"isChecked($event)\">\n    Favourites only\n  </mat-slide-toggle>\n\n  <span class=\"spacing\"></span>\n\n  <p class=\"mat-typography sort-label\">Sort by:</p>\n  <mat-form-field>\n    <mat-select value=\"new\" (selectionChange)=\"sortBy($event)\">\n      <mat-option value=\"new\">Newest</mat-option>\n      <mat-option value=\"old\">Oldest</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <span class=\"spacing-mobile\"></span>\n\n  <div>\n    <button mat-icon-button matTooltip=\"Tiles view\" aria-label=\"Icon button turning on tiles view\"\n      (click)=\"updateView('tiles')\">\n      <mat-icon>view_modules</mat-icon>\n    </button>\n\n    <button mat-icon-button matTooltip=\"List view\" aria-label=\"Icon button turning on list view\"\n      (click)=\"updateView('list')\">\n      <mat-icon>view_list</mat-icon>\n    </button>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-card/video-card.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-card/video-card.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"video-card\">\n  <mat-card-header>\n    <mat-card-title>{{video.title}}</mat-card-title>\n    <mat-card-subtitle>Saved: {{video.added | date}}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image [src]=\"video.thumbnail\" (click)=\"onDialog.emit(video.url)\" class=\"video-thumbnail\">\n  <mat-card-content>\n    <p>Views: {{video.views}}</p>\n    <p>Likes: {{video.likes}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a [href]=\"video.url\" mat-button>Watch</a>\n    <button mat-icon-button matTooltip=\"Add to favourites\" aria-label=\"Icon button with star\"\n      (click)=\"onFavourite.emit(video.id)\">\n      <mat-icon *ngIf=\"!video.isFavourite; else fav\">star_border</mat-icon>\n      <ng-template #fav>\n        <mat-icon>star</mat-icon>\n      </ng-template>\n    </button>\n    <button mat-icon-button matTooltip=\"Delete a video\" aria-label=\"Icon button with rubbish bin\"\n      (click)=\"onDelete.emit(video.id)\">\n      <mat-icon>delete</mat-icon>\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-dialog/video-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-dialog/video-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-iframe-wrapper\">\n  <iframe *ngIf=\"embed\" [src]=\"embed | iframe\" frameborder=\"0\" allowfullscreen class=\"video-iframe\"></iframe>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-list-item/video-list-item.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-list-item/video-list-item.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-list-item\">\n  <div class=\"video-list-image\" (click)=\"onDialog.emit(video.url)\">\n    <img [src]=\"video.thumbnail\" alt=\"video thumbnail\" class=\"video-thumbnail\">\n  </div>\n  <div class=\"video-info\">\n    <mat-card-title>{{video.title}}</mat-card-title>\n    <mat-card-subtitle>Saved: {{video.added | date}} </mat-card-subtitle>\n    <p class=\"mat-body\">Views: {{video.views}}</p>\n    <p class=\"mat-body\">Likes: {{video.likes}}</p>\n  </div>\n  <span class=\"spacing\"></span>\n  <div class=\"video-action\">\n    <a [href]=\"video.url\" mat-button>Watch</a>\n    <button mat-icon-button matTooltip=\"Add to favourites\" aria-label=\"Icon button with star\"\n      (click)=\"onFavourite.emit(video.id)\">\n      <mat-icon *ngIf=\"!video.isFavourite; else fav\">star_border</mat-icon>\n      <ng-template #fav>\n        <mat-icon>star</mat-icon>\n      </ng-template>\n    </button>\n    <button mat-icon-button matTooltip=\"Delete a video\" aria-label=\"Icon button with rubbish bin\"\n      (click)=\"onDelete.emit(video.id)\">\n      <mat-icon>delete</mat-icon>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-list/video-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-list/video-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul role=\"list\" class=\"video-list\">\n  <li *ngFor=\"let video of videos\" role=\"listitem\">\n    <video-list-item [video]=\"video\" (onDelete)=\"onDelete.emit($event)\" (onDialog)=\"onDialog.emit($event)\" (onFavourite)=\"onFavourite.emit($event)\"></video-list-item>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-tiles/video-tiles.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-tiles/video-tiles.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list *ngIf=\"!isSmallScreen; else smallScreen\" cols=\"3\" rowHeight=\"4:5\" gutterSize=\"1rem\">\n  <mat-grid-tile *ngFor=\"let video of videos\">\n    <video-card [video]=\"video\" (onDelete)=\"onDelete.emit($event)\" (onDialog)=\"onDialog.emit($event)\"\n      (onFavourite)=\"onFavourite.emit($event)\"></video-card>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<ng-template #smallScreen>\n  <div *ngFor=\"let video of videos\">\n    <video-card [video]=\"video\" (onDelete)=\"onDelete.emit($event)\" (onDialog)=\"onDialog.emit($event)\"\n      (onFavourite)=\"onFavourite.emit($event)\"></video-card>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-view/video-view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-view/video-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 *ngIf=\"!videos.length\" class=\"mat-headline\">No saved matching videos found. </h3>\n  <div *ngIf=\"videos.length\" class=\"video-router-links\">\n    <div>\n      <a *ngIf=\"page === 1; else enabledPrevious\" mat-button disabled>Previous</a>\n      <ng-template #enabledPrevious>\n        <a mat-button [routerLink]=\"['',page-1]\">Previous</a>\n      </ng-template>\n      <a *ngIf=\"videos.length <= (page-1)*9 + 9; else enabledNext\" mat-button disabled>Next</a>\n      <ng-template #enabledNext>\n        <a mat-button [routerLink]=\"['',page+1]\">Next</a>\n      </ng-template>\n    </div>\n    <button mat-button color=\"warn\" (click)=\"clearVideos()\">Clear videos</button>\n  </div>\n  <ng-container *ngIf=\"videos.length\">\n    <video-tiles *ngIf=\"view === 'tiles'; else list\" [videos]=\"displayedVideos\" (onDelete)=\"deleteVideo($event)\"\n      (onDialog)=\"openVideoDialog($event)\" (onFavourite)=\"toggleVideoFavourite($event)\"></video-tiles>\n    <ng-template #list>\n      <video-list [videos]=\"displayedVideos\" (onDelete)=\"deleteVideo($event)\"\n        (onFavourite)=\"toggleVideoFavourite($event)\" (onDialog)=\"openVideoDialog($event)\">\n      </video-list>\n    </ng-template>\n  </ng-container>\n  <button mat-fab color=\"primary\" matTooltipPosition=\"left\" class=\"button-floating\" matTooltip=\"Load demo videos\"\n    (click)=\"loadDemo()\">\n    <mat-icon>archive</mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = "video-bookmarks";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pipes_iframe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/iframe.pipe */ "./src/app/pipes/iframe.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/search-input/search-input.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./video-list-item/video-list-item.component */ "./src/app/video-list-item/video-list-item.component.ts");
/* harmony import */ var _video_card_video_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./video-card/video-card.component */ "./src/app/video-card/video-card.component.ts");
/* harmony import */ var _video_tiles_video_tiles_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./video-tiles/video-tiles.component */ "./src/app/video-tiles/video-tiles.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./video-view/video-view.component */ "./src/app/video-view/video-view.component.ts");
/* harmony import */ var _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./video-dialog/video-dialog.component */ "./src/app/video-dialog/video-dialog.component.ts");





// Router

// Pipes

// Angular Material













// Components










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_21__["SearchInputComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"],
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_23__["VideoListComponent"],
                _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_24__["VideoListItemComponent"],
                _video_card_video_card_component__WEBPACK_IMPORTED_MODULE_25__["VideoCardComponent"],
                _video_tiles_video_tiles_component__WEBPACK_IMPORTED_MODULE_26__["VideoTilesComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarComponent"],
                _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_28__["VideoViewComponent"],
                _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_29__["VideoDialogComponent"],
                _pipes_iframe_pipe__WEBPACK_IMPORTED_MODULE_6__["IframePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["RouterCustomModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // Angular MateriaL
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"]
            ],
            entryComponents: [_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_29__["VideoDialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: RouterCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterCustomModule", function() { return RouterCustomModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-view/video-view.component */ "./src/app/video-view/video-view.component.ts");

// Components

var ROUTES = [
    { path: "", component: _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_1__["VideoViewComponent"] },
    { path: ":page", component: _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_1__["VideoViewComponent"] }
];
var RouterCustomModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  height: 90px;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-heading {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .nav-search {\n    flex: 1;\n    display: flex;\n    align-items: center;\n  }\n}\n\n.spacing {\n  display: block;\n  flex: 1 1 auto;\n}\n\n@media screen and (max-width: 768px) {\n  .spacing {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FER0U7RUFERjtJQUVJLGFBQUE7RUNDRjtBQUNGOztBREdFO0VBREY7SUFFSSxPQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQUU7RUFIRjtJQUlJLGFBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLm5hdi1oZWFkaW5nIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDpcIjc2OHB4XCIpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5uYXYtc2VhcmNoIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDpcIjc2OHB4XCIpIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uc3BhY2luZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDpcIjc2OHB4XCIpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIubmF2IHtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2LWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1zZWFyY2gge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5zcGFjaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNwYWNpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pipes/iframe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/iframe.pipe.ts ***!
  \**************************************/
/*! exports provided: IframePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframePipe", function() { return IframePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var IframePipe = /** @class */ (function () {
    function IframePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    IframePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    IframePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "iframe"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IframePipe);
    return IframePipe;
}());



/***/ }),

/***/ "./src/app/search-input/search-input.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/search-input/search-input.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-input {\n  flex: 1;\n}\n@media screen and (min-width: 768px) {\n  .search-input {\n    min-width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1FLE9BQUE7QUNKRjtBREFFO0VBRkY7SUFHSSxnQkFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1pbnB1dCB7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDpcIjc2OHB4XCIpIHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgZmxleDogMVxufVxuIiwiLnNlYXJjaC1pbnB1dCB7XG4gIGZsZXg6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWlucHV0IHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/search-input/search-input.component.ts":
/*!********************************************************!*\
  !*** ./src/app/search-input/search-input.component.ts ***!
  \********************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/video.service */ "./src/app/services/video.service.ts");



var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent(videoService) {
        this.videoService = videoService;
    }
    SearchInputComponent.prototype.ngOnInit = function () { };
    SearchInputComponent.prototype.addVideo = function (url) {
        this.input = "";
        this.videoService.addVideo(url);
    };
    SearchInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "search-input",
            template: __webpack_require__(/*! raw-loader!./search-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-input/search-input.component.html"),
            styles: [__webpack_require__(/*! ./search-input.component.scss */ "./src/app/search-input/search-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/services/layout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/layout.service.ts ***!
  \********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.viewType = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("tiles");
    }
    LayoutService.prototype.getViewType = function () {
        return this.viewType.asObservable();
    };
    LayoutService.prototype.updateViewType = function (type) {
        this.viewType.next(type);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");






var VideoService = /** @class */ (function () {
    function VideoService(http) {
        var _this = this;
        this.http = http;
        this.videos = [];
        this.onlyFavourites = false;
        this.newestVideosFirst = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.resultVideos = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.videos);
        this.db = new dexie__WEBPACK_IMPORTED_MODULE_5__["default"]("videosDatabase");
        this.db.version(1).stores({
            videos: "id,title,thumbnail,likes,views,url,isFavourite,added"
        });
        this.db.videos.each(function (res) {
            _this.pushVideo(res);
        });
    }
    VideoService.prototype.returnResultVideos = function () {
        var result = this.onlyFavourites ? this.getFavourites() : this.videos;
        this.resultVideos.next(result);
    };
    VideoService.prototype.loadDemo = function () {
        var _this = this;
        this.videos = [];
        this.http.get("../../assets/videos.json").subscribe(function (videos) {
            for (var i = 0; i < videos["length"]; i++) {
                _this.pushVideo(videos[i]);
            }
        });
    };
    VideoService.prototype.addVideo = function (input) {
        if (input.includes("youtu")) {
            var id = input.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/)[1];
            return this.getYoutubeVideoInfo(id);
        }
        if (input.includes("vimeo")) {
            var id = input.match(/(http|https)?:\/\/(www|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/i)[4];
            return this.getVimeoVideoInfo(id);
        }
        if (input.match(/^[A-Za-z0-9_-]{11}$/)) {
            return this.getYoutubeVideoInfo(input);
        }
        if (input.match(/(\d+)(?:|\/\?)/)) {
            return this.getVimeoVideoInfo(input);
        }
    };
    VideoService.prototype.getYoutubeVideoInfo = function (id) {
        var _this = this;
        var url = "https://www.youtube.com/watch?v=" + id;
        this.http
            .get("https://noembed.com/embed?url=" + url)
            .subscribe(function (data) {
            var video = data;
            var likes = Math.round(Math.random() * 1000);
            var views = Math.round(Math.random() * 10000) + likes;
            _this.pushVideo({
                title: video.title,
                thumbnail: video.thumbnail_url,
                likes: likes,
                views: views,
                url: video.url
            });
        });
    };
    VideoService.prototype.getVimeoVideoInfo = function (id) {
        var _this = this;
        this.http
            .get("https://vimeo.com/api/v2/video/" + id + ".json")
            .subscribe(function (data) {
            var video = data[0];
            _this.pushVideo({
                title: video.title,
                thumbnail: video.thumbnail_large,
                likes: video.stats_number_of_likes,
                views: video.stats_number_of_plays,
                url: video.url
            });
        });
    };
    VideoService.prototype.pushVideo = function (video) {
        var vid = Object.assign({
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
            isFavourite: false,
            added: Date.now()
        }, video);
        this.videos.push(vid);
        this.db.videos.add(vid);
        this.returnResultVideos();
    };
    VideoService.prototype.getVideos = function () {
        return this.resultVideos.asObservable();
    };
    VideoService.prototype.clearVideos = function () {
        this.videos = [];
        this.db.videos.clear();
        this.returnResultVideos();
    };
    VideoService.prototype.getFavourites = function () {
        return this.videos.filter(function (video) { return video.isFavourite; });
    };
    VideoService.prototype.getSorting = function () {
        return this.newestVideosFirst.asObservable();
    };
    VideoService.prototype.removeVideo = function (id) {
        this.videos = this.videos.filter(function (video) { return video.id !== id; });
        this.db.videos.delete(id);
        this.returnResultVideos();
    };
    VideoService.prototype.toggleVideoFavourite = function (id) {
        this.videos = this.videos.map(function (video) {
            if (video.id !== id)
                return video;
            else
                return Object.assign(video, { isFavourite: !video.isFavourite });
        });
        this.returnResultVideos();
    };
    VideoService.prototype.updateFilter = function (value) {
        this.onlyFavourites = value;
        this.returnResultVideos();
    };
    VideoService.prototype.updateSorting = function (value) {
        var bool = value === "new" ? true : false;
        this.newestVideosFirst.next(bool);
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.scss":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  font-weight: 400;\n}\n@media screen and (max-width: 768px) {\n  .toolbar {\n    height: auto;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding-top: 1rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .toolbar-slide {\n    width: 100%;\n  }\n}\n.spacing {\n  display: block;\n  flex: 1 1 auto;\n}\n@media screen and (max-width: 768px) {\n  .spacing-mobile {\n    display: block;\n    flex: 1 1 auto;\n  }\n}\n.sort-label {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFIRjtJQUlJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQkFBQTtFQ0VGO0FBQ0Y7QURFRTtFQURGO0lBRUksV0FBQTtFQ0VGO0FBQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7QURHRTtFQURGO0lBRUksY0FBQTtJQUNBLGNBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICBmb250LXdlaWdodDogNDAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6XCI3NjhweFwiKSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbn1cblxuLnRvb2xiYXItc2xpZGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOlwiNzY4cHhcIikge1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxufVxuXG4uc3BhY2luZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNwYWNpbmctbW9iaWxlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDpcIjc2OHB4XCIpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuXG4uc29ydC1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuIiwiLnRvb2xiYXIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvb2xiYXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b29sYmFyLXNsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc3BhY2luZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNwYWNpbmctbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuXG4uc29ydC1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(videoService, layoutService) {
        this.videoService = videoService;
        this.layoutService = layoutService;
        this.checked = false;
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.isChecked = function (e) {
        this.checked = e.checked;
        this.videoService.updateFilter(this.checked);
    };
    ToolbarComponent.prototype.sortBy = function (e) {
        this.videoService.updateSorting(e.value);
    };
    ToolbarComponent.prototype.updateView = function (view) {
        this.layoutService.updateViewType(view);
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-toolbar",
            template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/video-card/video-card.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-card/video-card.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-card {\n  margin-bottom: 1rem;\n}\n\n.video-thumbnail {\n  cursor: pointer;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 210px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvdmlkZW8tY2FyZC92aWRlby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby1jYXJkL3ZpZGVvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby1jYXJkL3ZpZGVvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi52aWRlby10aHVtYm5haWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDIxMHB4O1xufVxuIiwiLnZpZGVvLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udmlkZW8tdGh1bWJuYWlsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAyMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video-card/video-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-card/video-card.component.ts ***!
  \****************************************************/
/*! exports provided: VideoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCardComponent", function() { return VideoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoCardComponent = /** @class */ (function () {
    function VideoCardComponent() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFavourite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoCardComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoCardComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoCardComponent.prototype, "onFavourite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoCardComponent.prototype, "onDialog", void 0);
    VideoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "video-card",
            template: __webpack_require__(/*! raw-loader!./video-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-card/video-card.component.html"),
            styles: [__webpack_require__(/*! ./video-card.component.scss */ "./src/app/video-card/video-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoCardComponent);
    return VideoCardComponent;
}());



/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-iframe-wrapper {\n  position: relative;\n  /* 16:9 */\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvdmlkZW8tZGlhbG9nL3ZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8tZGlhbG9nL3ZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0ksa0JBQUE7RUFDSCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC92aWRlby1kaWFsb2cvdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWlmcmFtZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiAxNjo5ICovXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIGhlaWdodDogMDtcbn1cblxuLnZpZGVvLWlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4iLCIudmlkZW8taWZyYW1lLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIDE2OjkgKi9cbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4udmlkZW8taWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: VideoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDialogComponent", function() { return VideoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var VideoDialogComponent = /** @class */ (function () {
    function VideoDialogComponent(data, http) {
        this.data = data;
        this.http = http;
        this.embed = "";
    }
    VideoDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("http://noembed.com/embed?url=" + this.data.url)
            .subscribe(function (response) {
            var html = response['html'];
            _this.embed = html.match(/src="([^"]+)"/)[1];
        });
    };
    VideoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "video-dialog",
            template: __webpack_require__(/*! raw-loader!./video-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-dialog/video-dialog.component.html"),
            styles: [__webpack_require__(/*! ./video-dialog.component.scss */ "./src/app/video-dialog/video-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VideoDialogComponent);
    return VideoDialogComponent;
}());



/***/ }),

/***/ "./src/app/video-list-item/video-list-item.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/video-list-item/video-list-item.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-list-item {\n  display: flex;\n  align-items: center;\n  height: 160px;\n  margin-bottom: 1rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background: #fff;\n  font-family: \"Roboto\";\n}\n@media screen and (max-width: 768px) {\n  .video-list-item {\n    height: auto;\n    flex-wrap: wrap;\n  }\n}\n.video-list-image {\n  height: 100%;\n  width: 240px;\n  margin-right: 1.5rem;\n  overflow: hidden;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n  .video-list-image {\n    width: 100%;\n    margin: 0;\n  }\n}\n.video-thumbnail {\n  cursor: pointer;\n  width: 100%;\n  height: 120%;\n}\n.spacing {\n  flex: 1 1 auto;\n}\n.video-action {\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  margin: 0 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .video-action {\n    width: 100%;\n    justify-content: start;\n    padding-bottom: 0.5rem;\n  }\n}\n.video-info {\n  padding: 0.2rem 0;\n}\n@media screen and (max-width: 768px) {\n  .video-info {\n    width: 100%;\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvdmlkZW8tbGlzdC1pdGVtL3ZpZGVvLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8tbGlzdC1pdGVtL3ZpZGVvLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQVZGO0lBV0ksWUFBQTtJQUNBLGVBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUY7QURBRTtFQVRGO0lBVUksV0FBQTtJQUNBLFNBQUE7RUNHRjtBQUNGO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUY7QURBRTtFQVRGO0lBVUksV0FBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxpQkFBQTtBQ0dGO0FEREU7RUFIRjtJQUlJLFdBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWxpc3QtaXRlbS92aWRlby1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOlwiNzY4cHhcIikge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLnZpZGVvLWxpc3QtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6XCI3NjhweFwiKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbn1cblxuLnZpZGVvLXRodW1ibmFpbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwJTtcbn1cblxuLnNwYWNpbmcge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnZpZGVvLWFjdGlvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbjogMCAwLjVyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDpcIjc2OHB4XCIpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cblxuLnZpZGVvLWluZm8ge1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOlwiNzY4cHhcIikge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbiIsIi52aWRlby1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudmlkZW8tbGlzdC1pdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi52aWRlby1saXN0LWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjQwcHg7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aWRlby1saXN0LWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnZpZGVvLXRodW1ibmFpbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwJTtcbn1cblxuLnNwYWNpbmcge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnZpZGVvLWFjdGlvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudmlkZW8tYWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cblxuLnZpZGVvLWluZm8ge1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aWRlby1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/video-list-item/video-list-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video-list-item/video-list-item.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListItemComponent", function() { return VideoListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoListItemComponent = /** @class */ (function () {
    function VideoListItemComponent() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFavourite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListItemComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListItemComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListItemComponent.prototype, "onFavourite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListItemComponent.prototype, "onDialog", void 0);
    VideoListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "video-list-item",
            template: __webpack_require__(/*! raw-loader!./video-list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-list-item/video-list-item.component.html"),
            styles: [__webpack_require__(/*! ./video-list-item.component.scss */ "./src/app/video-list-item/video-list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoListItemComponent);
    return VideoListItemComponent;
}());



/***/ }),

/***/ "./src/app/video-list/video-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-list {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4iLCIudmlkZW8tbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFavourite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VideoListComponent.prototype, "videos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListComponent.prototype, "onFavourite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListComponent.prototype, "onDialog", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "video-list",
            template: __webpack_require__(/*! raw-loader!./video-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.scss */ "./src/app/video-list/video-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/video-tiles/video-tiles.component.scss":
/*!********************************************************!*\
  !*** ./src/app/video-tiles/video-tiles.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXRpbGVzL3ZpZGVvLXRpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-tiles/video-tiles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/video-tiles/video-tiles.component.ts ***!
  \******************************************************/
/*! exports provided: VideoTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTilesComponent", function() { return VideoTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var VideoTilesComponent = /** @class */ (function () {
    function VideoTilesComponent(breakpoints) {
        this.breakpoints = breakpoints;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFavourite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSmallScreen = this.breakpoints.isMatched('(max-width: 1100px)');
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VideoTilesComponent.prototype, "videos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoTilesComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoTilesComponent.prototype, "onFavourite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoTilesComponent.prototype, "onDialog", void 0);
    VideoTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "video-tiles",
            template: __webpack_require__(/*! raw-loader!./video-tiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-tiles/video-tiles.component.html"),
            styles: [__webpack_require__(/*! ./video-tiles.component.scss */ "./src/app/video-tiles/video-tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], VideoTilesComponent);
    return VideoTilesComponent;
}());



/***/ }),

/***/ "./src/app/video-view/video-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-view/video-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.button-floating {\n  position: fixed;\n  bottom: 3%;\n  right: 2%;\n}\n\n.video-router-links {\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcm9sL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvdmlkZW8tYm9va21hcmtzL3NyYy9hcHAvdmlkZW8tdmlldy92aWRlby12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby12aWV3L3ZpZGVvLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXZpZXcvdmlkZW8tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5idXR0b24tZmxvYXRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMyU7XG4gIHJpZ2h0OiAyJTtcbn1cblxuLnZpZGVvLXJvdXRlci1saW5rcyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5idXR0b24tZmxvYXRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMyU7XG4gIHJpZ2h0OiAyJTtcbn1cblxuLnZpZGVvLXJvdXRlci1saW5rcyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video-view/video-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-view/video-view.component.ts ***!
  \****************************************************/
/*! exports provided: VideoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoViewComponent", function() { return VideoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video-dialog/video-dialog.component */ "./src/app/video-dialog/video-dialog.component.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/video.service */ "./src/app/services/video.service.ts");





// Components

// Services


var VideoViewComponent = /** @class */ (function () {
    function VideoViewComponent(videoService, layoutService, snackBar, dialog, route) {
        this.videoService = videoService;
        this.layoutService = layoutService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.route = route;
        this.videos = [];
        this.displayedVideos = [];
        this.newestFirst = true;
    }
    VideoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.page = parseInt(params.get("page")) || 1;
            _this.displayVideos();
        });
        this.videoService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
            _this.sortVideos();
            _this.displayVideos();
        });
        this.videoService.getSorting().subscribe(function (newestFirst) {
            _this.newestFirst = newestFirst;
            _this.sortVideos();
            _this.displayVideos();
        });
        this.layoutService.getViewType().subscribe(function (view) {
            _this.view = view;
        });
    };
    VideoViewComponent.prototype.loadDemo = function () {
        this.videoService.loadDemo();
    };
    VideoViewComponent.prototype.sortVideos = function () {
        if (this.newestFirst) {
            this.videos = this.videos.sort(function (a, b) { return (a.added < b.added ? 1 : -1); });
        }
        else {
            this.videos = this.videos.sort(function (a, b) { return (a.added > b.added ? 1 : -1); });
        }
    };
    VideoViewComponent.prototype.clearVideos = function () {
        this.videoService.clearVideos();
    };
    VideoViewComponent.prototype.displayVideos = function () {
        this.displayedVideos = this.videos.slice((this.page - 1) * 9, (this.page - 1) * 9 + 9);
    };
    VideoViewComponent.prototype.deleteVideo = function (id) {
        this.snackBar.open("Video has been removed.", "", { duration: 2500 });
        this.videoService.removeVideo(id);
    };
    VideoViewComponent.prototype.toggleVideoFavourite = function (id) {
        this.videoService.toggleVideoFavourite(id);
    };
    VideoViewComponent.prototype.openVideoDialog = function (url) {
        this.dialog.open(_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_5__["VideoDialogComponent"], {
            maxWidth: "1080px",
            minWidth: "300px",
            maxHeight: "720px",
            width: window.innerWidth / 1.5 + "px",
            data: { url: url }
        });
    };
    VideoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "video-view",
            template: __webpack_require__(/*! raw-loader!./video-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-view/video-view.component.html"),
            styles: [__webpack_require__(/*! ./video-view.component.scss */ "./src/app/video-view/video-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VideoViewComponent);
    return VideoViewComponent;
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

module.exports = __webpack_require__(/*! /home/karol/Documents/Projects/Web/video-bookmarks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map