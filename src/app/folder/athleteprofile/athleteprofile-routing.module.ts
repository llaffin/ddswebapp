import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleteprofilePage } from './athleteprofile.page';

const routes: Routes = [
  {
    path: 'athleteprofile',
    component: AthleteprofilePage,
    children: [
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(res => res.ProfilePageModule) },
      { path: 'metrics', loadChildren: () => import('./metrics/metrics.module').then(res => res.MetricsPageModule) },
      { path: 'cycle-plan', loadChildren: () => import('./cycleplan/cycleplan.module').then(res => res.CycleplanPageModule) }
    ]
  },
  {
    path: '', redirectTo: "athleteprofile/profile", pathMatch: "full"
  },
  {
    path: 'cycle-plan',
    loadChildren: () => import('./cycleplan/cycleplan.module').then( m => m.CycleplanPageModule)
  },
  {
    path: 'metrics',
    loadChildren: () => import('./metrics/metrics.module').then( m => m.MetricsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleteprofilePageRoutingModule {}
