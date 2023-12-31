import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAtoB'
})
export class ConvertAtoBPipe implements PipeTransform {

  transform(value: string, character:string): string{
    return value.replace(character, " ");
}
}
