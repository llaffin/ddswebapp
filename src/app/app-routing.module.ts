import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./folder/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/loginscreen/loginscreen.module').then(m => m.LoginscreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./folder/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'athlete-profile',
    loadChildren: () => import('./folder/athleteprofile/athleteprofile.module').then(m => m.AthleteprofilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'programming',
    loadChildren: () => import('./folder/programming/programming.module').then(m => m.ProgrammingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'training-analysis',
    loadChildren: () => import('./folder/traininganalysis/traininganalysis.module').then(m => m.TraininganalysisPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bodyweight-log',
    loadChildren: () => import('./folder/bodyweightlog/bodyweightlog.module').then(m => m.BodyweightlogPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'check-in',
    loadChildren: () => import('./folder/checkin/checkin.module').then(m => m.CheckinPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rpe-tables',
    loadChildren: () => import('./folder/rpetables/rpetables.module').then(m => m.RpetablesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'attempt-selections',
    loadChildren: () => import('./folder/attemptselections/attemptselections.module').then(m => m.AttemptselectionsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notes',
    loadChildren: () => import('./folder/notes/notes.module').then(m => m.NotesPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
