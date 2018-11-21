export class Priority {
    constructor(title: PriorityTitle) {
        this.title = title;
        this.id = priorityMap[title];
    }
    readonly id: number;
    title: PriorityTitle;
}

type PriorityTitle = 'Critical' | 'Major' | 'Normal' | 'Minor';

const priorityMap = {
    'Critical': 0,
    'Major': 1,
    'Normal': 2,
    'Minor': 3
}