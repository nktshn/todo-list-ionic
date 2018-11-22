import { Component, OnInit } from '@angular/core';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Priority } from 'src/models/Priority';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    task: TaskResponse;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private androidStorage: AndroidStoreService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.androidStorage.getTask(params['id']).subscribe(task => {
                this.task = task;
            })
        })
    }

    onEditTask() {
        this.androidStorage.editTask(this.task).subscribe(res => {
            if (res) {
                this.router.navigateByUrl('home');
            }
        })
    }


    getPriorityColor(id) {
        return Priority.colorMap[id];
    }

}
