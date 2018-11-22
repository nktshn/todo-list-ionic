export class Priority {
    constructor(title: PriorityTitle) {
        this.title = title;
        this.id = Priority.priorityMap[title];
    }
    readonly id: number;
    title: PriorityTitle;

    static readonly colorMap = {
        0:'#e02727',
        1:'#e7c12b',
        2:'#66adfb',
        3:'#c8c8c8',
    };
    static readonly priorityMap = {
        'Critical': 0,
        'Major': 1,
        'Normal': 2,
        'Minor': 3
    }
}

export type PriorityTitle = 'Critical' | 'Major' | 'Normal' | 'Minor';



