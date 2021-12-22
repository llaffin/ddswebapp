import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquatPage } from './squat.page';

const routes: Routes = [
  {
    path: '',
    component: SquatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquatPageRoutingModule {}
