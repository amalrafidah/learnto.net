var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { CreateAccPage } from '../pages/create-acc/create-acc';
import { AboutPage } from '../pages/about/about';
import { SkillPage } from '../pages/skill/skill';
import { CreateArticlePage } from '../pages/createarticle/createarticle';
import { DataProvider } from '../providers/data/data';
import { AuthService } from '../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
var firebaseConfig = {
    apiKey: "AIzaSyCI-Lr7yGKcjyi9olnjyiWn-Clcoppgtak",
    authDomain: "learntonet-58a9a.firebaseapp.com",
    databaseURL: "https://learntonet-58a9a.firebaseio.com",
    projectId: "learntonet-58a9a",
    storageBucket: "learntonet-58a9a.appspot.com",
    messagingSenderId: "386933027862"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                SigninPage,
                SignupPage,
                CreateAccPage,
                AboutPage,
                SkillPage,
                CreateArticlePage,
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireDatabaseModule,
                AngularFireStorageModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                SigninPage,
                SignupPage,
                CreateAccPage,
                AboutPage,
                SkillPage,
                CreateArticlePage,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                AuthService,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                DataProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map