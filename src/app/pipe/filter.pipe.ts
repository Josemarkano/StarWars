import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, page: number = 0, search: string = ''): any {
    if(search.length === 0)
      return value.slice(page,page +1);

    const filteredChar = value.filter((character:any) => character.name.includes(search));
      return filteredChar.slice(page,page +1);
  }

}
