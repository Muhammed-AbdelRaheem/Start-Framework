import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full",title:"Home"},
  {path:"home",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"portfolio",component:PortfolioComponent,title:"Portfolio"},
  {path:"contact",component:ContactComponent,title:"Contact"},
  {path:"**" ,component:NotfoundComponent,title:"404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
