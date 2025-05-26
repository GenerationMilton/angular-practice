import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    //templateUrl
    imports: [RouterOutlet],
    templateUrl: './hero-page.component.html',
    styles: `
    `
})
export class HeroPageComponent{


name = signal('Ironman');
age = signal(45);

getHeroDescription() {

    return `${this.name()} - ${this.age()}`;
}
changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);

}

changeAge() {
    this.age.set(60);
}


resetForm() {

    this.name.set('Ironman');
    this.age.set(45);
}



}