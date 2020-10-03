import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {
  constructor() { }

  transform(value: number): string {
    return value ? value.toLocaleString(window.navigator.language) : '0';
  }
}
