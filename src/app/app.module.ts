import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularFireModule } from 'angularfire2';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import './rxjs-extensions';

import { firebaseConfig } from '../config/firebase.config';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';
import { ArrayExtractPipe } from './pipes/array-extract.pipe';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WhoComponent,
    WorksComponent,
    ContactComponent,
    MainContentCardComponent,
    ArrayExtractPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CovalentCoreModule,
    Ng2BreadcrumbModule.forRoot(),
    NgxChartsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [ Http ]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    HeaderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

