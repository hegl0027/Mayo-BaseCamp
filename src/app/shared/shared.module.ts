import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

const providers = [];
const components = [SpinnerComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components],
  exports: [...components],
  providers: [...providers]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...providers]
    };
  }
}
