import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUbicacionImages',
  standalone: true
})
export class PipeUbicacionImagesPipe implements PipeTransform {

  transform(value: string): string {
    return "assets/images/" + value + ".webp";
  }

}
