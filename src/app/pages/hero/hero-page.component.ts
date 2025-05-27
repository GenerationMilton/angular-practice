import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    //templateUrl
    //imports: [RouterOutlet],
    templateUrl: './hero-page.component.html',
    styles: `
    `
})
export class HeroPageComponent{


name = signal('Ironman');
age = signal(45);

heroDescription = computed(()=>{
    const description = `${this.name()} - ${this.age()}`;
    return description;
})

getHeroDescription() {

     return `${this.name()} - ${this.age()}`;
}

capitalizedName = computed(()=>{
    const capitalized = `${this.name().toUpperCase()}`;
    return capitalized;
})

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