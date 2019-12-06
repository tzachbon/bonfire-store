import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entries'
})
export class EntriesPipe implements PipeTransform {

  transform(val: Object, sort = false, sortKey: string = 'index'): any {
    let arr = Object.entries(val).map(([key, value]) => ({ key, value }));

    if (sort) {
      arr = arr.sort((a, b) => a.value[sortKey] - b.value[sortKey]);
    }

    return arr;

  }

}
