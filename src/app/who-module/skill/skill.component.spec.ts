import { AngularFireDatabase } from 'angularfire2/database';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';
import { LocalizeRouterModule } from 'localize-router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { afDbMock } from '../../mocks/works.mock';
import { ImagesService } from '../../shared/images-service/images.service';
import { SkillComponent } from './skill.component';
import { TagsService } from '../../shared/tags-service/tags.service';
import { transMock } from '../../mocks/translate.mock';
import { WorksService } from '../../shared/works-service/works.service';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillComponent ],
      imports: [
        CovalentCoreModule,
        LocalizeRouterModule.forRoot([]),
        NgxChartsModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot()
      ],
      providers: [
        WorksService,
        TagsService,
        ImagesService,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TranslateService, useValue: transMock },
        { provide: AngularFireDatabase, useValue: afDbMock }
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
