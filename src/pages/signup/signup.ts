import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

import { CreateAccPage } from '../../pages/create-acc/create-acc';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

		provider = {
		name: '',
		profilePicture: '',
		email: '',
		loggedin: false,
	}


  constructor(
    // private fire: AngularFireAuth, 
    public navCtrl: NavController) {
  }

  onGotoAcc(){
  	this.navCtrl.push(CreateAccPage);
  }

 // logout(){
  //	this..authService.logout();
  //	this.provider.loggedin = false;
 // }

}
