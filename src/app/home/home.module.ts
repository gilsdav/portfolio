import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TypingComponent } from './components/typing/typing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HomeComponent,
    TypingComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbIconModule
  ]
})
export class HomeModule { }
