import { Angulartics2Module } from 'angulartics2';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentMenuModule } from '@covalent/core';
import { LocalizeRouterModule } from 'localize-router';
import { MdButtonModule, MdIconModule, MdListModule, MdMenuModule, MdTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';
import { transMock } from '../mocks/translate.mock';

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angulartics2Module.forRoot([]),
        CovalentMenuModule,
        MdButtonModule,
        MdIconModule,
        MdListModule,
        MdMenuModule,
        MdTooltipModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        LocalizeRouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TranslateService, useValue: transMock },
      ],
      declarations: [
        HeaderComponent,
        LanguageMenuComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should raise change of language when changeLang is called', () => {
    component.currentLang = 'en';
    component.emitLangChange.subscribe(lang => component.currentLang = lang);
    component.onChangeLang('es');

    expect(component.currentLang).toBe('es');
  });
});
