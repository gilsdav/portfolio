import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsComponent } from './formations.component';
import { FormationsRoutingModule } from './formations-routing.module';
import { NbCardModule, NbListModule, NbAccordionModule, NbBadgeModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormationsRoutingModule,
    NbCardModule,
    NbListModule,
    NbAccordionModule
  ],
  declarations: [FormationsComponent]
})
export class FormationsModule { }
