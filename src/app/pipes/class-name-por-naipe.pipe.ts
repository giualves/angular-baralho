import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorNaipe'
})
export class ClassNamePorNaipePipe implements PipeTransform {

  transform(value: string): string {

    if ((value === 'copas') || (value === 'ouro')) {
      return 'vermelho'
    } else {
      return 'preto';
    }
    return value;
  }
}


