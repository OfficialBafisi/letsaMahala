import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'recent',
        children: [
          {
            path: '',
            loadChildren: '../call-log/call-log.module#CallLogPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: 'contacts',
        children: [
        {
          path: '',
          loadChildren: '../contacts/contacts.module#ContactsPageModule'
        }]
      },
      {
        path: 'dialer',
        children: [
        {
          path: '',
          loadChildren: '../dialer/dialer.module#DialerPageModule'
        }]
      },
      {
        path: '',
        redirectTo: '/app/tabs/recent',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

