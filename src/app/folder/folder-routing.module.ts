import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'athleteprofile',
    loadChildren: () => import('./athleteprofile/athleteprofile.module').then( m => m.AthleteprofilePageModule)
  },
  {
    path: 'programming',
    loadChildren: () => import('./programming/programming.module').then( m => m.ProgrammingPageModule)
  },
  {
    path: 'traininganalysis',
    loadChildren: () => import('./traininganalysis/traininganalysis.module').then( m => m.TraininganalysisPageModule)
  },
  {
    path: 'bodyweightlog',
    loadChildren: () => import('./bodyweightlog/bodyweightlog.module').then( m => m.BodyweightlogPageModule)
  },
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module').then( m => m.CheckinPageModule)
  },
  {
    path: 'rpetables',
    loadChildren: () => import('./rpetables/rpetables.module').then( m => m.RpetablesPageModule)
  },
  {
    path: 'attemptselections',
    loadChildren: () => import('./attemptselections/attemptselections.module').then( m => m.AttemptselectionsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
