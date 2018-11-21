import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'unixDate'
})
export class UnixDatePipe implements PipeTransform {

  transform(unixdate: number): string {
    return moment.unix(unixdate).format('ll');
  }

}
