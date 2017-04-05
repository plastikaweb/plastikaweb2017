import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponent } from './who.component';
import { TranslateModule } from 'ng2-translate';
import { CovalentCoreModule } from '@covalent/core';

describe('Who Component', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule.forRoot(),
        TranslateModule.forRoot()
      ],
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
