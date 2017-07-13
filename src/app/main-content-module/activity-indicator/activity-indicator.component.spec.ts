import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ActivityIndicatorComponent } from './activity-indicator.component';

describe('ActivityIndicatorComponent', () => {
  let component: ActivityIndicatorComponent;
  let fixture: ComponentFixture<ActivityIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdProgressBarModule,
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      declarations: [ ActivityIndicatorComponent ]
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
