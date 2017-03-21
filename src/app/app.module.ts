import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ActivityIndicatorComponent
  ],
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
