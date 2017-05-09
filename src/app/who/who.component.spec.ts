import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from 'ng2-translate';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WhoComponent } from './who.component';

describe('Who Component', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        NgxChartsModule
      ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ],
      declarations: [ WhoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create who component', () => {
    expect(component).toBeTruthy();
  });
});
