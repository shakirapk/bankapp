import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //dependency inject cheyyunn

  constructor(private el:ElementRef) {
    console.log(el);
    // highlight cheyyan aayitt background clr maattii kodukkanam
    el.nativeElement.style.backgroundColor="aqua"
    
   }

// certain tags ne highlight cheyyaanann use aakkunne.
// step 1:- highlight nte selector ne eth tag laanno content highlight cheyyande aaa selector aa line l paste cheyyuka
// step 2 :- eth tag laanno ee selector paste cheythitt ille aaa tag ne nammakk hightlight.directive.ts nte ullil kittanam,
// angane kittiyaal maatre nammakk athil certain styles apply cheyyaan aavuu.angane html tag ne ts file kittaan vendi 
//use aakkunne class aann elementRef.so elementRef ne kittanamenkil athine dependency inject cheyyanam. then highlight 
//cheyyan aayitt background clr maattii kodukkanam. 

}
