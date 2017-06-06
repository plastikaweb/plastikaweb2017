import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbControlComponent } from './breadcrumb-control.component';

describe('BreadcrumbControlComponent', () => {
  let component: BreadcrumbControlComponent;
  let fixture: ComponentFixture<BreadcrumbControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
