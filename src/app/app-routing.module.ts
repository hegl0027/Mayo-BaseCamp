import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { NotificationsComponent } from './notifications/notifications.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
