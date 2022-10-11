"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main-page_main-page_module_ts"],{

/***/ 6992:
/*!*******************************************************!*\
  !*** ./src/app/main-page/main-page-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPagePageRoutingModule": () => (/* binding */ MainPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.page */ 6819);




const routes = [
    {
        path: '',
        component: _main_page_page__WEBPACK_IMPORTED_MODULE_0__.MainPagePage
    }
];
let MainPagePageRoutingModule = class MainPagePageRoutingModule {
};
MainPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPagePageRoutingModule);



/***/ }),

/***/ 6698:
/*!***********************************************!*\
  !*** ./src/app/main-page/main-page.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPagePageModule": () => (/* binding */ MainPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page-routing.module */ 6992);
/* harmony import */ var _main_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.page */ 6819);







let MainPagePageModule = class MainPagePageModule {
};
MainPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPagePageRoutingModule
        ],
        declarations: [_main_page_page__WEBPACK_IMPORTED_MODULE_1__.MainPagePage]
    })
], MainPagePageModule);



/***/ }),

/***/ 6819:
/*!*********************************************!*\
  !*** ./src/app/main-page/main-page.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPagePage": () => (/* binding */ MainPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.page.html?ngResource */ 7547);
/* harmony import */ var _main_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.page.scss?ngResource */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 3773);





let MainPagePage = class MainPagePage {
    constructor(db) {
        this.db = db;
        this.md_user = '';
        this.md_pass = '';
    }
    ngOnInit() {
    }
    login() {
        if (!this.db.validateCredentials(this.md_user, this.md_pass)) {
        }
    }
};
MainPagePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService }
];
MainPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-main-page',
        template: _main_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPagePage);



/***/ }),

/***/ 9181:
/*!**********************************************************!*\
  !*** ./src/app/main-page/main-page.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#logo ion-content img {\n  align-items: start;\n}\n\n.user ion-label {\n  max-width: 75%;\n}\n\n.pass ion-label {\n  max-width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQUFSOztBQUtJO0VBQ0EsY0FBQTtBQUZKOztBQU9JO0VBRUEsY0FBQTtBQUxKIiwiZmlsZSI6Im1haW4tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XHJcbiAgICBpb24tY29udGVudCBpbWcge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOnN0YXJ0XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2Vye1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgIG1heC13aWR0aDo3NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXNze1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgIFxyXG4gICAgbWF4LXdpZHRoOjc1JTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 7547:
/*!**********************************************************!*\
  !*** ./src/app/main-page/main-page.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<!-- inicio del header -->\r\n<ion-header>\r\n\r\n<!-- inicio del toolbar -->\r\n  <ion-toolbar>\r\n    <ion-title> Main </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- inicio del contenido -->\r\n<ion-content>\r\n  <ion-grid>\r\n  <!-- Input Usuario -->\r\n  <div class=\"ion-text-center ion-padding\">\r\n  <ion-item>\r\n    <ion-label class =\"user\" position=\"floating\" > Usuario </ion-label>\r\n    <ion-input [(ngModel)]=\"md_user\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Input contraseña (debe estar con **; usar \"type = password\")-->\r\n  <ion-item>\r\n    <ion-label class=\"pass\" position=\"floating\" > Contraseña </ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"md_pass\"></ion-input>\r\n  </ion-item>\r\n  </div>\r\n\r\n  <!--boton de ingreso-->\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-button (click) =\"login()\" expand=\"block\" class=\"degradado\"> Ingresar </ion-button>\r\n      </ion-item>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!--boton de recuperación-->\r\n  <ion-item>\r\n    <ion-label>\r\n    <a href=\"/pass-change\"> ¿Olvidaste tu contraseña? </a>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n<!-- fin del contenido-->\r\n\r\n<!-- footer\r\n<ion-footer style=\"background-color:blue\">\r\n  <ion-toolbar>\r\n    <ion-title>Footer</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n-- fin del footer -->\r\n\r\n<ion-footer style=\"background-color:yellow;\" >\r\n    <ion-text>¡Contactanos!</ion-text>\r\n    <ion-label>\r\n      <div><br></div>\r\n      <div><ion-text>(+56) 2 2999 3862</ion-text></div>\r\n      <div><ion-text>Admisión</ion-text></div>\r\n      <div><ion-text>(+56) 227 120 640</ion-text></div>\r\n      <div><ion-text>Cursos y Diplomados</ion-text></div>\r\n      <div><ion-text>(+56) 442201096</ion-text></div>\r\n      <div><ion-text>Mesa de Servicios</ion-text></div>\r\n      <div><ion-text>(+56) 44220 1098</ion-text></div>\r\n      <div><ion-text>Servicios Académicos</ion-text></div>\r\n      <div><ion-text>Servicios de Financiamiento</ion-text></div>\r\n      <div><ion-text>Servicios de Vida Estudiantil</ion-text></div>\r\n      <div><ion-text>Servicios Tecnológicos</ion-text></div>\r\n      <div><ion-text>Otros Servicios</ion-text></div>\r\n    </ion-label>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main-page_main-page_module_ts.js.map