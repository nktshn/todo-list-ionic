import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Priority } from 'src/models/Priority';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    tasks: Task[];

    constructor(
        private androidStore: AndroidStoreService
    ) {

    }

    ngOnInit(): void {
        this.androidStore.getTasks().subscribe(res => {
            this.tasks = res;
        });
        // this.generateTasks();
    }

    private getPriorityColor(id) {
        return Priority.colorMap[id];
    }

    private generateTasks() {
        this.androidStore.createTask(
            {
                title: 'Go to bed',
                description: 'I need to go to sleep earlear',
                priority: new Priority('Critical'),
                targetDate: 123123123
            },
        ).subscribe(() => {
            this.androidStore.createTask(
                {
                    title: 'Write this app',
                    description: 'Have no time to end this app',
                    priority: new Priority('Major'),
                    targetDate: 123134523
                },
            ).subscribe(() => {
                this.androidStore.createTask(
                    {
                        title: 'Buy pen',
                        description: 'Need something for writing',
                        priority: new Priority('Normal'),
                        targetDate: 193123123
                    },
                ).subscribe(() => { });
            }
            );
        });


    }
}
