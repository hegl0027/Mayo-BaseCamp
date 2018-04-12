import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FhirComponent } from './fhir.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FhirComponent]
})
export class FhirModule { }
