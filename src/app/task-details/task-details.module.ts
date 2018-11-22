import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details.component';

@NgModule({
    declarations: [
        TaskDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: TaskDetailsComponent
            }
        ])
    ]
})
export class TaskDetailsModule { }
