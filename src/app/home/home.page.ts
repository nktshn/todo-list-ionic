import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';
import { AndroidStoreService } from 'src/services/android-store.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    
    tasks: Task[];

    constructor(
        private androidStore: AndroidStoreService
    ) {

    }

    ngOnInit(): void {
        this.tasks = this.androidStore.getTasks();
        console.log(this.tasks);
        
    }
}
