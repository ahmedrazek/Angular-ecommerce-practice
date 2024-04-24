import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
  standalone: true,
})
export class NationalIdPipe implements PipeTransform {
  transform(value: number, format: string): unknown {
    let birthDate = String(value).slice(1, 7);
    let year = birthDate.slice(0, 2);
    let month = birthDate.slice(2, 4);
    let day = birthDate.slice(4, 6);
    let century = String(value).slice(0, 1);

    if (format === 'yy') {
      if (century === '2') {
        return `19${year}`;
      } else if (century === '3') {
        return `20${year}`;
      }
    } else if (format === 'mm') {
      return month;
    } else if (format === 'dd') {
      return day;
    } else if (format === 'FullDate') {
      if (century === '2') {
        return `${day}-${month}-19${year}`;
      } else if (century === '3') {
        return `${day}-${month}-20${year}`;
      }
    }
    return null;
  }
}
