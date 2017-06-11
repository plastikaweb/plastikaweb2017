import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterService } from 'localize-router';
import { RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { ContactModule } from 'app/contact-module/contact.module';
import { HeaderModule } from './header-module/header.module';
import { localizeParserMock } from './mocks/localize.mock';
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
        LocalizeRouterService,
        { provide: LocalizeParser, useValue: localizeParserMock },
        { provide: TranslateService, useValue: transMock },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        CovalentCoreModule,
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
