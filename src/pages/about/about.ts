import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private toastCtrl: ToastController,) {
    let alert = this.alertCtrl.create({
      title: 'Hello!',
      message: 'Do you have any unfinished task for today?',

      buttons: [

      {
        text: 'No',
        role: 'cancel',
        handler: () => {
        console.log('Canceled');
        }

        },

        {
        text: 'Yes',
        handler: () => {
          const toast = this.toastCtrl.create({
              message: 'Why dont you search up an article for your task at hand?',
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }
        }

       ]
    });

    alert.present();
  }

}
