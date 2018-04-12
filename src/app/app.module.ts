import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './router/app-routing.module';
import { effects, metaReducers, reducers } from './state/app-state';
import { CustomSerializer } from './router/state';
import { PATIENT_LIST_SERVICE, PatientListService } from './patient-list-service/patient-list.service';
import { PatientListDevService } from './patient-list-service/patient-list-dev.service';
import { FHIR_DATA_SERVICE, FhirDataMayoService } from './fhir-service/fhir-data.service';
import { FhirDataDevService } from './fhir-service/fhir-data-dev.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientObservationComponent } from './patient-observation/patient-observation.component';
import { PatientConditionComponent } from './patient-condition/patient-condition.component';
import { HighlightModule } from 'ngx-highlightjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DeleteMeModule } from './delete-me/delete-me.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    NotFoundComponent,
    PatientListComponent,
    PatientObservationComponent,
    PatientConditionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers } ),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    HttpClientModule,
    HighlightModule.forRoot({ theme: 'vs'}),
    DeleteMeModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: PATIENT_LIST_SERVICE, useClass: environment.env === 'dev' ? PatientListDevService : PatientListService },
    { provide: FHIR_DATA_SERVICE, useClass: environment.env === 'dev' ? FhirDataDevService : FhirDataMayoService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
