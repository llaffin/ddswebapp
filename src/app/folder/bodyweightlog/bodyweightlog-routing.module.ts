import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyweightlogPage } from './bodyweightlog.page';

const routes: Routes = [
  {
    path: '',
    component: BodyweightlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyweightlogPageRoutingModule {}
