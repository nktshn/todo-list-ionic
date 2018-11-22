import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/shared/shared.module';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { FormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';


@NgModule({
    declarations: [
        TaskDetailsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        TextareaAutosizeModule,
        FormsModule,
        NgDatepickerModule,
        RouterModule.forChild([
            {
                path: '',
                component: TaskDetailsComponent
            }
        ])
    ]
})
export class TaskDetailsModule { }
