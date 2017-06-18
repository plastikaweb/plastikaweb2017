import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentChipsModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';

import { FilterWorksComponent } from './filter-works.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FilterWorksComponent', () => {
  let component: FilterWorksComponent;
  let fixture: ComponentFixture<FilterWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentChipsModule,
        BrowserAnimationsModule,
        FormsModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        FilterWorksComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add to stringsModel on change receiveTag with no existent item', () => {
    component.receiveTag = 'firebase';
    expect(component.stringsModel).toContain('firebase');
  });

  it('should remove to stringsModel on change receiveTag with already existent item', () => {
    component.receiveTag = 'firebase';
    component.receiveTag = 'firebase';
    expect(component.stringsModel).not.toContain('firebase');
  });
});
