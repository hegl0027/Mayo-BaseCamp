import { Routes } from '@angular/router';
import { PatientObservationComponent } from '../delete-me/examples/fhir/patient-observation/patient-observation.component';
import { PatientConditionComponent } from '../delete-me/examples/fhir/patient-condition/patient-condition.component';
import { CounterComponent } from '../delete-me/examples/counter/counter.component';
import { PatientListComponent } from '../delete-me/examples/fhir/patient-list/patient-list.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsComponent } from '../delete-me/examples/forms/forms.component';
import { ExamplesComponent } from '../delete-me/examples/examples.component';
import { FhirComponent } from '../delete-me/examples/fhir/fhir.component';
import { CleanSlateComponent } from '../delete-me/clean-slate/clean-slate.component';
import { ComponentsComponent } from '../delete-me/components/components.component';
import { DatagridComponent } from '../delete-me/components/datagrid/datagrid.component';
import { DatepickerComponent } from '../delete-me/components/datepicker/datepicker.component';
import { DialogsComponent } from '../delete-me/components/dialogs/dialogs.component';
import { DataDependencyChainComponent } from '../delete-me/examples/data-dependency-chain/data-dependency-chain.component';
import { PamComponent } from '../delete-me/examples/pam/pam.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'examples/patient', component: PatientListComponent },
  { path: 'examples/patient-observation', component: PatientObservationComponent },
  { path: 'examples/patient-condition', component: PatientConditionComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'examples/counter', component: CounterComponent },
  { path: 'examples/forms', component: FormsComponent },
  { path: 'examples/data-dependency-chaining', component: DataDependencyChainComponent },
  { path: 'examples/pam', component: PamComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/datagrid', component: DatagridComponent },
  { path: 'components/datepicker', component: DatepickerComponent },
  { path: 'components/dialogs', component: DialogsComponent },
  { path: 'clean-slate', component: CleanSlateComponent },
  {
    path: 'examples/fhir',
    component: FhirComponent,
    children: [
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      { path: 'patient', component: PatientListComponent },
      { path: 'observations', component: PatientObservationComponent },
      { path: 'conditions', component: PatientConditionComponent },
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
