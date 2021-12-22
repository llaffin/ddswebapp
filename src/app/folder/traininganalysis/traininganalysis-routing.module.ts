import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraininganalysisPage } from './traininganalysis.page';

const routes: Routes = [
  {
    path: '',
    component: TraininganalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraininganalysisPageRoutingModule {}
