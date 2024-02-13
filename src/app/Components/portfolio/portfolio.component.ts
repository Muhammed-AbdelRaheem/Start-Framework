import { Component } from '@angular/core';
import { REMOVE_STYLES_ON_COMPONENT_DESTROY } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  
})




export class  PortfolioComponent {
  imgSrc:string[]=[
  "assets/imeges/poert1.png",
  "assets/imeges/port2.png",
  "assets/imeges/port3.png",
  "assets/imeges/poert1.png",
  "assets/imeges/port2.png",
  "assets/imeges/port3.png",
]
modalshow:string="position-fixed"
modalhide:string="d-none"
modalImg: any;


  Showmodal(el:HTMLDivElement){
    el.classList.replace(this.modalhide,this.modalshow)
  }
  Hidemodal(el:HTMLDivElement){
    el.classList.replace(this.modalshow,this.modalhide)
  }

src(src:string)
{
 this.modalImg=src 
  console.log(src)
}

}


