import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './index';


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
