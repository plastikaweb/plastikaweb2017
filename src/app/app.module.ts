import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact-module/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header-module/header.module';
import { MainContentModule } from './main-content-module/main-content.module';
import { WorksModule } from './works-module/works.module';
import { WhoModule } from './who-module/who.module';
import { ContactModule } from './contact-module/contact.module';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CovalentCoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    HeaderModule,
    MainContentModule,
    WhoModule,
    WorksModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

