import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanSlateModule } from './clean-slate/clean-slate.module';
import { ExamplesComponent } from './examples/examples.component';
import { CleanSlateComponent } from './clean-slate/clean-slate.component';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsComponent } from './examples/forms/forms.component';
import { CounterComponent } from './examples/counter/counter.component';
import { FhirComponent } from './examples/fhir/fhir.component';
import { RouterModule } from '@angular/router';
import { COUNTER, CounterEffects, reducer as counterReducer } from './examples/counter/state';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { ComponentsComponent } from './components/components.component';
import { StarWarsService } from './shared/starwars.service';
import { StarWarsEffects } from './examples/data-dependency-chain/state/starwars.effects';
import { STAR_WARS } from './examples/data-dependency-chain/state/starwars.actions';
import { reducer as starWarsReducer } from './examples/data-dependency-chain/state/starwars.reducer';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PatientObservationComponent } from './examples/fhir/patient-observation/patient-observation.component';
import { PatientConditionComponent } from './examples/fhir/patient-condition/patient-condition.component';
import { PatientListComponent } from './examples/fhir/patient-list/patient-list.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { DialogModule } from './components/dialogs/comp/ng-dialog.module';
import { DataDependencyChainComponent } from './examples/data-dependency-chain/data-dependency-chain.component';
import { StarshipComponent } from './examples/data-dependency-chain/starship/starship.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CleanSlateModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature(COUNTER, counterReducer),
    StoreModule.forFeature(STAR_WARS, starWarsReducer),
    EffectsModule.forFeature([CounterEffects, StarWarsEffects]),
    HighlightModule.forRoot({ theme: 'vs' }),
    DialogModule.forRoot(),
    SharedModule
  ],
  declarations: [
    CounterComponent,
    FhirComponent,
    ExamplesComponent,
    FormsComponent,
    DatagridComponent,
    ComponentsComponent,
    DatepickerComponent,
    PatientListComponent,
    PatientObservationComponent,
    PatientConditionComponent,
    DialogsComponent,
    DataDependencyChainComponent,
    StarshipComponent
  ],
  exports: [
    CounterComponent,
    FhirComponent,
    ExamplesComponent,
    FormsComponent,
    CleanSlateComponent,
    DatagridComponent,
    ComponentsComponent,
    DatepickerComponent,
    PatientListComponent,
    PatientObservationComponent,
    PatientConditionComponent,
    DialogsComponent,
    DataDependencyChainComponent
  ],
  providers: [StarWarsService]
})
export class DeleteMeModule {
}
