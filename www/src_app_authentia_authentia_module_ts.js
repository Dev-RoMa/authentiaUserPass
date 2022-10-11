"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_authentia_authentia_module_ts"],{

/***/ 7100:
/*!*******************************************************!*\
  !*** ./src/app/authentia/authentia-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthentiaPageRoutingModule": () => (/* binding */ AuthentiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentia.page */ 2713);




const routes = [
    {
        path: '',
        component: _authentia_page__WEBPACK_IMPORTED_MODULE_0__.AuthentiaPage
    }
];
let AuthentiaPageRoutingModule = class AuthentiaPageRoutingModule {
};
AuthentiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthentiaPageRoutingModule);



/***/ }),

/***/ 5344:
/*!***********************************************!*\
  !*** ./src/app/authentia/authentia.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthentiaPageModule": () => (/* binding */ AuthentiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _authentia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentia-routing.module */ 7100);
/* harmony import */ var _authentia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentia.page */ 2713);







let AuthentiaPageModule = class AuthentiaPageModule {
};
AuthentiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _authentia_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthentiaPageRoutingModule
        ],
        declarations: [_authentia_page__WEBPACK_IMPORTED_MODULE_1__.AuthentiaPage]
    })
], AuthentiaPageModule);



/***/ }),

/***/ 2713:
/*!*********************************************!*\
  !*** ./src/app/authentia/authentia.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthentiaPage": () => (/* binding */ AuthentiaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _authentia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentia.page.html?ngResource */ 2908);
/* harmony import */ var _authentia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentia.page.scss?ngResource */ 462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AuthentiaPage = class AuthentiaPage {
    ngOnInit() {
    }
};
AuthentiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-authentia',
        template: _authentia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authentia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthentiaPage);



/***/ }),

/***/ 462:
/*!**********************************************************!*\
  !*** ./src/app/authentia/authentia.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#logo ion-content img {\n  width: 64px;\n  height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFSIiwiZmlsZSI6ImF1dGhlbnRpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3tcclxuICAgIGlvbi1jb250ZW50IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 2908:
/*!**********************************************************!*\
  !*** ./src/app/authentia/authentia.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<!-- inicio del header -->\r\n<ion-header>\r\n\r\n<!--  -- inicio del toolbarc-->\r\n    <ion-toolbar>\r\n       <ion-title>Authentia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Contenido de la pagina -->\r\n<ion-content>\r\n\r\n  <ion-label>\r\n    <!-- la camara debe abrir la camara del telefono -->\r\n    <!-- centrar la maldita camara q_q -->\r\n    <ion-img id=\"camera\" src=\"assets/logo-camera.png\" style=\"width:25%\"> </ion-img>\r\n    <!-- el QR debe redirigir a la pagina de la institución educativa-->\r\n    <!-- el QR debe estar hacia la derecha (es estetico xd)-->\r\n    <ion-img id=\"QR\" src=\"assets/QR-code-duoc.png\" style=\"width:25%\"> </ion-img>\r\n  </ion-label>\r\n  <ion-label></ion-label>\r\n\r\n        <!--boton para volver-->\r\n\r\n        <ion-item>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\" mode=\"md\"></ion-back-button>\r\n            <ion-text>Volver </ion-text>\r\n          </ion-buttons>\r\n          </ion-item>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"background-color:yellow;\">\r\n  <ion-text>Si tienes problemas: </ion-text>\r\n  <ion-text>Contacta a tu coordinador de carrera</ion-text>\r\n  <div><br></div>\r\n  <div><ion-text>Mesa de Servicios</ion-text></div>\r\n  <div><ion-text>(+56) 44220 1098</ion-text></div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_authentia_authentia_module_ts.js.map