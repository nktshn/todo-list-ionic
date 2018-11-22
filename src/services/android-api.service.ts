import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AndroidApiService {

    constructor(
        private toastCtrl: ToastController,
        public alertCtrl: AlertController
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

    showConfirm(header: string, message: string, disagreeBtnText: string, agreeBtnText: string, disagreeHandler: Function, agreeHandler: Function) {
        const confirm = this.alertCtrl.create({
            header: header,
            message: message,
            buttons: [
                {
                    text: disagreeBtnText,
                    handler: disagreeHandler as any
                },
                {
                    text: agreeBtnText,
                    handler: agreeHandler
                }
            ]
        });
        confirm.then(res => {
            res.present();
        })
    }
}
