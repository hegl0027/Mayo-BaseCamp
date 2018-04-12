import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesModule } from './examples/examples.module';
import { CleanSlateModule } from './clean-slate/clean-slate.module';
import { ExamplesComponent } from './examples/examples.component';
import { CleanSlateComponent } from './clean-slate/clean-slate.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    ExamplesModule,
    CleanSlateModule,
    HighlightModule.forRoot({theme: 'vs' }),
  ],
  declarations: [],
  exports: [ExamplesComponent, CleanSlateComponent]
})
export class DeleteMeModule {
}
