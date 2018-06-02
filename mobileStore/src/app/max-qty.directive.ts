import { Directive,ElementRef,HostListener,Renderer} from '@angular/core';

@Directive({
  selector: '[appMaxQty]'
})
export class MaxQtyDirective {

  @HostListener('change') onvalueChange() {
    this.el.nativeElement.style.backgroundColor = "red";
    var quantity = this.renderer.selectRootElement('#qty').value;
    if(quantity>2) {
      this.renderer.selectRootElement('#errorMessage').innerHTML = "quantity can not be more than 2";
    }
    else
    {
      this.renderer.selectRootElement('#errorMessage').innerHTML = "";
    }
  }
  constructor(private el:ElementRef,private renderer : Renderer) {
    //this.renderer.selectRootElement('#errorMessage').style.visibility = "hidden";
   }

}
