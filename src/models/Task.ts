import { Priority } from "./Priority";

export class Task {
    title: string;
    description: string;
    priority: Priority;
    targetDate: number; //unix timestamp
}