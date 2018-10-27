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
import { HttpModule } from '@angular/http';


import { EmailComposer } from '@ionic-native/email-composer';

 var firebaseConfig = {
    apiKey: "AIzaSyCI-Lr7yGKcjyi9olnjyiWn-Clcoppgtak",
    authDomain: "learntonet-58a9a.firebaseapp.com",
    databaseURL: "https://learntonet-58a9a.firebaseio.com",
    projectId: "learntonet-58a9a",
    storageBucket: "learntonet-58a9a.appspot.com",
    messagingSenderId: "386933027862"
};


@NgModule({
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
    AngularFireStorageModule,
    HttpModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider, 
    EmailComposer
  ]
})
export class AppModule {}
