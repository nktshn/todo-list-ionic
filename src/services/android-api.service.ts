import { Injectable } from '@angular/core';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { BackButtonDetail } from '@ionic/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AndroidApiService {

    private backButtonHandler: Function;

    constructor(
        private toastCtrl: ToastController,
        public alertCtrl: AlertController,
        private platform: Platform,
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

    // onBackButton() {
    //     return new Observable(obs => {
    //         let sub = this.platform.backButton.subscribe(() => {
    //             obs.next();
    //             // sub.unsubscribe();
    //         });
    //     })
    // }
    registerBackButton() {
        this.platform.backButton.subscribe(() => {
            this.backButtonHandler();
        });
    }

    setBackButtonHandler(handler: Function) {
        this.backButtonHandler = handler;
    }

    closeApp() {
        navigator['app'].exitApp();
    }
}
