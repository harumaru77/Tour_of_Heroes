import {Component, OnInit} from '@angular/core';
import {Hero} from './shared/model/hero.model';
import {HeroService} from './shared/service/hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }
}
