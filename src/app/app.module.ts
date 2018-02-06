import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

//------------ABOVE are library imports-----------------^^^^
//----------------------------------------------------------
//------------BELOW are application specific imports ---VVVV

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

//ngrx store state
import { AppState, initialState, reducers, effects } from './app-state';
import { CustomSerializer } from './common-store/router';

//Services
import { PATIENT_LIST_SERVICE, PatientListService } from './patient-list-service/patient-list.service';
import { PatientListDevService } from './patient-list-service/patient-list-dev.service';
import { FHIR_DATA_SERVICE, FhirDataService } from './fhir-service/fhir-data.service'
import { FhirDataDevService } from './fhir-service/fhir-data-dev.service';
import { FhirDataMayoService } from './fhir-service/fhir-data.service';

//Components
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
    EffectsModule.forRoot(effects),
    HttpClientModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: PATIENT_LIST_SERVICE, useClass: environment.env === 'dev' ? PatientListDevService : PatientListService },
    { provide: FHIR_DATA_SERVICE, useClass: environment.env === 'dev' ? FhirDataDevService : FhirDataMayoService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
