import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pwFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    const filterBy: string[] = Array.isArray(args) && args.length ? args : null;
    return filterBy ? value.filter(item =>
      item.tags.find(tag =>
        filterBy.find(filterByItem =>
          filterByItem.toLocaleLowerCase() === tag.name.toLocaleLowerCase()
        )
      )
    ) : value;
  }

}
