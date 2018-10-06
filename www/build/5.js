webpackJsonp([5],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendPageModule", function() { return FriendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendPageModule = /** @class */ (function () {
    function FriendPageModule() {
    }
    FriendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__friend__["a" /* FriendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friend__["a" /* FriendPage */]),
            ],
        })
    ], FriendPageModule);
    return FriendPageModule;
}());

//# sourceMappingURL=friend.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendPage = /** @class */ (function () {
    function FriendPage(navCtrl, navParams, userservice, zone, alertCtrl, imghandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.imghandler = imghandler;
    }
    FriendPage.prototype.ionViewWillEnter = function () {
        this.loaduserdetails();
    };
    FriendPage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.getuserdetails().then(function (res) {
            _this.displayName = res.displayName;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
            });
        });
    };
    FriendPage.prototype.editimage = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imghandler.uploadimage().then(function (url) {
            _this.userservice.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully!!');
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed');
                statusalert.present();
            });
        });
    };
    FriendPage.prototype.editname = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Nickname',
            inputs: [{
                    name: 'nickname',
                    placeholder: 'Nickname'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        if (data.nickname) {
                            _this.userservice.updatedisplayname(data.nickname).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your nickname has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.displayName = data.nickname;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your nickname was not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    FriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend',template:/*ion-inline-start:"/Users/munehiromarkoh/Munehiro/apps/2PLAY/src/pages/friend/friend.html"*/'<!--\n  Generated template for the FriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>friend</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="profile-image" (click)="editimage()">\n  <img src="{{avatar}}">\n</div>\n<div>\n  <h2 (click)="editname()">{{displayName}}</h2>\n</div>\n<div>\n  Tap on your pic or nick name to change it.\n</div>\n<div class="spacer" style="height: 10px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/munehiromarkoh/Munehiro/apps/2PLAY/src/pages/friend/friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ })

});
//# sourceMappingURL=5.js.map