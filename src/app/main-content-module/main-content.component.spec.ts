import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentMediaModule, TdMediaService } from '@covalent/core';
import { LocalizeRouterModule } from 'localize-router';
import { MdCardModule, MdIconModule, MdListModule, MdProgressBarModule, MdSnackBarModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactModule } from '../contact-module/contact.module';
import { CookiesModule } from '../cookies-module/cookies.module';
import { CookieService } from 'ng2-cookies';
import { CookiesSnackBarModule } from '../cookies-snackbar-module/cookies-snackbar.module';
import { MainContentComponent } from './main-content.component';
import { NotFoundComponent } from '../not-found-module/not-found.component';
import { WhoModule } from '../who-module/who.module';
import { WorksModule } from '../works-module/works.module';

describe('Main Content Component', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        CookieService,
        TdMediaService,
        TranslateService
      ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        CookiesModule,
        CookiesSnackBarModule,
        ContactModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CookiesModule,
        LocalizeRouterModule.forRoot([]),
        MdCardModule,
        MdIconModule,
        MdListModule,
        MdProgressBarModule,
        MdSnackBarModule,
        NgxChartsModule,
        Ng2BreadcrumbModule.forRoot(),
        TranslateModule.forRoot(),
        WhoModule,
        WorksModule
      ],
      declarations: [
        ActivityIndicatorComponent,
        MainContentComponent,
        NotFoundComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    component.ngAfterViewInit();
  });

  it('should be created', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
