import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthleteprofilePageRoutingModule } from './athleteprofile-routing.module';

import { AthleteprofilePage } from './athleteprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteprofilePageRoutingModule
  ],
  declarations: [AthleteprofilePage]
})
export class AthleteprofilePageModule {}
