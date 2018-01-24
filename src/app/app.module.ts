import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { counterReducer } from './common/counter';
import { UserEffects } from './common/user.effects';
import { PatientListEffects } from './patient-list/ngrx-store/patient-list.effects';
import * as userReducer from './common/user.reducer';
import { AppState, initialState, reducers, CustomSerializer } from './common/app-state';
import { PATIENT_LIST_SERVICE, PatientListService } from './patient-list-service/patient-list.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    NotificationsComponent,
    NotFoundComponent,
    PatientListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { initialState }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([UserEffects, PatientListEffects]),
    HttpModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: PATIENT_LIST_SERVICE, useClass: PatientListService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
