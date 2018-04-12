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

@NgModule({
  imports: [
    CommonModule,
    CleanSlateModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature(COUNTER, counterReducer),
    EffectsModule.forFeature([CounterEffects]),
    HighlightModule.forRoot({theme: 'vs' }),
    HighlightModule.forRoot({ theme: 'vs' }),
  ],
  declarations: [CounterComponent, FhirComponent, ExamplesComponent, FormsComponent],
  exports: [CounterComponent, FhirComponent, ExamplesComponent, FormsComponent, CleanSlateComponent]
})
export class DeleteMeModule {
}
