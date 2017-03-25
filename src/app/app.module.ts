import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ActivityIndicatorComponent,
    WhoComponent,
    WorksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CovalentCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

