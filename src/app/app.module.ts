import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';

@NgModule({
    declarations: [AppComponent, ObjectToArrayPipe],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot({mode: 'md'}), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
	exports: [
		ObjectToArrayPipe
	],
    bootstrap: [AppComponent]
})
export class AppModule {}
