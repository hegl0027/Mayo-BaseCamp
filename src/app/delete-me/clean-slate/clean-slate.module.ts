import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanSlateComponent } from './clean-slate.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule.forRoot({theme: 'vs' }),
  ],
  declarations: [CleanSlateComponent],
  exports: [CleanSlateComponent]
})
export class CleanSlateModule { }
