import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponent } from './works.component';

describe('Works Component', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create works component', () => {
    expect(component).toBeTruthy();
  });
});
