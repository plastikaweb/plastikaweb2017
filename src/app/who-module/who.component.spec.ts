import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { APP_BASE_HREF } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/switchMap';

import { WhoComponent } from './who.component';
import { transMock } from '../mocks/translate.mock';

describe('Who Component', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CovalentCoreModule,
          BrowserAnimationsModule,
          NgxChartsModule
        ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          { provide: TranslateService, useValue: transMock }
        ],
        declarations: [ WhoComponent, TranslatePipe ]
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
