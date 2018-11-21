import { Task } from "./Task";
import { Observable } from "rxjs";
import { TaskResponse } from "./TaskResponse";

export interface IStore {
    getTasks(): Observable<TaskResponse[] | null>;
    getTask(taskId: number): Observable<TaskResponse | null>
    editTask(task: Task): Observable<boolean>
    createTask(task: Task): Observable<boolean>
    deleteTask(id: number): Observable<boolean>
}