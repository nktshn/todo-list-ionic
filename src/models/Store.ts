import { Task } from "./Task";

export interface IStore {
    getTasks(): any;
    getTask(taskId: number): any
    editTask(task: Task): any
    createTask(task: Task): any
    deleteTask(id: number): any

}