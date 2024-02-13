import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbar:string[] =["About","Portfolio","Contact"] 
linksColor:string="#1ABC9C"
}


