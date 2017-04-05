import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './src/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WhoComponent,
    WorksComponent,
    ContactComponent,
    MainContentCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CovalentCoreModule.forRoot(),
    Ng2BreadcrumbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [ Http ]
    }),
    NgxChartsModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

