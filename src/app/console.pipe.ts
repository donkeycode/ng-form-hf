import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'console'
})
export class ConsolePipe implements PipeTransform {

  transform(value: unknown, message: string = ""): void {
    console.log(message, value);
  }

}
