import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraininganalysisPage } from './traininganalysis.page';

const routes: Routes = [
  {
    path: 'traininganalysis',
    component: TraininganalysisPage,
    children: [
      { path: 'squat', loadChildren: () => import('./squat/squat.module').then(res => res.SquatPageModule) },
      { path: 'bench', loadChildren: () => import('./bench/bench.module').then(res => res.BenchPageModule) },
      { path: 'deadlift', loadChildren: () => import('./deadlift/deadlift.module').then(res => res.DeadliftPageModule) }
    ]
  },
  {
    path: '', redirectTo: "traininganalysis/squat", pathMatch: "full"
  },
  {
    path: 'squat',
    loadChildren: () => import('./squat/squat.module').then( m => m.SquatPageModule)
  },
  {
    path: 'bench',
    loadChildren: () => import('./bench/bench.module').then( m => m.BenchPageModule)
  },
  {
    path: 'deadlift',
    loadChildren: () => import('./deadlift/deadlift.module').then( m => m.DeadliftPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraininganalysisPageRoutingModule {}
