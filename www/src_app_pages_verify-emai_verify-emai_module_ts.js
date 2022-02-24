"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_verify-emai_verify-emai_module_ts"],{

/***/ 1828:
/*!*****************************************************************!*\
  !*** ./src/app/pages/verify-emai/verify-emai-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmaiPageRoutingModule": () => (/* binding */ VerifyEmaiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _verify_emai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-emai.page */ 2974);




const routes = [
    {
        path: '',
        component: _verify_emai_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmaiPage
    }
];
let VerifyEmaiPageRoutingModule = class VerifyEmaiPageRoutingModule {
};
VerifyEmaiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmaiPageRoutingModule);



/***/ }),

/***/ 3123:
/*!*********************************************************!*\
  !*** ./src/app/pages/verify-emai/verify-emai.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmaiPageModule": () => (/* binding */ VerifyEmaiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _verify_emai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-emai-routing.module */ 1828);
/* harmony import */ var _verify_emai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-emai.page */ 2974);







let VerifyEmaiPageModule = class VerifyEmaiPageModule {
};
VerifyEmaiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_emai_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmaiPageRoutingModule
        ],
        declarations: [_verify_emai_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmaiPage]
    })
], VerifyEmaiPageModule);



/***/ }),

/***/ 2974:
/*!*******************************************************!*\
  !*** ./src/app/pages/verify-emai/verify-emai.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmaiPage": () => (/* binding */ VerifyEmaiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Ajith_easy_cashbook_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_emai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verify-emai.page.html */ 7186);
/* harmony import */ var _verify_emai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-emai.page.scss */ 5032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 6636);





let VerifyEmaiPage = class VerifyEmaiPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
VerifyEmaiPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
VerifyEmaiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verify-emai',
        template: _D_Ajith_easy_cashbook_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_emai_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_verify_emai_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyEmaiPage);



/***/ }),

/***/ 7186:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/verify-emai/verify-emai.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>verify-emai</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"displayTable\">\n    <div class=\"displayTableCell\">\n      <div class=\"authBlock\">\n        <h3>Thank You for Registering</h3>\n        <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n        </div>\n        \n        <!-- Calling SendVerificationMail() method using authService Api -->\n        <div class=\"formGroup\">\n          <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n            <i class=\"fas fa-redo-alt\"></i>\n            Resend Verification Email\n          </button>\n        </div>\n      </div>\n      <div class=\"redirectToLogin\">\n        <span>Go back to?<span class=\"redirect\" routerLink=\"/sign-in\"> Sign in</span></span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 5032:
/*!*********************************************************!*\
  !*** ./src/app/pages/verify-emai/verify-emai.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verify-emai_verify-emai_module_ts.js.map