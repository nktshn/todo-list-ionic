import { Injectable } from '@angular/core';
import { AndroidApiService } from 'src/services/android-api.service';
import { AndroidStoreService } from 'src/services/android-store.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskDetailsService {

    constructor(
        private androidApi: AndroidApiService,
        private androidStorage: AndroidStoreService,
        private router: Router
    ) { }

    showRemoveTaskConfirmation(taskId: number):Observable<boolean> {
        return new Observable(obs => {
            this.androidApi.showConfirm(
                'Delete task #' + taskId,
                'Are you sure to delete this task?',
                'Cancel',
                'Delete',
                () => {
                    obs.next(false);
                },
                () => {
                    // agree
                    this.androidStorage.deleteTask(taskId).subscribe(res => {
                        if (res) {
                            this.androidApi.presentToast('Task has been deleted successfully');
                            obs.next(true);
                            this.router.navigateByUrl('home');
                        }
                    })
                });
        })
    }
}
