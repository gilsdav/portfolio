import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbListModule, NbTabsetModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';


@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    NbListModule,
    NbTabsetModule,
    NbCardModule,
    NbIconModule
  ]
})
export class TrainingModule { }
