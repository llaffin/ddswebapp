import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammingPage } from './programming.page';

const routes: Routes = [
  {
    path: 'programming',
    component: ProgrammingPage,
    children: [
      { path: 'day', loadChildren: () => import('./day/day.module').then(res => res.DayPageModule) },
      { path: 'week', loadChildren: () => import('./week/week.module').then(res => res.WeekPageModule) },
      { path: 'cycle', loadChildren: () => import('./cycle/cycle.module').then(res => res.CyclePageModule) }
    ]
  },
  {
    path: '', redirectTo: "programming/day", pathMatch: "full"
  },
  {
    path: 'day',
    loadChildren: () => import('./day/day.module').then( m => m.DayPageModule)
  },
  {
    path: 'week',
    loadChildren: () => import('./week/week.module').then( m => m.WeekPageModule)
  },
  {
    path: 'cycle',
    loadChildren: () => import('./cycle/cycle.module').then( m => m.CyclePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammingPageRoutingModule { }
