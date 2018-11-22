import { Component, OnInit } from '@angular/core';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Priority } from 'src/models/Priority';
import { AndroidApiService } from 'src/services/android-api.service';
import { ModalController } from '@ionic/angular';
import { PrioritySelectComponent } from 'src/shared/components/priority-select/priority-select.component';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    task: TaskResponse;
    isPrioritySelectorShown: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private androidApi: AndroidApiService,
        private androidStorage: AndroidStoreService,
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
                this.androidApi.presentToast('Task has been saved successfully');
                this.router.navigateByUrl('home');
            }
        })
    }

    onSelectPriority() {
        this.isPrioritySelectorShown = true;
    }

    onPrioritySelected(priority: Priority) {
        this.isPrioritySelectorShown = false;
        this.task.priority = priority;
    }

    getPriorityColor(id) {
        return Priority.colorMap[id];
    }

}
