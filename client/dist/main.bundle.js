webpackJsonp(["main"],{

/***/ "../../../../../client/src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../client/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../client/src/app/app-router/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_signup_login_signup_component__ = __webpack_require__("../../../../../client/src/app/views/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_my_profile_my_profile_component__ = __webpack_require__("../../../../../client/src/app/views/my-profile/my-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__views_login_signup_login_signup_component__["a" /* LoginSignupComponent */],
    },
    {
        path: 'my-profile/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__views_my_profile_my_profile_component__["a" /* MyProfileComponent */]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../client/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head-band {\n    background-color: purple;\n    height: 40px;\n}\n\n.head-band-icon {\n    margin-top:10px;\n    margin-left:45%;\n    font-size: 18px;\n    color: #ffffff;\n}\n\n.right {\n    float: right;\n    padding-right: 25px;\n    padding-top: 10px;\n    font-size: 14px;\n    font-weight: bolder;\n    color: #ffffff;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12 col-lg-12 col-sm-12 head-band\">\n      <i class=\"fa fa-sticky-note head-band-icon\"> PayNearby</i>\n      <span class=\"right\" (click)=\"logout()\" [hidden]=\"loggedOut\">Logout</span>\n    </div> \n    </div>\n</section>\n\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../client/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.loggedOut = true;
        this._router.navigate(['login/']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('jwtToken');
        if (!this.token) {
            this.loggedOut = true;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../client/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router_app_router_module__ = __webpack_require__("../../../../../client/src/app/app-router/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../client/src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../client/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_login_signup_login_signup_component__ = __webpack_require__("../../../../../client/src/app/views/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_my_profile_my_profile_component__ = __webpack_require__("../../../../../client/src/app/views/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_modals_newproject_newproject_component__ = __webpack_require__("../../../../../client/src/app/views/modals/newproject/newproject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/bundles/ng2-bs3-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_modals_add_edit_task_add_edit_task_component__ = __webpack_require__("../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_login_signup_login_signup_component__["a" /* LoginSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_modals_newproject_newproject_component__["a" /* NewprojectComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_modals_add_edit_task_add_edit_task_component__["a" /* AddEditTaskComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_router_app_router_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal__["BsModalModule"],
                __WEBPACK_IMPORTED_MODULE_16_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_8_ng_router_state_params__["a" /* RouterStateParamsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__views_modals_newproject_newproject_component__["a" /* NewprojectComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../client/src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
var ApiService = /** @class */ (function () {
    function ApiService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        // this.srcApiUrl = environment.baseUrl + environment.apiUrl + 'source/';
    }
    ApiService.prototype.login = function (email, password) {
        var login_data = {
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/login', login_data)
            .map(function (response) {
            return response.json();
        });
    };
    ApiService.prototype.signup = function (email, password, name) {
        var login_data = {
            name: name,
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/signup', login_data)
            .map(function (response) {
            return response.json();
        });
    };
    ApiService.prototype.addToken = function () {
        var token = localStorage.getItem('jwtToken');
        if (!token) {
            token = '';
        }
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': token })
        };
        return httpOptions;
    };
    ApiService.prototype.getUser = function (userId) {
        return this.httpClient
            .get('http://127.0.0.1:3000/api/user/' + userId, this.addToken())
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService.prototype.addNewProject = function (projectName, userId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/create', { name: projectName, user: userId }, this.addToken())
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.editProject = function (projectId, projectName) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/update', { id: projectId, name: projectName }, this.addToken())
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.deleteProject = function (projectId, userId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/delete', { id: projectId, user: userId }, this.addToken())
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.deleteTask = function (taskName, projectId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/deletetask', { id: projectId, taskName: taskName }, this.addToken())
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.getTasks = function (projectId) {
        return this.httpClient
            .get('http://127.0.0.1:3000/api/project/tasks/' + projectId, this.addToken())
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService.prototype.editTask = function (task, projectId, oldName) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/edittask', { task: task, projectId: projectId, oldName: oldName }, this.addToken())
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.addNewTask = function (task, projectId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/addtask', { task: task, projectId: projectId }, this.addToken())
            .map(function (response) {
            return response;
        });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../client/src/app/views/login-signup/login-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    margin-bottom: 10px;\n}\n\n.title span {\n    color: grey;\n}\n\n.bottom-text {\ncolor: grey;\nposition: relative;\ntop:50px;\nleft: 30px;\n}\n\n.bottom-text a {\n    color: purple;\n}\n\n.btn-custom {\n    border-radius: 50%;\n    background-color: purple;\n    font-size: 18px;\n    font-weight:bold;\n    float: left;\n    margin-left: 20px;\n    color: #d4bdbd;\n}\n\n.forgot-text{\n    position: relative;\n    margin-top: 10px;\n    left: 75px;\n}\n\n.forgot-text a {\n    color: purple !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/views/login-signup/login-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentRoute=='login'\">\n  <div [hidden]=\"!loading\" class=\"loading loading-big\"></div>\n  <div class=\"row set-mid\" [hidden]=\"loading\">\n    <div class=\"title\">\n      <h4>Hello!</h4>\n      <span>Please Log In to Your Account.</span>\n    </div>\n    <input type=\"text\" id=\"email\" class=\"form-control form-custom\" [(ngModel)]=\"email_ip\" placeholder=\"Email Address\" required=\"required\"\n    />\n    <input type=\"password\" id=\"password\" class=\"form-control form-custom\" [(ngModel)]=\"password_ip\" placeholder=\"Password\" required=\"required\"\n    />\n    <div class=\"row\">\n      <button class=\"btn btn-custom\" (click)=\"login()\">Login</button>\n      <!-- <div class=\"forgot-text\">\n        <a href=\"#\">Forgot Password? </a>\n      </div> -->\n    </div>\n    <span class=\"bottom-text\">\n      Still without account?\n      <a (click)=\"navigate('signup')\">Signup</a>\n    </span>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"currentRoute == 'signup'\">\n  <div [hidden]=\"!loading\" class=\"loading loading-big\"></div>\n  <div class=\"row set-mid\" [hidden]=\"loading\">\n    <div class=\"title\">\n      <h4>Signup</h4>\n      <span>Create an account to use Paynearby without limits. For free.</span>\n    </div>\n    <input type=\"text\" id=\"new_name\" class=\"form-control form-custom\" [(ngModel)]=\"name_ip\" placeholder=\"Name\" required=\"required\"\n    />\n    <input type=\"email\" id=\"new_email\" class=\"form-control form-custom\" [(ngModel)]=\"email_ip\" placeholder=\"Email Address\" required=\"required\"\n    />\n    <input type=\"password\" id=\"new_password\" class=\"form-control form-custom\" [(ngModel)]=\"password_ip\" placeholder=\"Password\"\n      required=\"required\" />\n    <div class=\"row\">\n      <button class=\"btn btn-custom\" (click)=\"signup()\">Signup</button>\n    </div>\n    <span class=\"bottom-text\">\n      Already have an account?\n      <a (click)=\"navigate('login')\">Login</a>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/src/app/views/login-signup/login-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../client/src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginSignupComponent = /** @class */ (function () {
    function LoginSignupComponent(_router, apiService, toastr, vcr) {
        this._router = _router;
        this.apiService = apiService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginSignupComponent.prototype.navigate = function (route) {
        if (route === 'signup') {
            this.currentRoute = 'signup';
            // this._router.navigate(['/login?signup=' + true]);
        }
        else {
            this.currentRoute = 'login';
        }
    };
    LoginSignupComponent.prototype.login = function () {
        var _this = this;
        if (this.email_ip && this.password_ip) {
            this.loading = true;
            this.apiService.login(this.email_ip, this.password_ip).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                _this.loading = false;
                if (!_this.resp.status) {
                    _this.toastr.error(_this.resp.message);
                }
                else if (_this.resp.status) {
                    // console.log(this.resp);
                    localStorage.setItem('jwtToken', _this.resp.data.token);
                    localStorage.setItem('userId', _this.resp.data.user._id);
                    _this.loggedOut = false;
                    localStorage.setItem('logged_in_user', _this.resp.data.user.name);
                    _this._router.navigate(['my-profile/' + _this.resp.data.user._id]);
                }
            });
        }
        else {
            this.toastr.error('Please enter email and password!');
        }
    };
    LoginSignupComponent.prototype.signup = function () {
        var _this = this;
        var emailTest = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!emailTest.test(this.email_ip)) {
            this.toastr.error('Please enter valid Email Address');
            return;
        }
        if (this.email_ip && this.password_ip) {
            this.loading = true;
            this.apiService.signup(this.email_ip, this.password_ip, this.name_ip).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                _this.loading = false;
                console.log(_this.resp);
                if (!_this.resp.status) {
                    _this.toastr.error(_this.resp.message);
                }
                else if (_this.resp.status) {
                    _this.toastr.success('New User Created');
                    _this.email_ip = '';
                    _this.password_ip = '';
                    _this.currentRoute = 'login';
                    _this._router.navigate(['my-profile']);
                }
            });
        }
        else {
            this.toastr.error('Please enter email and password!');
        }
    };
    LoginSignupComponent.prototype.ngOnInit = function () {
        this.loggedIn = localStorage.getItem('userId');
        this.token = localStorage.getItem('jwtToken');
        if (this.loggedIn && this.token) {
            this._router.navigate(['my-profile/' + this.loggedIn]);
        }
        this.loading = false;
        this.currentRoute = 'login';
        this.email_ip = '';
        this.password_ip = '';
    };
    LoginSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-signup',
            template: __webpack_require__("../../../../../client/src/app/views/login-signup/login-signup.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/views/login-signup/login-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginSignupComponent);
    return LoginSignupComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.html":
/***/ (function(module, exports) {

module.exports = "<bs-modal #modal>\n  <bs-modal-header>\n    <h3 class=\"modal-title\">Add/Edit Task</h3>\n  </bs-modal-header>\n  <bs-modal-body>\n\n    <div class=\"form-group col-xs-6\">\n      <label for=\"taskName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"taskName\" [ngModel]=\"task?.name\" (ngModelChange)=\"task.name = $event\">\n    </div>\n    <div class=\"form-group col-xs-6\">\n      <label for=\"taskDeadline\">Deadline</label>\n      <angular2-date-picker [ngModel]=\"task?.deadline\" (ngModelChange)=\"task.deadline = $event\" [settings]=\"settings\"></angular2-date-picker>\n    </div>\n    <div class=\"form-group col-xs-6\">\n      <label for=\"taskPriority\">Priority</label>\n      <select id=\"taskPriority\" class=\"form-control\" [ngModel]=\"task?.priority\" (ngModelChange)=\"task.priority = $event\">\n        <option value=\"\" class=\"form-group\">Select Priority</option>\n        <option value=\"high\" class=\"form-group\">High</option>\n        <option value=\"medium\" class=\"form-group\">Medium</option>\n        <option value=\"low\" class=\"form-group\">Low</option>\n      </select>\n    </div>\n    <div class=\"form-group col-xs-6\">\n      <label for=\"taskStatus\">Status</label>\n      <select id=\"taskStatus\" class=\"form-control\" [ngModel]=\"task?.status\" (ngModelChange)=\"task.status = $event\">\n        <option value=\"\" class=\"form-group\">Select Status</option>\n        <option value=\"pending\" class=\"form-group\">Pending</option>\n        <option value=\"in process\" class=\"form-group\">In Process</option>\n        <option value=\"done\" class=\"form-group\">Done</option>\n      </select>\n    </div>\n\n  </bs-modal-body>\n  <bs-modal-footer [showDefaultButtons]=\"false\">\n    <div class=\"box-footer\">\n      <button class=\"btn btn-default\" (click)=\"close(null)\">Close</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Save</button>\n    </div>\n  </bs-modal-footer>\n</bs-modal>"

/***/ }),

/***/ "../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/bundles/ng2-bs3-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../client/src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEditTaskComponent = /** @class */ (function () {
    function AddEditTaskComponent(apiService, toastr, vcr) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.settings = {
            bigBanner: false,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: false
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    AddEditTaskComponent.prototype.open = function () {
        if (this.incomingData) {
            this.task = this.incomingData;
            this.taskName = this.incomingData.name;
        }
        this.modal.open();
    };
    AddEditTaskComponent.prototype.close = function (data, operation) {
        if (data) {
            data.operation = operation;
            this.modalClosed.emit(data);
        }
        else {
            this.modalClosed.emit(null);
        }
        this.noName = false;
        this.modal.close();
    };
    AddEditTaskComponent.prototype.isEmptyOrSpaces = function (str) {
        if (str == undefined || str == null)
            return true;
        if (str.trim('').length == 0)
            return true;
        return false;
    };
    AddEditTaskComponent.prototype.onSubmit = function () {
        var _this = this;
        if (new Date(this.task.deadline).getTime() < new Date().getTime()) {
            this.toastr.error('Deadline cannot be in the past');
            return;
        }
        if (this.incomingData) {
            this.apiService.editTask(this.task, this.projectId, this.taskName).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                if (!_this.resp.status) {
                    _this.toastr.error('Some Error Occured, Please Try Again');
                }
                else if (_this.resp.status) {
                    _this.toastr.success('Project Updated');
                    _this.close(_this.resp.data, 'edited');
                }
            });
        }
        else {
            this.apiService.addNewTask(this.task, this.projectId).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                if (!_this.resp.status) {
                    _this.toastr.error('Some Error Occured, Please Try Again');
                }
                else if (_this.resp.status) {
                    _this.toastr.success('New task Added');
                    _this.close(_this.resp.data, 'edited');
                }
            });
        }
    };
    AddEditTaskComponent.prototype.ngOnInit = function () {
        this.task = {
            name: null,
            deadline: null,
            priority: null,
            status: null
        };
        this.noName = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["BsModalComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["BsModalComponent"])
    ], AddEditTaskComponent.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditTaskComponent.prototype, "incomingData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditTaskComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('modalClosed'),
        __metadata("design:type", Object)
    ], AddEditTaskComponent.prototype, "modalClosed", void 0);
    AddEditTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-edit-task',
            template: __webpack_require__("../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AddEditTaskComponent);
    return AddEditTaskComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/views/modals/newproject/newproject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/views/modals/newproject/newproject.component.html":
/***/ (function(module, exports) {

module.exports = "<bs-modal #modal>\n  <bs-modal-header>\n    <h3 class=\"modal-title\">Add New Project</h3>\n  </bs-modal-header>\n  <bs-modal-body>\n    <div class=\"form-group col-xs-12\">\n      <label for=\"newProjectName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"newProjectName\" [ngModel]=\"projectName\" (ngModelChange)=\"projectName = $event\">\n      <span class=\"text-danger\" [hidden]=\"!noName\">No Name Entered</span>\n    </div>\n  </bs-modal-body>\n  <bs-modal-footer [showDefaultButtons]=\"false\">\n    <div class=\"box-footer\">\n      <button class=\"btn btn-default\" (click)=\"close()\">Close</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Save</button>\n    </div>\n  </bs-modal-footer>\n</bs-modal>"

/***/ }),

/***/ "../../../../../client/src/app/views/modals/newproject/newproject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprojectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/bundles/ng2-bs3-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../client/src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewprojectComponent = /** @class */ (function () {
    function NewprojectComponent(apiService, toastr, vcr) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    NewprojectComponent.prototype.open = function () {
        if (this.incomingData) {
            this.projectName = this.incomingData.name;
        }
        this.modal.open();
    };
    NewprojectComponent.prototype.close = function (data, operation) {
        if (data) {
            data.operation = operation;
            this.modalClosed.emit(data);
        }
        else {
            this.modalClosed.emit(null);
        }
        this.projectName = null;
        this.noName = false;
        this.modal.close();
    };
    NewprojectComponent.prototype.isEmptyOrSpaces = function (str) {
        if (str == undefined || str == null)
            return true;
        if (str.trim('').length == 0)
            return true;
        return false;
    };
    NewprojectComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.data.name = this.data.name.trim();
        // if (this.data.name) {
        if (!this.isEmptyOrSpaces(this.projectName)) {
            this.noName = false;
            if (this.incomingData) {
                this.apiService.editProject(this.incomingData._id, this.projectName).subscribe(function (response) {
                    _this.resp = response;
                }, function (error) {
                    console.log('Error :: ' + error);
                }, function () {
                    if (!_this.resp.status) {
                        _this.toastr.error('Some Error Occured, Please Try Again');
                    }
                    else if (_this.resp.status) {
                        _this.toastr.success('Project Updated');
                        _this.close(_this.resp.data, 'edited');
                    }
                });
            }
            else {
                this.apiService.addNewProject(this.projectName, this.userId).subscribe(function (response) {
                    _this.resp = response;
                }, function (error) {
                    console.log('Error :: ' + error);
                }, function () {
                    if (!_this.resp.status) {
                        _this.toastr.error('Some Error Occured, Please Try Again');
                    }
                    else if (_this.resp.status) {
                        _this.toastr.success('New Project Created');
                        _this.close(_this.resp.data, null);
                    }
                });
            }
        }
        else {
            this.noName = true;
            return;
        }
    };
    NewprojectComponent.prototype.ngOnInit = function () {
        // if (!this.projectName) {
        //   this.projectName = null;
        // }
        this.noName = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["BsModalComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["BsModalComponent"])
    ], NewprojectComponent.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewprojectComponent.prototype, "incomingData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewprojectComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('modalClosed'),
        __metadata("design:type", Object)
    ], NewprojectComponent.prototype, "modalClosed", void 0);
    NewprojectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newproject',
            template: __webpack_require__("../../../../../client/src/app/views/modals/newproject/newproject.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/views/modals/newproject/newproject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], NewprojectComponent);
    return NewprojectComponent;
}());



/***/ }),

/***/ "../../../../../client/src/app/views/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-color {\n    color: grey;\n}\n\n.btn {\n    margin-top: 10px;\n}\n\n.projects {\n    margin-left: 25%;\n    margin-top: 20px;\n}\n\n.clickable {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/src/app/views/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header container\" [hidden]=\"loading.projects\">\n  <h3 *ngIf=\"showingProjects\">\n    Welcome {{name}}!\n  </h3>\n\n  <h3 *ngIf=\"showingTasks\">\n    {{projectName}}!\n  </h3>\n  <h5 *ngIf=\"showingProjects\">Click on any Project to get Started or </h5>\n  <a *ngIf=\"showingProjects\" class=\"btn btn-primary open-modal-btn\" (click)=\"projectModal(null)\">Add New Project</a>\n  <button *ngIf=\"showingTasks\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"goBack()\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span> Back </button>\n      <a class=\"btn btn-primary open-modal-btn\" *ngIf=\"showingTasks && tasks.length > 0 \" (click)=\"taskModal(null)\">Add Task</a>\n  <app-newproject [incomingData]=\"projectModalData\" [userId]=\"userId\" (modalClosed)=\"closeModal($event)\"></app-newproject>\n  <app-add-edit-task [incomingData]=\"taskModalData\" [projectId]=\"projectId\" (modalClosed)=\"closeTaskModal($event)\"></app-add-edit-task>\n</section>\n\n<section class=\"content\" [hidden]=\"loading.tasks\" *ngIf=\"showingProjects\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 projects\">\n      <table class=\"table table-bordered table-striped\" *ngIf=\"projects.length > 0\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Started On</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let project of projects\" class=\"clickable\">\n            <td (click)=\"showTasks(project)\">{{project.name}}</td>\n            <td (click)=\"showTasks(project)\">{{project.createdon | date: 'medium'}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"projectModal(project)\">\n                <span class=\"glyphicon glyphicon-edit\"></span> Edit\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProject(project)\"> Delete </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <h4 *ngIf=\"projects.length == 0\">No Projects have been Added.\n        <a (click)=\"projectModal(null)\">Click Here</a> to Add a Project </h4>\n    </div>\n  </div>\n</section>\n\n<section class=\"content\" [hidden]=\"loading.projects\" *ngIf=\"showingTasks\">\n  <div class=\"row\">\n    <div class=\"col-xs-8 projects\">\n      <table class=\"table table-bordered table-striped\" *ngIf=\"tasks.length > 0\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Added On</th>\n            <th>Deadline</th>\n            <th>Priority</th>\n            <th>Status</th>\n            <th>Comments</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let task of tasks\">\n            <td>{{task.name}}</td>\n            <td>{{task.createdon | date: 'medium'}}</td>\n            <td>{{(task.deadline | date: 'medium') || 'NA'}}</td>\n            <td>{{task.priority || 'NA' }}</td>\n            <td>{{task.status || 'NA'}}</td>\n            <td><a (click)=\"viewComments(task.comments)\">View/Add/Edit Comments</a></td>\n            <td>\n              <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"taskModal(task)\">\n                <span class=\"glyphicon glyphicon-edit\"></span> Edit\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTask(task)\"> Delete </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <h4 *ngIf=\"tasks.length == 0\">No tasks have been Added. <a class=\"btn btn-primary open-modal-btn\" (click)=\"taskModal(null)\">Add Task</a></h4>\n    </div>\n  </div>\n</section>\n\n\n<div class=\"loading loading-big\" [hidden]=\"!loading.projects || !loading.tasks\"></div>"

/***/ }),

/***/ "../../../../../client/src/app/views/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../client/src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_newproject_newproject_component__ = __webpack_require__("../../../../../client/src/app/views/modals/newproject/newproject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_add_edit_task_add_edit_task_component__ = __webpack_require__("../../../../../client/src/app/views/modals/add-edit-task/add-edit-task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(routerStateParamsService, apiService, _router, toastr, vcr) {
        this.routerStateParamsService = routerStateParamsService;
        this.apiService = apiService;
        this._router = _router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    MyProfileComponent.prototype.getUserData = function () {
        var _this = this;
        this.apiService.getUser(this.userId).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            _this.loading.projects = false;
            if (!_this.resp.status) {
                _this._router.navigate(['login/']);
            }
            else if (_this.resp.status) {
                _this.projects = _this.resp.data.projects;
                _this.name = _this.resp.data.name;
            }
        });
    };
    MyProfileComponent.prototype.projectModal = function (type) {
        var _this = this;
        this.projectModalData = type;
        setTimeout(function () {
            _this.newProjectModal.open();
        }, 0);
    };
    MyProfileComponent.prototype.taskModal = function (task) {
        var _this = this;
        this.taskModalData = task;
        setTimeout(function () {
            _this.addEditTask.open();
        }, 0);
    };
    MyProfileComponent.prototype.deleteProject = function (project) {
        var _this = this;
        this.apiService.deleteProject(project._id, this.userId).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            if (!_this.resp.status) {
                _this.toastr.error('Some Error Occured, Please Try Again');
            }
            else if (_this.resp.status) {
                var index = _this.projects.findIndex(function (oldProjects) { return oldProjects._id == project._id; });
                if (index > -1) {
                    _this.projects.splice(index, 1);
                }
                _this.toastr.success('Project Deleted');
            }
        });
    };
    MyProfileComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.apiService.deleteTask(task.name, this.projectId).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            if (!_this.resp.status) {
                _this.toastr.error('Some Error Occured, Please Try Again');
            }
            else if (_this.resp.status) {
                _this.tasks = _this.resp.data[0].tasks;
                _this.toastr.success('Task Deleted');
            }
        });
    };
    MyProfileComponent.prototype.closeModal = function (new_project) {
        if (new_project) {
            if (new_project.operation == 'edited') {
                var index = this.projects.findIndex(function (project) { return project._id == new_project._id; });
                this.projects[index] = new_project;
            }
            else {
                this.projects.push(new_project);
            }
        }
    };
    MyProfileComponent.prototype.closeTaskModal = function (new_project) {
        if (new_project) {
            if (new_project.operation == 'edited') {
                console.log(new_project.tasks, 'new tasks');
                this.tasks = new_project.tasks;
            }
        }
    };
    MyProfileComponent.prototype.showTasks = function (project) {
        var _this = this;
        this.showingProjects = false;
        this.apiService.getTasks(project._id).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            if (!_this.resp.status) {
                _this.toastr.error('Some Error Occured! Please Try Again :(');
            }
            else if (_this.resp.status) {
                _this.loading.tasks = false;
                _this.showingTasks = true;
                _this.tasks = _this.resp.data.tasks;
                _this.projectName = _this.resp.data.name;
                _this.projectId = _this.resp.data._id;
            }
        });
    };
    MyProfileComponent.prototype.goBack = function () {
        this.showingTasks = false;
        this.showingProjects = true;
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        this.userId = this.routerStateParamsService.getParams().source.value.id;
        this.loading = {
            projects: true,
            tasks: false
        };
        this.showingProjects = true;
        this.showingTasks = false;
        this.projects = [];
        this.tasks = [];
        this.projectId = null;
        this.name = null;
        this.getUserData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__modals_newproject_newproject_component__["a" /* NewprojectComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__modals_newproject_newproject_component__["a" /* NewprojectComponent */])
    ], MyProfileComponent.prototype, "newProjectModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__modals_add_edit_task_add_edit_task_component__["a" /* AddEditTaskComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__modals_add_edit_task_add_edit_task_component__["a" /* AddEditTaskComponent */])
    ], MyProfileComponent.prototype, "addEditTask", void 0);
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__("../../../../../client/src/app/views/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("../../../../../client/src/app/views/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], MyProfileComponent);
    return MyProfileComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../client/src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../client/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map