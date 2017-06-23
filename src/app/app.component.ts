import {Component} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {rootRoute} from "@angular/router/src/router_module";

/*
  - type of javascript variable
    1. number
    2. string
    3. boolean
    4. object (array, function)
 */



@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['app.component.css']

})

export class AppComponent {

title=`Tour of heroes`


  // providers: [HeroService]

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }


}


