import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';


  cover:String="";
  flag:boolean=true;
  slide()
  {
    
    if(this.flag==true)
      {
        this.cover="rotate";
        this.flag=false;
        
      }
      else
      {
        this.cover="rotate1";
        this.flag=true;
       
      }
   

  }
  
}
