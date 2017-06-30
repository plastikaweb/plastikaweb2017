import { FilterPipe } from './filter.pipe';
import { inject, TestBed } from '@angular/core/testing';

 const workList: any[] = [ {
  $key: '1',
  name: 'the project',
   tags: [ { $key: 'yyy', name: 'flash' } ]
}, {
  $key: '2',
  name: 'the project 2',
   tags: [
     { $key: 'xxx', name: 'angular' },
     { $key: 'yyy', name: 'firebase' }
   ]
} ];

describe('Filter Pipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ FilterPipe ]
  }));

  beforeEach(inject([ FilterPipe ], p => {
    pipe = p;
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a new array with the works filtered by their tags', () => {
    expect(pipe.transform(workList, [ 'flash' ]))
      .toEqual([ workList[ 0 ] ]);
  });

  it('should return the same works array when no filter by value is present', () => {
    expect(pipe.transform(workList))
      .toEqual(workList);
  });

  it('should return an empty array when the filter by value does not match any work', () => {
    expect(pipe.transform(workList, [ 'any tag' ]))
      .toEqual([]);
  });
});
