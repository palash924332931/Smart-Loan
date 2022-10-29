import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string): unknown {
    if (value.length > 20) {
      return `${value} - success`;
    }else
      return `${value} - need more..` ;
  }

}
