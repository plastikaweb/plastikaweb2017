import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { worksMock, workList } from '../../mocks/works.mock';
import { TagsService } from '../tags-service/tags.service';
import { WorksService } from './works.service';

describe('WorksService', () => {
  let service: WorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorksService,
        TagsService,
        { provide: AngularFireDatabase, useValue: worksMock }
      ]
    });
  });

  beforeEach(inject([ WorksService ], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return works data from firebase', () => {
    const worksObservable = service.findAllActiveWorks();
    worksObservable.subscribe(data => {
      expect(data.length).toEqual(workList.length);
    });
  });

  it('should return a work data from firebase given its slug property', () => {
    const worksObservable = service.findWorkBySlug('the-project');
    worksObservable.subscribe(data => {
      expect(data.name).toEqual('the project');
    });
  });

  it('should return works with tags from firebase', () => {
    const worksObservable = service.addTagListToWorks();
    worksObservable.subscribe(data => {
      expect(data.length).toEqual(workList.length);
      expect(data[ 0 ].tags).toEqual(workList[ 0 ].tags);
      expect(data[ 1 ].tags[ 0 ].name).toEqual(workList[ 1 ].tags[ 0 ].name);
    });
  });

  it('should return a work name from firebase given its slug property', () => {
    const worksObservable = service.findWorkNameBySlug('the-project');
    worksObservable.subscribe(data => {
      expect(data).toEqual('the project');
    });
  });

});
