import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Priority } from 'src/models/Priority';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    tasks: Task[];

    constructor(
        private androidStore: AndroidStoreService,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.androidStore.getTasks().subscribe(res => {
            this.tasks = res;
        });
        // this.generateTasks();
    }

    onRedirect(url: string, params: any) {
        console.log(url);
        
        this.router.navigate([url], params);
    }

    getPriorityColor(id) {
        return Priority.colorMap[id];
    }

    private generateTasks() {
        this.androidStore.createTask(
            {
                title: 'One more task I gonna do',
                description: 'I dont even know what this task about',
                priority: new Priority('Minor'),
                targetDate: 12123123
            },
        ).subscribe(() => {
            this.androidStore.createTask(
                {
                    title: 'Tasky task',
                    description: 'That\'s it',
                    priority: new Priority('Major'),
                    targetDate: 1183134333
                },
            ).subscribe(() => {
                this.androidStore.createTask(
                    {
                        title: 'Write book',
                        description: '',
                        priority: new Priority('Normal'),
                        targetDate: 123123123
                    },
                ).subscribe(() => { });
            }
            );
        });


    }
}
