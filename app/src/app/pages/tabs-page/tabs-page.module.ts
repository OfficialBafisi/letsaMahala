import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { ContactsPageModule } from '../contacts/contacts.module';
import { CallLogPageModule } from "../call-log/call-log.module";
import { DialerPageModule } from '../dialer/dialer.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    CallLogPageModule,
    DialerPageModule,
    TabsPageRoutingModule,
    ContactsPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
