import { Injectable } from '@angular/core';
import { IStore } from 'src/models/Store';
import { Task } from 'src/models/Task';

@Injectable({
    providedIn: 'root'
})
export class AndroidStoreService implements IStore {

    constructor() { }

    
    getTasks(): Task[] {
        return [
            {
                id: 0,
                title: 'Task 1',
                description: 'My first task',
                priority: { id: 0, title: 'Major' },
                targetDate: 126351635,
            },
            {
                id: 1,
                title: 'Task 2',
                description: 'My second task',
                priority: { id: 1, title: 'Normal' },
                targetDate: 126351635,
            },
        ]
    }
    getTask(taskId: number): Task {
        throw new Error("Method not implemented.");
    }
    editTask(task: Task): Task {
        throw new Error("Method not implemented.");
    }
    createTask(task: Task): Task {
        throw new Error("Method not implemented.");
    }
    deleteTask(id: number): boolean {
        throw new Error("Method not implemented.");
    }




    
}
