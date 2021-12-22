import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeadliftPage } from './deadlift.page';

const routes: Routes = [
  {
    path: '',
    component: DeadliftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeadliftPageRoutingModule {}
