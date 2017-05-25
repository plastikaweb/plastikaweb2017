import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import { MainContentCardComponent } from './main-content-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { WorksComponent } from '../works-module/works.component';
import { ContactComponent } from '../contact/contact.component';
import { WhoComponent } from '../who/who.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';

describe('Main Content Card Component', () => {
  let component: MainContentCardComponent;
  let fixture: ComponentFixture<MainContentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule,
        TranslateModule.forRoot(),
        RouterModule,
        NgxChartsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ChangeDetectorRef
      ],
      declarations: [
        MainContentCardComponent,
        WorksComponent,
        WhoComponent,
        ContactComponent,
        ArrayExtractPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create main content card component', () => {
    expect(component).toBeTruthy();
  });
});
