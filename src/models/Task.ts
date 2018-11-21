import { Priority } from "./Priority";

export interface Task {
    title: string;
    description: string;
    priority: Priority;
    targetDate: number; //unix timestamp
}