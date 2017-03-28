import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponent } from './who.component';

describe('Who Component', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
