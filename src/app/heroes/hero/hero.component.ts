import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string="Spiderman";
  public age:number=25;

  describeHero():string{
    return `${this.name}-${this.age}`;
  }

  changeName():void{
    this.name="Ironman";
  }
  changeAge():void{
    this.age=44;
  }

}
