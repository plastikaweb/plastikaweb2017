import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { MainContentCardComponent } from './main-content-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { WorksComponent } from '../works/works.component';
import { ContactComponent } from '../contact/contact.component';
import { WhoComponent } from '../who/who.component';

describe('Main Content Card Component', () => {
  let component: MainContentCardComponent;
  let fixture: ComponentFixture<MainContentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule.forRoot(),
        TranslateModule.forRoot(),
        RouterModule,
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
        ContactComponent ]
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
