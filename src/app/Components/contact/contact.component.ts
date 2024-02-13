import { Component } from '@angular/core';
HTMLLabelElement
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {
constructor(){}

  lableColor :string="text-success"
  // showlable:string="bottom-100"
  // hidelable:string="top-0"
  hidelable:string="bottom--30"
  showlable:string="bottom-0"


  Showlabel(el:HTMLLabelElement){
    // el.classList.add(this.lableColor)
    el.classList.add(this.showlable)
    el.classList.remove(this.hidelable)
    
  }
  Hidelable(el:HTMLLabelElement)
  {   el.classList.remove(this.showlable)
    el.classList.add(this.hidelable)}


}
