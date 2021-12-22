import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleteprofilePage } from './athleteprofile.page';

const routes: Routes = [
  {
    path: '',
    component: AthleteprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleteprofilePageRoutingModule {}
