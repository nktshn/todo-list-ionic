import { Priority } from "./Priority";

export interface Task {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    targetDate: number; //unix timestamp
}