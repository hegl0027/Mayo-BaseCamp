import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { counterReducer } from './common/counter';
import { UserEffects } from './common/user.effects';
import { PatientListEffects } from './patient-list/store/patient-list.effects';
import { PatientObservationEffects } from './patient-observation/store/patient-observations.effects';
import * as userReducer from './common/user.reducer';
import { AppState, initialState, reducers } from './common/app-state';
import { PATIENT_LIST_SERVICE, PatientListService } from './patient-list-service/patient-list.service';
import { PatientListDevService } from './patient-list-service/patient-list-dev.service';
import { CustomSerializer } from './common/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientObservationComponent } from './patient-observation/patient-observation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    NotificationsComponent,
    NotFoundComponent,
    PatientListComponent,
    PatientObservationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { initialState }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([UserEffects, PatientListEffects, PatientObservationEffects]),
    HttpClientModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: PATIENT_LIST_SERVICE, useClass: environment.env === 'dev' ? PatientListDevService : PatientListService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
