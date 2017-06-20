import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { CookiesComponent } from './cookies.component';

describe('CookiesComponent', () => {
  let component: CookiesComponent;
  let fixture: ComponentFixture<CookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MdCardModule
      ],
      declarations: [ CookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
