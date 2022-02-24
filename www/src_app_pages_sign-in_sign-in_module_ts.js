"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sign-in_sign-in_module_ts"],{

/***/ 9595:
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ 9267);




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__.SignInPage
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ 1447:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-routing.module */ 9595);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page */ 9267);







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage]
    })
], SignInPageModule);



/***/ }),

/***/ 9267:
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Ajith_easy_cashbook_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sign-in.page.html */ 7725);
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss */ 4160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 6636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);






let SignInPage = class SignInPage {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
        });
    }
    get errorControl() {
        return this.loginForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.loginForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            let data = this.loginForm.value;
            console.log(this.loginForm.value);
            this.authService.SignIn(data.userName, data.userPassword).then(res => {
                console.log(res);
            });
        }
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sign-in',
        template: _D_Ajith_easy_cashbook_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignInPage);



/***/ }),

/***/ 7725:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sign-in/sign-in.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>sign-in</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!-- <ion-content> -->\r\n\r\n  <ion-content color=\"tertiary\">\r\n\r\n    <!-- lOGO sECTION -->\r\n    <div class=\"logo_section ion-text-center\">\r\n      <h3>Hello Again!</h3>\r\n      <h4>Welcome back you've been missed!</h4>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" class=\"radius-form\" novalidate>\r\n      \r\n      <ion-item lines=\"none\">\r\n        <!-- <ion-label position=\"floating\">Email</ion-label> -->\r\n        <ion-input placeholder=\"Email\" formControlName=\"userName\" type=\"email\"></ion-input>\r\n      </ion-item>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.userName.errors?.required\">\r\n        Email is required.\r\n      </span>\r\n      \r\n\r\n      <ion-item lines=\"none\">\r\n        <!-- <ion-label position=\"floating\">Password</ion-label> -->\r\n        <ion-input placeholder=\"Password\" formControlName=\"userPassword\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.userPassword.errors?.required\">\r\n        password is required.\r\n      </span>\r\n\r\n      <!-- Forgot password Link -->\r\n      <div class=\"ion-text-right forgot\">\r\n        <ion-text  routerLink=\"/forgot-password\">Forgot Password</ion-text>\r\n      </div>\r\n     \r\n      <div>\r\n        <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">Submit</ion-button>\r\n      </div>\r\n\r\n      <!-- Social Logins -->\r\n      <div class=\"ion-text-center social\">\r\n        <ion-text >or Continue With</ion-text>\r\n        <ion-row>\r\n          <!-- <ion-col> -->\r\n            <div class=\"img\" (click)=\"authService.GoogleAuth()\">\r\n              <ion-icon src=\"../assets/icon/google.svg\"></ion-icon>\r\n            </div>\r\n          <!-- </ion-col>\r\n          <ion-col> -->\r\n            <div class=\"img\">\r\n              <ion-icon src=\"../assets/icon/facebook.svg\"></ion-icon>\r\n            </div>\r\n          <!-- </ion-col> -->\r\n        </ion-row>\r\n      </div>\r\n\r\n      <!-- Signup link -->\r\n      <div class=\"not-user ion-text-center\">\r\n        <ion-text >Not a Member </ion-text>\r\n        <ion-text  routerLink=\"/sign-up\" style=\"color:#0882de;\">Register Now</ion-text>\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n      <div class=\"authBlock\">\r\n        <h3>Sign In</h3>\r\n        <div class=\"formGroup\">\r\n          <input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPassword required>\r\n        </div>\r\n        \r\n        <div class=\"formGroup\">\r\n          <input type=\"button\" class=\"btn btnPrimary\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <span class=\"or\"><span class=\"orInner\">Or</span></span>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\r\n            <i class=\"fab fa-google-plus-g\"></i>\r\n            Log in with Google\r\n          </button>\r\n        </div>\r\n        <div class=\"forgotPassword\">\r\n          <span routerLink=\"/forgot-password\">Forgot Password?</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"redirectToLogin\">\r\n        <span>Don't have an account?<span class=\"redirect\" routerLink=\"/sign-up\"> Sign Up</span></span>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 4160:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-text {\n  font-size: 14px;\n}\nion-content .logo_section {\n  margin-bottom: 46px;\n  margin-top: 25px;\n}\nion-content .logo_section h3 {\n  font-weight: 600;\n  font-size: 24px;\n  color: #3e3e3e;\n}\nion-content .logo_section h4 {\n  color: #696b6c;\n}\nion-content .forgot {\n  margin-bottom: 25px;\n  margin-top: 19px;\n}\nion-content .social {\n  margin-top: 19px;\n  margin-bottom: 20px;\n}\nion-content .social ion-row {\n  justify-content: center;\n  margin-top: 25px;\n}\nion-content .social .img {\n  border: 2px solid white;\n  padding: 5px;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 50px;\n  border-radius: 7px;\n  margin: 0 10px;\n}\nion-content .social .img ion-icon {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBRUk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDWjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBRUk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0FBRWhCIiwiZmlsZSI6InNpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuICAgIC5sb2dvX3NlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM2UzZTNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgY29sb3I6ICM2OTZiNmM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcmdvdHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICB9XHJcbiAgICAuc29jaWFse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMTBweDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sign-in_sign-in_module_ts.js.map