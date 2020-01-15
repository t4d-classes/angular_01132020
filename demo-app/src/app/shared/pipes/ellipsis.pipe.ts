import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, textLength: any = 0): any {

    const sValue = String(value);

    if (textLength && sValue.length > textLength) {
      return sValue.slice(0, textLength) + '...';
    }

    return sValue;

  }

}
