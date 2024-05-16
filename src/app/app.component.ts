import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Hola mundo!';
  public contador:number=0;


  public aumentar=():void=>{
      this.contador+=1;
  }
  public disminuir=():void=>{
    this.contador-=1;
  }
}
