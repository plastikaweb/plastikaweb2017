import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/switchMap';

import { afDbMock } from '../mocks/works.mock';
import { SharedModule } from '../shared/shared.module';
import { transMock } from '../mocks/translate.mock';
import { WhoComponent } from './who.component';

describe('Who Component', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CovalentCoreModule,
          BrowserAnimationsModule,
          NgxChartsModule,
          TranslateModule.forRoot(),
          SharedModule
        ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          { provide: TranslateService, useValue: transMock },
          { provide: AngularFireDatabase, useValue: afDbMock }
        ],
        declarations: [ WhoComponent ]
      })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
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
