import { inject, TestBed } from '@angular/core/testing';

import { ArrayExtractPipe } from './array-extract.pipe';

describe('Array Extract Pipe', () => {
  let pipe: ArrayExtractPipe;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ArrayExtractPipe ]
  }));

  beforeEach(inject([ ArrayExtractPipe ], p => {
    pipe = p;
  }));

  it('should return a new array with the 2 first elements by providing end index equal to 2', () => {
    expect(pipe.transform([ 'a', 'b', 'c', 'd' ], 2))
      .toEqual([ 'a', 'b' ]);
  });

  it('should return a new array with the elements from 1 to 3 by providing end index equal to 3 and init index equal to 1', () => {
    expect(pipe.transform([ 'a', 'b', 'c', 'd' ], 3, 1))
      .toEqual([ 'b', 'c' ]);
  });

});
