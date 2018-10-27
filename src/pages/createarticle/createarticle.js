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
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
var CreateArticlePage = /** @class */ (function () {
    function CreateArticlePage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
    }
    CreateArticlePage.prototype.createEmail = function () {
        var email = {
            to: 'wbd02_01111655@pb.edu.bn',
            cc: '',
            subject: 'Create An Article',
            body: ' Tiltle:<br><br> Description: <br><br>',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    CreateArticlePage.prototype.requestEmail = function () {
        var email = {
            to: 'wbd02_01111655@pb.edu.bn',
            cc: '',
            subject: 'Request An Article',
            body: ' Write the title of the article you wish to request here...<br><br>',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    CreateArticlePage = __decorate([
        Component({
            selector: 'page-createarticle',
            templateUrl: 'createarticle.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            EmailComposer])
    ], CreateArticlePage);
    return CreateArticlePage;
}());
export { CreateArticlePage };
//# sourceMappingURL=createarticle.js.map