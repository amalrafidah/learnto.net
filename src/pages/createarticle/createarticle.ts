import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-createarticle',
  templateUrl: 'createarticle.html',
})
export class CreateArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			  private emailComposer: EmailComposer) {
  }

  createEmail(){
  	let email = {
  		to: 'wbd02_01111655@pb.edu.bn',
  		cc: '',
  		subject: 'Create An Article',
  		body: ' Tiltle:<br><br> Description: <br><br>',
  		isHtml: true
  	};

  	this.emailComposer.open(email);
  }

  requestEmail(){
  	let email = {
  		to: 'wbd02_01111655@pb.edu.bn',
  		cc: '',
  		subject: 'Request An Article',
  		body: ' Write the title of the article you wish to request here...<br><br>',
  		isHtml: true
  	};

  	this.emailComposer.open(email);
  }

}
