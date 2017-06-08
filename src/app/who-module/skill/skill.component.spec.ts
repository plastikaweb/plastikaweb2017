import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateService } from '@ngx-translate/core';

import { SkillComponent } from './skill.component';
import { transMock } from '../../mocks/translate.mock';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillComponent ],
      imports: [ CovalentCoreModule, NgxChartsModule ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TranslateService, useValue: transMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should change charts units accordling current language', inject([ TranslateService ], (service: TranslateService) => {
    service.getTranslation('en')
      .subscribe(data => component.translateChartsUnits(data));

    expect(component.proficiency).toBe('proficiency');
    expect(component.years).toBe('years');
  }));

  it('should return proficiency label formatted', () => {
    expect(component.formatProficiency('50')).toBe('50%');
  });
});
