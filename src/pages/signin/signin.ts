import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService,
  			  private loadCtrl: LoadingController,
  			  private alertCtrl: AlertController){}

  onSignin(form: NgForm){
  	const loading = this.loadCtrl.create({
  		content: 'Signing you in...'
  	});
  	loading.present();
  	this.authService.signIn(form.value.email, form.value.password)
  	.then(data => {
  		loading.dismiss();
  	})
  	.catch(error => {
  		loading.dismiss();
  		const alert = this.alertCtrl.create({
  			title: 'SignIn failed!',
  			message: error.message,
  			buttons: ['OK']
  		});
  		alert.present();
  	});
  }
}
