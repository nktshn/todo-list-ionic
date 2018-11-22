import { Component, OnInit } from '@angular/core';
import { AndroidStoreService } from 'src/services/android-store.service';
import { TaskResponse } from 'src/models/TaskResponse';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Priority } from 'src/models/Priority';
import { AndroidApiService } from 'src/services/android-api.service';
import { ModalController } from '@ionic/angular';
import { PrioritySelectComponent } from 'src/shared/components/priority-select/priority-select.component';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    task: TaskResponse;
    isPrioritySelectorShown: boolean;
    date: Date; // for datapicker

    dateOptions: DatepickerOptions = {
        minYear: new Date().getFullYear(),
        minDate: new Date(Date.now()), // Minimal selectable date
        addStyle: {
            'font-size': '18px',
            'font-weight': 400,
        }
    }

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
                this.date = new Date(this.task.targetDate * 1000);
            })
        })
    }

    onEditTask() {
        this.task.targetDate = this.date.getTime() / 1000;
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
