import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ng2-cookies';
import { CovalentLayoutModule, TdMediaService } from '@covalent/core';
import { Http } from '@angular/http';
import { LocalizeRouterModule } from 'localize-router';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { appRoutes, AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact-module/contact.module';
import { CookiesSnackbarComponent } from './cookies-snackbar-module/cookies-snackbar.component';
import { HeaderModule } from './header-module/header.module';
import { MainContentModule } from './main-content-module/main-content.module';
import { WorksModule } from './works-module/works.module';
import { SharedModule } from './shared/shared.module';
import { WhoModule } from './who-module/who.module';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    LocalizeRouterModule.forRoot(appRoutes),
    ContactModule,
    HeaderModule,
    MainContentModule,
    WhoModule,
    WorksModule
  ],
  providers: [ TdMediaService, CookieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

