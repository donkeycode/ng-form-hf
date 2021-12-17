import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class AppColorDirective {
  @HostBinding('class.is-red') private isRed = true;

  @HostBinding('class.is-blue') private isBlue = false;

  @HostBinding('attr.title') private title = 'C est rouge';

  @HostListener('click')
  onClick() {
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
    this.title = this.isRed ? 'C est rouge' : 'La vie en bleu';
  }




}
