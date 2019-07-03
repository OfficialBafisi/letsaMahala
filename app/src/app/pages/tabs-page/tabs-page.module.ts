import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';
import { ContactsPageModule } from '../contacts/contacts.module';
import { CallLogPageModule } from "../call-log/call-log.module";

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    CallLogPageModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule,
    ContactsPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
