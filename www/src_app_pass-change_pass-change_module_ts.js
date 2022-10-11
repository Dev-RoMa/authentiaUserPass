"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pass-change_pass-change_module_ts"],{

/***/ 1895:
/*!***********************************************************!*\
  !*** ./src/app/pass-change/pass-change-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassChangePageRoutingModule": () => (/* binding */ PassChangePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pass_change_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-change.page */ 1368);




const routes = [
    {
        path: '',
        component: _pass_change_page__WEBPACK_IMPORTED_MODULE_0__.PassChangePage
    }
];
let PassChangePageRoutingModule = class PassChangePageRoutingModule {
};
PassChangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PassChangePageRoutingModule);



/***/ }),

/***/ 5231:
/*!***************************************************!*\
  !*** ./src/app/pass-change/pass-change.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassChangePageModule": () => (/* binding */ PassChangePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pass_change_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-change-routing.module */ 1895);
/* harmony import */ var _pass_change_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass-change.page */ 1368);







let PassChangePageModule = class PassChangePageModule {
};
PassChangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pass_change_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassChangePageRoutingModule
        ],
        declarations: [_pass_change_page__WEBPACK_IMPORTED_MODULE_1__.PassChangePage]
    })
], PassChangePageModule);



/***/ }),

/***/ 1368:
/*!*************************************************!*\
  !*** ./src/app/pass-change/pass-change.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassChangePage": () => (/* binding */ PassChangePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pass_change_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-change.page.html?ngResource */ 2146);
/* harmony import */ var _pass_change_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass-change.page.scss?ngResource */ 1922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 3773);





let PassChangePage = class PassChangePage {
    constructor(dbService) {
        this.dbService = dbService;
        this.md_nPass = '';
        this.md_user = '';
    }
    ngOnInit() {
    }
    userV() {
        this.dbService.userValidation(this.md_user, this.md_nPass);
    }
};
PassChangePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService }
];
PassChangePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pass-change',
        template: _pass_change_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pass_change_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PassChangePage);



/***/ }),

/***/ 1922:
/*!**************************************************************!*\
  !*** ./src/app/pass-change/pass-change.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzLWNoYW5nZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2146:
/*!**************************************************************!*\
  !*** ./src/app/pass-change/pass-change.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>pass-change</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Input Usuario \r\n    <div class=\"ion-text-center ion-padding\">\r\n      <ion-item>\r\n        <ion-label class =\"user\" position=\"floating\" > Usuario </ion-label>\r\n        <ion-input [(ngModel)]=\"md_user\"></ion-input>\r\n      </ion-item>\r\n      -->\r\n      <div><br></div>\r\n      <div><br></div>\r\n      <div><br></div>\r\n\r\n      <!-- Input usuario -->\r\n\r\n      <ion-item>\r\n        <ion-label class =\"user\" position=\"floating\" > Usuario </ion-label>\r\n        <ion-input [(ngModel)]=\"md_user\"></ion-input>\r\n      </ion-item>\r\n\r\n      <div><br></div>\r\n      <div><br></div>\r\n      <div><br></div>\r\n      <!-- Input contraseña (debe estar con **; usar \"type = password\")-->\r\n      <ion-item>\r\n        <ion-label class=\"nPass\" position=\"floating\" > Contraseña Nueva </ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"md_nPass\"></ion-input>\r\n      </ion-item>\r\n      \r\n      <div><br></div>\r\n      <div><br></div>\r\n      <div><br></div>\r\n      <!-- boton encontrar usuario y cambiar contraseña -->\r\n\r\n      <ion-row>\r\n        <ion-item>\r\n          <ion-button (click) =\"userV()\" expand=\"block\" class=\"degradado\"> Cambiar contraseña </ion-button>\r\n        </ion-item>\r\n      </ion-row>\r\n      \r\n      <!--boton para volver-->\r\n\r\n      <ion-item>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\" mode=\"md\"></ion-back-button>\r\n        <ion-text>Volver </ion-text>\r\n      </ion-buttons>\r\n      </ion-item>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"background-color:yellow;\" >\r\n  <ion-text>Si tienes problemas con la contraseña</ion-text>\r\n  <div><br></div>\r\n  <div><ion-text>Mesa de Servicios</ion-text></div>\r\n  <div><ion-text>(+56) 44220 1098</ion-text></div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pass-change_pass-change_module_ts.js.map