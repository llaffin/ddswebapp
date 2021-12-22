import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyweightlogPageRoutingModule } from './bodyweightlog-routing.module';

import { BodyweightlogPage } from './bodyweightlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyweightlogPageRoutingModule
  ],
  declarations: [BodyweightlogPage]
})
export class BodyweightlogPageModule {}
