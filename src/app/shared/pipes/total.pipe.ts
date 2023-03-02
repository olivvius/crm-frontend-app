import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(coef: number, val: number, tva?: number): number {
    if (tva) return coef * val * (1 + tva / 100);
  return coef * val;
  }

}
