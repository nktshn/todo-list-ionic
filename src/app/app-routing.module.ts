import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'task/:id', component: TaskDetailsComponent },
    // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    // { path: 'task/:id', loadChildren: './task-details/task-details.module#TaskDetailsModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
