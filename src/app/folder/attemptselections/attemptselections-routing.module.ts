import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttemptselectionsPage } from './attemptselections.page';

const routes: Routes = [
  {
    path: '',
    component: AttemptselectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttemptselectionsPageRoutingModule {}
