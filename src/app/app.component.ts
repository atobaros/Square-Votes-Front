import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'square-votes';

  public x:number = 10;
  public theDate:Date = new Date();
   
  public buttonVal:string = 'click me mathafacka'; 

  public changeText(){
    this.buttonVal = 'you clicked me ben zona';
  }

  public color:string = "background-color:purple";

  nameChange(event:Event){
    let name = event.target;
    console.log(name);
    (<HTMLInputElement>name).innerHTML = "pompilio";
    
  }

}
