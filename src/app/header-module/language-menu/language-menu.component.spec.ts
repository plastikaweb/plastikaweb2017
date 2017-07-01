import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MdMenuModule, MdTooltipModule } from '@angular/material';

import { LanguageMenuComponent } from './language-menu.component';
import { CovalentMenuModule } from '@covalent/core';

describe('Language Menu Component', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentMenuModule,
        MdMenuModule,
        MdTooltipModule
      ],
      declarations: [ LanguageMenuComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
  });

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should raise change of language when changeLang is called', () => {
    component.currentLang = 'en';
    component.emitCurrentLang.subscribe(lang => component.currentLang = lang);
    component.changeLang('es');

    expect(component.currentLang).toBe('es');
  });

});
