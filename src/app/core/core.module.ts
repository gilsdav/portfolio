import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbButtonModule } from '@nebular/theme';

import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { NbMenuInternalService, NbMenuService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbButtonModule
  ],
  declarations: [CoreComponent, HomeComponent],
  providers: [NbSidebarService, NbMenuInternalService, NbMenuService],
  exports: [CoreComponent, HomeComponent]
})
export class CoreModule { }
