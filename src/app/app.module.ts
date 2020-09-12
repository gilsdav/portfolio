import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbUserModule,
    NbActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
