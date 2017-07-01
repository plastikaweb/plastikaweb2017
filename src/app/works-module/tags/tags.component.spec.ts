import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tags.component';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    component.selectedTags = [ 'angular', 'php' ];
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should raise emitTagSelection event when selectTag is fired', () => {
    let tag = null;
    component.emitTagSelection.subscribe(t => tag = t);
    component.selectTag('angular');
    expect(tag).toBe('angular');
  });

  it('should return true if the selected tag is in the list of tags', () => {
    const result = component.checkIfSelected('angular');
    expect(result).toBeTruthy();
  });

  it('should return false if the selected tag is not in the list of tags', () => {
    const result = component.checkIfSelected('firebase');
    expect(result).toBeFalsy();
  });

});
