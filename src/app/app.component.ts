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

@Component({
  templateUrl: 'app.html'
}) 
export class MyApp {
  rootPage:any = HomePage;
  signInPage = SigninPage;
  signUpPage = SignupPage;
  createAccPage = CreateAccPage;
  aboutPage = AboutPage;
  skillPage = SkillPage;
  createArtPage = CreateArticlePage;

  isAuthenticated = false;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private menuCtrl: MenuController,
              private authService: AuthService) {

    firebase.initializeApp({
      apiKey: "AIzaSyCI-Lr7yGKcjyi9olnjyiWn-Clcoppgtak",
      authDomain: "learntonet-58a9a.firebaseapp.com",
      databaseURL: "https://learntonet-58a9a.firebaseio.com",
      projectId: "learntonet-58a9a",
      storageBucket: "learntonet-58a9a.appspot.com",
      messagingSenderId: "386933027862"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated =true;
        this.nav.setRoot(this.rootPage);
      } else {
        this.isAuthenticated = false;
        this.nav.setRoot(this.signInPage);
      }
    });

    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close;
  }

  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
  }
}

