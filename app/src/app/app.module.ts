import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import * as firebase from 'firebase';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationService } from './providers/authentication.service';
firebase.initializeApp(environment.firebase);
import { Contacts } from '@ionic-native/contacts';
import { CallLog } from '@ionic-native/call-log/ngx'
import { ContactsService } from './providers/contacts.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, AuthenticationService, Contacts, CallLog, ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
