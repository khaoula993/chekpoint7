import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appRaibow]'
})
export class RaibowDirective {
@HostBinding('style.color') color;
@HostBinding('style.borderColor') bc;
generateRandomColor():string {
 return '#'+ Math.floor(Math.random() * 16777215).toString(16);
}
  constructor() { }
@HostListener('keyup')changecolor(){
this.bc=this.generateRandomColor();
this.color=this.generateRandomColor();

}
}
