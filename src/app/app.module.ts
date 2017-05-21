import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import './rxjs-extensions';

import { firebaseConfig } from '../config/firebase.config';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WhoComponent } from './who/who.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header-module/header.module';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WhoComponent,
    ContactComponent,
    MainContentCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CovalentCoreModule,
    Ng2BreadcrumbModule.forRoot(),
    NgxChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

