import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private elementRef:ElementRef) { }

@HostListener('keyup')
  convert(){
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
  }

}
