import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';

import { HeaderComponent } from './header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([])
      ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ],
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
