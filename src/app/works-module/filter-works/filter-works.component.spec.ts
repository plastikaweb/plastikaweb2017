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
    component.tags = [ 'angular', 'firebase', 'css3', 'facebook' ];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add to stringsModel on change receiveTag with no existent item', () => {
    component.receiveTag = 'css3';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.stringsModel).toContain('css3');
    });
  });

  it('should remove to stringsModel on change receiveTag with already existent item', () => {
    component.receiveTag = 'angular'; // add tag
    component.receiveTag = 'angular'; // remove tag
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.stringsModel).not.toContain('angular');
    });
  });

  it('should add string to the stringsModel if present on tags array but not present on stringsModel', () => {
    component.filterStrings('firebase');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.filteredStrings).toContain('firebase');
    });
  });

});
