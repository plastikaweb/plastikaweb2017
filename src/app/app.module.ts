import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './src/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ActivityIndicatorComponent,
    WhoComponent,
    WorksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CovalentCoreModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [ Http ]
    }),
    HeaderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

