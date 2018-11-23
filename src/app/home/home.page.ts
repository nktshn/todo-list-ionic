import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Priority } from 'src/models/Priority';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { AndroidApiService } from 'src/services/android-api.service';
import { TaskDetailsService } from '../task-details/task-details.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    tasks: Task[];

    constructor(
        private androidStore: AndroidStoreService,
        private androidApi: AndroidApiService,
        private router: Router,
        private taskDetailsService: TaskDetailsService,
        private activatedRoute: ActivatedRoute,
        private platform: Platform

    ) {

    }

    ngOnInit(): void {
        this.loadTasks();

        this.androidApi.onBackButton(()=> {
            this.androidApi.showConfirm('Exit', 'Are you sure?', 'Cancel', 'Exit',
            () => {
                //
            },
            () => {
                this.androidApi.closeApp();
            })
        })
    }

    onRedirect(url: string, params: any) {
        this.router.navigate([url], {relativeTo: this.activatedRoute});
    }

    onCreateTask() {
        console.log('create');
        this.onRedirect('/task/new', null);
    }

    onRemoveTask(taskId, event) {
        event.preventDefault();
        event.stopPropagation();
        this.taskDetailsService.showRemoveTaskConfirmation(taskId).subscribe(res => {
            this.loadTasks();
        });
    }



    getPriorityColor(id) {
        return Priority.colorMap[id];
    }

    loadTasks() {
        this.androidStore.getTasks().subscribe(res => {
            this.tasks = res;
        });
    }
}
