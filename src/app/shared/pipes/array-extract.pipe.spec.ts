import { inject, TestBed } from '@angular/core/testing';

import { ArrayExtractPipe } from './array-extract.pipe';

describe('Array Extract Pipe', () => {
  let pipe: ArrayExtractPipe;
  let arr;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ArrayExtractPipe ]
  }));

  beforeEach(inject([ ArrayExtractPipe ], p => {
    pipe = p;
    arr = [ 'a', 'b', 'c', 'd' ];
  }));

  it('should return a new array with the 2 first elements by providing end index equal to 2', () => {
    expect(pipe.transform(arr, 2))
      .toEqual([ 'a', 'b' ]);
  });

  it('should return a new array with the elements from 1 to 3 by providing end index equal to 3 and init index equal to 1', () => {
    expect(pipe.transform(arr, 3, 1))
      .toEqual([ 'b', 'c' ]);
  });

  it('should return a new array with the same elements of the input array', () => {
    expect(pipe.transform(arr))
      .toEqual([ 'a', 'b', 'c', 'd' ]);
  });

  it('should return an error if no array is provided as argument', () => {
    expect(() => pipe.transform(null))
      .toThrow(new Error('Requires an Array as input'));
  });

});
