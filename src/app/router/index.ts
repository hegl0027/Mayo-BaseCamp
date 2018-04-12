import { Routes } from '@angular/router';
import { PatientObservationComponent } from '../patient-observation/patient-observation.component';
import { PatientConditionComponent } from '../patient-condition/patient-condition.component';
import { CounterComponent } from '../delete-me/examples/counter/counter.component';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsComponent } from '../delete-me/examples/forms/forms.component';
import { ExamplesComponent } from '../delete-me/examples/examples.component';
import { FhirComponent } from '../delete-me/examples/fhir/fhir.component';
import { CleanSlateComponent } from '../delete-me/clean-slate/clean-slate.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'examples/patient', component: PatientListComponent },
  { path: 'examples/patient-observation', component: PatientObservationComponent },
  { path: 'examples/patient-condition', component: PatientConditionComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'examples/counter', component: CounterComponent },
  { path: 'examples/forms', component: FormsComponent },
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
