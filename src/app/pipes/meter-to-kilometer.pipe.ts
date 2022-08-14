import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToKilometer'
})
export class MeterToKilometerPipe implements PipeTransform {
  transform(meter:number): string {
    const km = meter / 1000;

    return km.toFixed(1) + " km"
  }

}
