import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpetablesPage } from './rpetables.page';

const routes: Routes = [
  {
    path: '',
    component: RpetablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpetablesPageRoutingModule {}
