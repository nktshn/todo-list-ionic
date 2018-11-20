import { Task } from "./Task";

export interface IStore {
    getTasks(): Task[];
    getTask(taskId: number): Task
    editTask(task: Task): Task
    createTask(task: Task): Task
    deleteTask(id: number): boolean

}