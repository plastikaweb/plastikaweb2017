import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdProgressSpinnerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator.component';

describe('ActivityIndicatorComponent', () => {
  let component: ActivityIndicatorComponent;
  let fixture: ComponentFixture<ActivityIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdProgressSpinnerModule,
        TranslateModule.forRoot()
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
