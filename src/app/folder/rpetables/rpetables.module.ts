import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpetablesPageRoutingModule } from './rpetables-routing.module';

import { RpetablesPage } from './rpetables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpetablesPageRoutingModule
  ],
  declarations: [RpetablesPage]
})
export class RpetablesPageModule {}
