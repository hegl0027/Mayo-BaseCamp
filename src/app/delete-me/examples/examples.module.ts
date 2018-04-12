import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ExamplesComponent } from './examples.component';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';
import { COUNTER } from './counter/state/counter.actions';
import * as fromCounter from './counter/state/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter/state/counter.effects';
import { FormsComponent } from './forms/forms.component';
import { FhirModule } from './fhir/fhir.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature(COUNTER, fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects]),
    HighlightModule.forRoot({theme: 'vs' }),
    FhirModule
  ],
  declarations: [CounterComponent, ExamplesComponent, FormsComponent],
  exports: [CounterComponent, ExamplesComponent, FormsComponent]
})
export class ExamplesModule { }
