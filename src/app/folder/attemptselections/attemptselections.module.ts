import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttemptselectionsPageRoutingModule } from './attemptselections-routing.module';

import { AttemptselectionsPage } from './attemptselections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttemptselectionsPageRoutingModule
  ],
  declarations: [AttemptselectionsPage]
})
export class AttemptselectionsPageModule {}
