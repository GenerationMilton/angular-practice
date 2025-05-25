import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    //templateUrl
    imports: [RouterOutlet],
    templateUrl: './counter-page.component.html',
    styles: `
    button{
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
    `
})
export class CounterPageComponent{
    counter= 15;

    increaseBy(value:number){
        this.counter += value;
    }
    decreaseBy(value:number){
        this.counter -=value;
    }
    resetCounter(){
        this.counter=15;
    }
}