var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { CreateAccPage } from '../pages/create-acc/create-acc';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SkillPage } from '../pages/skill/skill';
import { CreateArticlePage } from '../pages/createarticle/createarticle';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, authService) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.rootPage = HomePage;
        this.signInPage = SigninPage;
        this.signUpPage = SignupPage;
        this.createAccPage = CreateAccPage;
        this.aboutPage = AboutPage;
        this.skillPage = SkillPage;
        this.createArtPage = CreateArticlePage;
        this.isAuthenticated = false;
        firebase.initializeApp({
            apiKey: "AIzaSyCI-Lr7yGKcjyi9olnjyiWn-Clcoppgtak",
            authDomain: "learntonet-58a9a.firebaseapp.com",
        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.nav.setRoot(_this.rootPage);
            }
            else {
                _this.isAuthenticated = false;
                _this.nav.setRoot(_this.signInPage);
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close;
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.menuCtrl.close();
    };
    __decorate([
        ViewChild('nav'),
        __metadata("design:type", NavController)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar,
            SplashScreen,
            MenuController,
            AuthService])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map