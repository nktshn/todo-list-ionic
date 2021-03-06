import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { HomePageModule } from './home/home.module';
import { TaskDetailsModule } from './task-details/task-details.module';
import { FormsModule } from '@angular/forms';
import { PrioritySelectComponent } from 'src/shared/components/priority-select/priority-select.component';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [
    ],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        HomePageModule,
        TaskDetailsModule,
        FormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
