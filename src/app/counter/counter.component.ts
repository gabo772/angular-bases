import { Component } from "@angular/core";

@Component({
    selector:"app-counter",
    template:`
        <h3>Contador : {{contador}}</h3>
        <button class="btn btn-primary" (click)="aumentar()">Aumentar</button>
        <button class="btn btn-danger" (click)="disminuir()">Disminuir</button>
        
    
    `
})
export class CounterComponent{
    public title:string = 'Hola mundo!';
    public contador:number=0;
  
  
    public aumentar=():void=>{
        this.contador+=1;
    }
    public disminuir=():void=>{
      this.contador-=1;
    }

}