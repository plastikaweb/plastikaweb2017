import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieService } from 'ng2-cookies';
import { LocalizeRouterModule } from 'localize-router';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CookiesSnackbarComponent } from './cookies-snackbar.component';

describe('CookiesSnackbarComponent', () => {
  let component: CookiesSnackbarComponent;
  let fixture: ComponentFixture<CookiesSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LocalizeRouterModule.forRoot([]),
        MdButtonModule,
        MdIconModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot()
      ],
      declarations: [ CookiesSnackbarComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
