import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Priority } from 'src/models/Priority';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    tasks: Task[];

    constructor(
        private androidStore: AndroidStoreService,
        private router: Router,

    ) {

    }

    ngOnInit(): void {
        this.androidStore.getTasks().subscribe(res => {
            this.tasks = res;
        });
    }

    onRedirect(url: string, params: any) {
        this.router.navigate([url], params);
    }

    onCreateTask() {
        console.log('create');

    }

   

    getPriorityColor(id) {
        return Priority.colorMap[id];
    }
}
