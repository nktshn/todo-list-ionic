import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AndroidApiService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(res => {
        res.present();
    })
  }
}
