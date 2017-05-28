import {Pipe, PipeTransform} from '@angular/core';

@Pipe( {
  name: 'arrayExtract'
} )
export class ArrayExtractPipe implements PipeTransform {

  transform(value: any[], end: number = 0, init: number = 0): any[] | Error {
    if (!Array.isArray(value)) {
      throw new Error('Requires an Array as input');
    }
    return end ? value.slice(init, end) : value;
  }

}
