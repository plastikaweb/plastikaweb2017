import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
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
import { HeaderModule } from './header-module/header.module';
import { MainContentModule } from './main-content-module/main-content.module';
import { WorksModule } from './works-module/works.module';
import { WhoModule } from './who-module/who.module';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
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
  providers: [ TdMediaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

