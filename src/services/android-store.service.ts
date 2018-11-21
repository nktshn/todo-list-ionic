import { Injectable } from '@angular/core';
import { IStore } from 'src/models/Store';
import { Task } from 'src/models/Task';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'
import { TaskResponse } from 'src/models/TaskResponse';

@Injectable({
    providedIn: 'root'
})
export class AndroidStoreService implements IStore {

    constructor(
        private storage: Storage
    ) { }

    private taskPrefix = 'task';
    private taskIdPrefix = 'id_index';


    getTasks(): Observable<TaskResponse[] | null> {
        return new Observable(obs => {
            let res: TaskResponse[] = [];
            this.storage.forEach((value, key, iterationNumber) => {
                if (key.substring(0, this.taskPrefix.length) === this.taskPrefix) {
                    res.push(JSON.parse(value));
                }
            }).then(() => {
                obs.next(res);
            }).catch((err) => {
                obs.next(null);
            });;

        })
    }
    getTask(taskId: number): Observable<TaskResponse | null> {
        return new Observable(obs => {
            this.storage.get(`${this.taskPrefix}-${taskId}`).then((taskString) => {
                let taskResponse: TaskResponse = JSON.parse(taskString);
                obs.next(taskResponse);
            }).catch((err) => {
                obs.next(null);
            });
        })
    }

    editTask(task: TaskResponse): Observable<boolean> {
        return new Observable(obs => {
            this.storage.set(`${this.taskPrefix}-${task['id']}`, JSON.stringify(task)).then(() => {
                obs.next(true);
            }).catch(e => {
                obs.next(false);
            });
        })
    }

    createTask(task: Task): Observable<boolean> {
        return new Observable<boolean>(obs => {
            this.generateId().subscribe(index => {
                task['id'] = index;
                this.storage.set(`${this.taskPrefix}-${task['id']}`, JSON.stringify(task)).then(() => {
                    obs.next(true);
                }).catch(e => {
                    obs.next(false);
                });
            });
        });
    }

    deleteTask(taskId: number): Observable<boolean> {
        return new Observable(obs => {
            this.storage.remove(`${this.taskPrefix}-${taskId}`).then((result) => {
                obs.next(true)
            }).catch((err) => {
                obs.next(false)
            });
        })
    }

    private generateId(): Observable<number> {
        return new Observable(obs => {
            this.storage.get(this.taskIdPrefix).then((result) => {
                this.storage.set(this.taskIdPrefix, Number(++result));
                obs.next(Number(++result))
            }).catch((err) => {                
            });
        })
    }





}
