import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeadliftPageRoutingModule } from './deadlift-routing.module';

import { DeadliftPage } from './deadlift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeadliftPageRoutingModule
  ],
  declarations: [DeadliftPage]
})
export class DeadliftPageModule {}
