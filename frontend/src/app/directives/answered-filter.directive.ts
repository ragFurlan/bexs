import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAnsweredFilter]'
})
export class AnsweredFilterDirective implements OnChanges{

  @Input() naoRespondidasDirective: String = "false";
  @Input() quantityAnswers: String = "0";
  //@Input('naoRespondidasDirective') naoRespondidas: false;
  // @Input('quantityAnswers') 0: number;

  constructor(private el: ElementRef) {  
    
  }

  ngOnChanges(changes: SimpleChanges){

    if(this.naoRespondidasDirective == "true"){
      this.el.nativeElement.hidden = this.quantityAnswers !== "0";     
    }
    else{
      this.el.nativeElement.hidden = false; 
    }
  }


}
