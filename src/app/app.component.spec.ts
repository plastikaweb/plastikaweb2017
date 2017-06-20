import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieService } from 'ng2-cookies';
import { CovalentLayoutModule } from '@covalent/core';
import { LocalizeRouterModule, LocalizeRouterService } from 'localize-router';
import { RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { ContactModule } from 'app/contact-module/contact.module';
import { HeaderModule } from './header-module/header.module';
import { MainContentModule } from './main-content-module/main-content.module';
import { transMock } from './mocks/translate.mock';
import { WhoModule } from './who-module/who.module';
import { WorksModule } from './works-module/works.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        Angulartics2GoogleAnalytics,
        CookieService,
        LocalizeRouterService,
        { provide: TranslateService, useValue: transMock },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        Angulartics2Module.forRoot([]),
        CovalentLayoutModule,
        LocalizeRouterModule.forRoot([]),
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        ContactModule,
        HeaderModule,
        MainContentModule,
        WhoModule,
        WorksModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
