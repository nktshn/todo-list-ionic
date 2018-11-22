import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority, PriorityTitle } from 'src/models/Priority';

@Component({
    selector: 'app-priority-select',
    templateUrl: './priority-select.component.html',
    styleUrls: ['./priority-select.component.scss']
})
export class PrioritySelectComponent implements OnInit {

    @Output() prioritySelected = new EventEmitter<Priority>();
    priorities: Priority[] = [];

    constructor() { }

    ngOnInit() {
        for (let p in Priority.priorityMap) {
            let priority = new Priority(p as PriorityTitle);
            if (priority) {
                this.priorities.push(priority);
            }
        }
    }

    getPriorityColor(id) {
        return Priority.colorMap[id];
    }

    emitSelection(priority: Priority) {
        this.prioritySelected.emit(priority);
    }

}
