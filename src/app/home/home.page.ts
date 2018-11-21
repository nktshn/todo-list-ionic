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
        let priority: Priority = new Priority('Critical');
        let task: Task = {
            title: 'Task 1',
            description: 'My first task',
            priority: priority,
            targetDate: 126351635,
        };
        // this.androidStore.createTask(task).subscribe(res => {
        //     console.log(res);
        // });
        // this.androidStore.getTask(3).subscribe((task: TaskResponse) => {
        //     console.log(task);
        //     task.title = 'Edited task';
        //     this.androidStore.editTask(task).subscribe(res => {
        //         console.log(res);
        //         this.androidStore.getTask(3).subscribe((task: TaskResponse) => {
        //             console.log('edited', task);
        //         })
        //     })
        // });
        // this.androidStore.deleteTask(3).subscribe(res => {
        //     console.log(res);
        // })
        this.androidStore.getTasks().subscribe(res => {
            console.log(res);
            
        })

    }
}
