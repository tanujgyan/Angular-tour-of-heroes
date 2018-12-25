import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../heroes/hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
heroes: Hero[];
hero: Hero = {
id: 1,
name: 'Windstorm'
};
  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
}

