import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CycleplanPageRoutingModule } from './cycleplan-routing.module';

import { CycleplanPage } from './cycleplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CycleplanPageRoutingModule
  ],
  declarations: [CycleplanPage]
})
export class CycleplanPageModule {}
