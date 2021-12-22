import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CycleplanPage } from './cycleplan.page';

const routes: Routes = [
  {
    path: '',
    component: CycleplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CycleplanPageRoutingModule {}
