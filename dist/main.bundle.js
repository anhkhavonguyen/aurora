webpackJsonp([1,5],{

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 214;


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(230);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(295),
            styles: [__webpack_require__(284)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_routing__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_account_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { MaterializeModule } from 'angular2-materialize';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                //MaterializeModule,
                __WEBPACK_IMPORTED_MODULE_10__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_9__users_users_routing__["a" /* usersRouting */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__account_account_service__["a" /* AccountService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: 'not-found' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__(297),
            styles: [__webpack_require__(286)]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicValidators; });
var BasicValidators = /** @class */ (function () {
    function BasicValidators() {
    }
    BasicValidators.email = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(control.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return BasicValidators;
}());

//# sourceMappingURL=basic-validators.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_users_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_form_user_form_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_form_user_form_component__["a" /* UserFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_users_service__["a" /* UsersService */]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usersRouting; });



var usersRoutes = [
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__users_component__["a" /* UsersComponent */], pathMatch: 'full' },
    { path: 'users/new', component: __WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__["a" /* UserFormComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__["a" /* UserFormComponent */] }
];
var usersRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(usersRoutes);
//# sourceMappingURL=users.routing.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".homepage{\r\n    text-align:  center;\r\n    margin-top: 80px;\r\n}\r\n\r\n.input-content{\r\n    max-width: 100%;\r\n    width: 30%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.sign-in{\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    color: gray;\r\n} \r\n\r\n.sign-in-active{\r\n    color: green;\r\n}\r\n\r\n.setup{\r\n    color: green;\r\n}\r\n\r\n.forgot{\r\n    color: green;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.username{\r\n    margin-top: 15px;\r\n}\r\n\r\n.btn-account{\r\n    border-right-width: 0;\r\n    border-bottom-width: 0;\r\n    border-bottom-left-radius: 0px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.input-account{\r\n    border-left-width: 0;\r\n    border-bottom-width: 0;\r\n    border-bottom-right-radius:0px;\r\n    border-bottom-style:none;\r\n    box-shadow: none;\r\n}\r\n\r\n.btn-password{\r\n    border-right-width: 0;\r\n    border-top-width: 0;\r\n    border-top-left-radius: 0px;\r\n    margin-top: -3px;\r\n}\r\n\r\n.input-password{\r\n    border-left-width: 0;\r\n    border-top-width: 0;\r\n    border-top-right-radius:0px;\r\n    border-top-style:none;\r\n    box-shadow: none;\r\n    margin-top: -4px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n    .input-content{\r\n        max-width: 100%;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 82,
	"./af.js": 82,
	"./ar": 89,
	"./ar-dz": 83,
	"./ar-dz.js": 83,
	"./ar-kw": 84,
	"./ar-kw.js": 84,
	"./ar-ly": 85,
	"./ar-ly.js": 85,
	"./ar-ma": 86,
	"./ar-ma.js": 86,
	"./ar-sa": 87,
	"./ar-sa.js": 87,
	"./ar-tn": 88,
	"./ar-tn.js": 88,
	"./ar.js": 89,
	"./az": 90,
	"./az.js": 90,
	"./be": 91,
	"./be.js": 91,
	"./bg": 92,
	"./bg.js": 92,
	"./bn": 93,
	"./bn.js": 93,
	"./bo": 94,
	"./bo.js": 94,
	"./br": 95,
	"./br.js": 95,
	"./bs": 96,
	"./bs.js": 96,
	"./ca": 97,
	"./ca.js": 97,
	"./cs": 98,
	"./cs.js": 98,
	"./cv": 99,
	"./cv.js": 99,
	"./cy": 100,
	"./cy.js": 100,
	"./da": 101,
	"./da.js": 101,
	"./de": 104,
	"./de-at": 102,
	"./de-at.js": 102,
	"./de-ch": 103,
	"./de-ch.js": 103,
	"./de.js": 104,
	"./dv": 105,
	"./dv.js": 105,
	"./el": 106,
	"./el.js": 106,
	"./en-au": 107,
	"./en-au.js": 107,
	"./en-ca": 108,
	"./en-ca.js": 108,
	"./en-gb": 109,
	"./en-gb.js": 109,
	"./en-ie": 110,
	"./en-ie.js": 110,
	"./en-nz": 111,
	"./en-nz.js": 111,
	"./eo": 112,
	"./eo.js": 112,
	"./es": 114,
	"./es-do": 113,
	"./es-do.js": 113,
	"./es.js": 114,
	"./et": 115,
	"./et.js": 115,
	"./eu": 116,
	"./eu.js": 116,
	"./fa": 117,
	"./fa.js": 117,
	"./fi": 118,
	"./fi.js": 118,
	"./fo": 119,
	"./fo.js": 119,
	"./fr": 122,
	"./fr-ca": 120,
	"./fr-ca.js": 120,
	"./fr-ch": 121,
	"./fr-ch.js": 121,
	"./fr.js": 122,
	"./fy": 123,
	"./fy.js": 123,
	"./gd": 124,
	"./gd.js": 124,
	"./gl": 125,
	"./gl.js": 125,
	"./gom-latn": 126,
	"./gom-latn.js": 126,
	"./he": 127,
	"./he.js": 127,
	"./hi": 128,
	"./hi.js": 128,
	"./hr": 129,
	"./hr.js": 129,
	"./hu": 130,
	"./hu.js": 130,
	"./hy-am": 131,
	"./hy-am.js": 131,
	"./id": 132,
	"./id.js": 132,
	"./is": 133,
	"./is.js": 133,
	"./it": 134,
	"./it.js": 134,
	"./ja": 135,
	"./ja.js": 135,
	"./jv": 136,
	"./jv.js": 136,
	"./ka": 137,
	"./ka.js": 137,
	"./kk": 138,
	"./kk.js": 138,
	"./km": 139,
	"./km.js": 139,
	"./kn": 140,
	"./kn.js": 140,
	"./ko": 141,
	"./ko.js": 141,
	"./ky": 142,
	"./ky.js": 142,
	"./lb": 143,
	"./lb.js": 143,
	"./lo": 144,
	"./lo.js": 144,
	"./lt": 145,
	"./lt.js": 145,
	"./lv": 146,
	"./lv.js": 146,
	"./me": 147,
	"./me.js": 147,
	"./mi": 148,
	"./mi.js": 148,
	"./mk": 149,
	"./mk.js": 149,
	"./ml": 150,
	"./ml.js": 150,
	"./mr": 151,
	"./mr.js": 151,
	"./ms": 153,
	"./ms-my": 152,
	"./ms-my.js": 152,
	"./ms.js": 153,
	"./my": 154,
	"./my.js": 154,
	"./nb": 155,
	"./nb.js": 155,
	"./ne": 156,
	"./ne.js": 156,
	"./nl": 158,
	"./nl-be": 157,
	"./nl-be.js": 157,
	"./nl.js": 158,
	"./nn": 159,
	"./nn.js": 159,
	"./pa-in": 160,
	"./pa-in.js": 160,
	"./pl": 161,
	"./pl.js": 161,
	"./pt": 163,
	"./pt-br": 162,
	"./pt-br.js": 162,
	"./pt.js": 163,
	"./ro": 164,
	"./ro.js": 164,
	"./ru": 165,
	"./ru.js": 165,
	"./sd": 166,
	"./sd.js": 166,
	"./se": 167,
	"./se.js": 167,
	"./si": 168,
	"./si.js": 168,
	"./sk": 169,
	"./sk.js": 169,
	"./sl": 170,
	"./sl.js": 170,
	"./sq": 171,
	"./sq.js": 171,
	"./sr": 173,
	"./sr-cyrl": 172,
	"./sr-cyrl.js": 172,
	"./sr.js": 173,
	"./ss": 174,
	"./ss.js": 174,
	"./sv": 175,
	"./sv.js": 175,
	"./sw": 176,
	"./sw.js": 176,
	"./ta": 177,
	"./ta.js": 177,
	"./te": 178,
	"./te.js": 178,
	"./tet": 179,
	"./tet.js": 179,
	"./th": 180,
	"./th.js": 180,
	"./tl-ph": 181,
	"./tl-ph.js": 181,
	"./tlh": 182,
	"./tlh.js": 182,
	"./tr": 183,
	"./tr.js": 183,
	"./tzl": 184,
	"./tzl.js": 184,
	"./tzm": 186,
	"./tzm-latn": 185,
	"./tzm-latn.js": 185,
	"./tzm.js": 186,
	"./uk": 187,
	"./uk.js": 187,
	"./ur": 188,
	"./ur.js": 188,
	"./uz": 190,
	"./uz-latn": 189,
	"./uz-latn.js": 189,
	"./uz.js": 190,
	"./vi": 191,
	"./vi.js": 191,
	"./x-pseudo": 192,
	"./x-pseudo.js": 192,
	"./yo": 193,
	"./yo.js": 193,
	"./zh-cn": 194,
	"./zh-cn.js": 194,
	"./zh-hk": 195,
	"./zh-hk.js": 195,
	"./zh-tw": 196,
	"./zh-tw.js": 196
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 291;


/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<div class=\"container homepage\">\n  <div>\n    <img src=\"../assets/findMyIphone.png\" width=\"100px\" height=\"100px\">\n    <h3>Find My iPhone</h3>\n  </div>\n  <form #f=\"ngForm\" novalidate>\n  <div class=\"input-content\">\n        <div class=\"row username\">\n            <div class=\"input-group\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default btn-account\" >Apple ID</button>\n              </span>\n              <input name=\"username\" [(ngModel)]=\"appleAccount.appleId\" type=\"text\" class=\"input-account form-control\" placeholder=\"example@icloud.com\">\n            </div>\n          </div>\n          <div class=\"row password\">\n            <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default btn-password\" >Password</button>\n                </span>\n              <input type=\"password\" #password=\"ngModel\" name=\"hashedpassword\" [(ngModel)]=\"appleAccount.pass\"  class=\"input-password form-control\" placeholder=\"required\">\n              <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                  Password is required \n              </small>\n            </div>\n          </div>\n  </div>\n    <div class=\"action\">\n        \n        <h3 class=\"sign-in\" type=\"submit\" ng-class=\"{'sign-in-active': appleAccount.appleId != null }\" (click)=\"addUser()\">Sign In...</h3>\n        <div class=\"row forgot\">\n          <a class=\"forgot\" href=\"https://iforgot.apple.com/password/verify/appleid\">Forgot Apple ID or Password?</a>\n        </div>\n        <div class=\"row\">\n          <a class=\"setup\" href=\"https://www.apple.com/icloud/setup/\">Setup Instructions</a>\n        </div>\n    </div>\n  </form>\n</div>\n\n<!-- <button type=\"submit\" class=\"btn btn-default\">Submit</button> -->\n\n<!-- <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n    \n        <div class=\"form-group\">\n          <label for=\"\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"user.password\" required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n          <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n            Password is required\n          </small>\n          <pre *ngIf=\"password.errors\" class=\"margin-20\">{{ password.errors | json }}</pre>\n        </div>\n    \n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    \n      </form> -->\n"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a routerLink=\"\" class=\"brand-logo\">Angular 2 CRUD</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li><a routerLink=\"/users\" routerLinkActive=\"active\">Users</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<h5>Not Found</h5>\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<h5>{{ title }}</h5>\n<div class=\"row\">\n  <form materialize class=\"col s12\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">account_circle</i>\n        <input id=\"name\" type=\"text\" class=\"validate\"\n               [(ngModel)]=\"user.name\" formControlName=\"name\"\n               [class.invalid]=\"form.controls['name'].touched && !form.controls['name'].valid\"\n        >\n        <label for=\"name\"\n               [class.active]=\"user.name\"\n               data-error=\"Name is required and needs to contain at least 3 chars\">\n          Name\n        </label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">email</i>\n        <input id=\"email\" type=\"email\" class=\"validate\"\n               [(ngModel)]=\"user.email\" formControlName=\"email\"\n               [class.invalid]=\"form.controls['email'].touched && !form.controls['email'].valid\">\n        <label for=\"email\"\n               [class.active]=\"user.email\"\n               data-error=\"Invalid Email\">\n          Email\n        </label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">phone</i>\n        <input id=\"phone\" type=\"text\" class=\"validate\"\n               [(ngModel)]=\"user.phone\" formControlName=\"phone\">\n        <label for=\"phone\" [class.active]=\"user.phone\">Phone</label>\n      </div>\n    </div>\n    <div formGroupName=\"address\">\n      <div class=\"row\">\n        <div class=\"input-field col s8\">\n          <i class=\"material-icons prefix\">place</i>\n          <input id=\"street\" type=\"text\" class=\"validate\"\n                 [(ngModel)]=\"user.address.street\" formControlName=\"street\"\n                 [class.invalid]=\"form.controls['address'].controls['street'].touched\n                  && !form.controls['address'].controls['street'].valid\">\n          <label for=\"street\"\n                 [class.active]=\"user.address.street\"\n                 data-error=\"Invalid Street\">\n            Street\n          </label>\n        </div>\n        <div class=\"input-field col s4\">\n          <input id=\"suite\" type=\"text\" class=\"validate\"\n                 [(ngModel)]=\"user.address.suite\" formControlName=\"suite\">\n          <label for=\"suite\" [class.active]=\"user.address.suite\">Suite</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s8\">\n          <i class=\"material-icons prefix\">map</i>\n          <input id=\"city\" type=\"text\" class=\"validate\"\n                 [(ngModel)]=\"user.address.city\" formControlName=\"city\">\n          <label for=\"city\" [class.active]=\"user.address.city\">City</label>\n        </div>\n        <div class=\"input-field col s4\">\n          <input id=\"zipcode\" type=\"text\" class=\"validate\"\n                 [(ngModel)]=\"user.address.zipcode\" formControlName=\"zipcode\"\n                 [class.invalid]=\"form.controls['address'].controls['zipcode'].touched\n                  && !form.controls['address'].controls['zipcode'].valid\">\n          <label for=\"zipcode\"\n                 [class.active]=\"user.address.zipcode\"\n                 data-error=\"Invalid ZipCode\">\n            ZipCode\n          </label>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\"\n            [disabled]=\"!form.valid\">\n      Submit<i class=\"material-icons right\">send</i>\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>User Management</h2>\n  <p>Total: {{ users.length }} users.</p>            \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Number</th>\n        <th>Apple ID</th>\n        <th>Password</th>\n        <th>IsValid</th>\n        <th>DateTime</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users\">\n            <td>{{ user.Oid }}</td>\n            <td>{{ user.UserName }}</td>\n            <td>{{ user.Password }}</td>\n            <td>{{user.IsValid ? \"Yes\":\"No\"}}</td>\n            <td>{{ user.SignInTime | date:'dd/MM/yyyy hh:mm:ss' }}</td>\n          </tr>\n    </tbody>\n  </table>\n</div>\n\n\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(215);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        //private url: string = "http://jsonplaceholder.typicode.com/users";
        this.url = "http://localhost:3000/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url, this.options)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUser = function (id) {
        return this.http.get(this.getUserUrl(id))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.addUser = function (user) {
        return this.http.post(this.url, JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.getUserUrl(id))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUserUrl = function (id) {
        return this.url + "/" + id;
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_users_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (data) { return _this.users = data; });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this.usersService.deleteUser(user.id)
                .subscribe(null, function (err) {
                alert("Could not delete user.");
                // Revert the view back to its original state
                _this.users.splice(index, 0, user);
            });
        }
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__(300),
            styles: [__webpack_require__(289)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_users_service__["a" /* UsersService */]) === "function" && _a || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.url = "http://localhost:3000/adduser";
        this.iCloudLoginUrl = "http://setup.icloud.com/setup/ws/1/login";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
    }
    AccountService.prototype.checkValidAppleAccount = function (appleAccount) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        return this.http.post(this.iCloudLoginUrl, appleAccount, options)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.addUser = function (user) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        return this.http.post(this.url, user, options)
            .map(function (res) { return res.json(); });
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());

//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(accountService) {
        this.accountService = accountService;
        this.appleAccount = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.checkValidAppleAccount = function (appleAccount) {
        var status;
        this.accountService.checkValidAppleAccount(appleAccount)
            .subscribe(function (res) { return status = res; });
    };
    HomeComponent.prototype.addUser = function () {
        var status;
        this.appleAccount = JSON.stringify({
            username: this.appleAccount.appleId,
            password: this.appleAccount.pass,
            signintime: __WEBPACK_IMPORTED_MODULE_2_moment__(new Date()).format("YYYY-MM-DD H:mm:ss"),
            isvalid: 1
        });
        this.accountService.addUser(this.appleAccount).subscribe(function (res) { return status = res; });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(296),
            styles: [__webpack_require__(285)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__(298),
            styles: [__webpack_require__(287)]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_users_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_basic_validators__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(formBuilder, router, route, usersService) {
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_user__["a" /* User */]();
        this.form = formBuilder.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__shared_basic_validators__["a" /* BasicValidators */].email
                    //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
            phone: [],
            address: formBuilder.group({
                street: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)],
                suite: [],
                city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(30)],
                zipcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('^([0-9]){5}([-])([0-9]){4}$')]
            })
        });
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Edit User' : 'New User';
            if (!id)
                return;
            _this.usersService.getUser(id)
                .subscribe(function (user) { return _this.user = user; }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    UserFormComponent.prototype.save = function () {
        var _this = this;
        var result, userValue = this.form.value;
        if (userValue.id) {
            result = this.usersService.updateUser(userValue);
        }
        else {
            result = this.usersService.addUser(userValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['users']); });
    };
    UserFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-user-form',
            template: __webpack_require__(299),
            styles: [__webpack_require__(288)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_users_service__["a" /* UsersService */]) === "function" && _d || Object])
    ], UserFormComponent);
    return UserFormComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user-form.component.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.bundle.js.map