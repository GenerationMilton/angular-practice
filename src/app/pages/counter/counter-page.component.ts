import { Component } from "@angular/core";


@Component({
    template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increaseBy(1)">+1</button>
    <!-- <h2>CounterComponent Page</h2> -->
    `,
})
export class CounterPageComponent{
    counter= 15;

    increaseBy(value:number){
        this.counter += value;
    }
}