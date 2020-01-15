import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carColor'
})
export class CarColorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return 'Ext: ' + value.ext + 'Int: ' + value.int;
  }

}
