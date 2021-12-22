import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraininganalysisPageRoutingModule } from './traininganalysis-routing.module';

import { TraininganalysisPage } from './traininganalysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraininganalysisPageRoutingModule
  ],
  declarations: [TraininganalysisPage]
})
export class TraininganalysisPageModule {}
