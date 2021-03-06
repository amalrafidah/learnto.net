var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';
var SigninPage = /** @class */ (function () {
    function SigninPage(authService, loadCtrl, alertCtrl) {
        this.authService = authService;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.authService.signIn(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'SignIn failed!',
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Component({
            selector: 'page-signin',
            templateUrl: 'signin.html',
        }),
        __metadata("design:paramtypes", [AuthService,
            LoadingController,
            AlertController])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.js.map