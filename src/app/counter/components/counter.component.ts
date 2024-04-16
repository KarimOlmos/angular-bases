import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-counter',
  template: `
     <h3>Counter: {{ counter }}</h3>

     <button (click)="increaseBy(1)">+1</button>
     <button (click)="decreaseBy(1)">-1</button>
     <button (click)="reset()">Reset</button>
  `,
})



export class CounterComponent{

  public title: string = 'Hola mundo';
  public counter: number = 10;
  public defValue = this.counter;
  increaseBy(value:number):void {
    this.counter += value;
  }
  decreaseBy(value:number):void {
    this.counter -= value;
  }

  reset(){

    this.counter = this.defValue;

  }
}
