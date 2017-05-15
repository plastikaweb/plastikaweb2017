import {Pipe, PipeTransform} from '@angular/core';

@Pipe( {
  name: 'arrayExtract'
} )
export class ArrayExtractPipe implements PipeTransform {

  transform(value: any[], end: number, init: number = 0): any[] {
    if (!Array.isArray(value)) {
      throw new Error('Requires an Array as input');
    }
    if (!end) {
      throw new Error('Requires an end index');
    }
    return end ? value.slice(init, end) : value;
  }

}
