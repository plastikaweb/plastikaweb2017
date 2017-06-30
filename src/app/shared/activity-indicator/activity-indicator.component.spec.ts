import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdProgressBarModule } from '@angular/material';

import { ActivityIndicatorComponent } from './activity-indicator.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

describe('ActivityIndicatorComponent', () => {
  let component: ActivityIndicatorComponent;
  let fixture: ComponentFixture<ActivityIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdProgressBarModule,
        RouterModule.forRoot([]),
        SharedModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
