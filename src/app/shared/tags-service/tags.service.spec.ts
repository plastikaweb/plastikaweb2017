import { AngularFireDatabase } from 'angularfire2/database';
import { inject, TestBed } from '@angular/core/testing';
import 'rxjs/add/observable/combineLatest';

import { tagsMock, tagsList } from '../../mocks/tags.mock';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagsService,
        { provide: AngularFireDatabase, useValue: tagsMock }
      ]
    });
  });

  beforeEach(inject([ TagsService ], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tags data from firebase', () => {
    const tagsObservable = service.getTagsNames();
    tagsObservable.subscribe(data => {
      expect(data.length).toEqual(tagsList.length);
    });
  });

  it('should return a tag object given a tagName', () => {
    const tagsObservable = service.findTagFromName('angular');
    tagsObservable.subscribe(data => {
      expect(data.name).toEqual(tagsList[ 0 ].name);
    });
  });
});
