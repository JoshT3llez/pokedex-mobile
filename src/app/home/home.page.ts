import {Component, ViewChild} from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import {IonInfiniteScroll} from '@ionic/angular';
import {Pokemon} from "../interfaces/pokemon.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild(IonInfiniteScroll) inifiniteScroll: IonInfiniteScroll;

    public pokemons: Pokemon[] = [];
    public from: number = 20;
    public to: number = 40;

    constructor(private pokedexService: PokedexService, private router: Router) {
        this.pokemons = this.pokedexService.getPokemons();
    }

    details(pokemon) {
        this.router.navigateByUrl("/details/"+pokemon.id);
    }

    loadData(event) {
        setTimeout(() => {
            if(this.pokemons.length >= this.pokedexService.totalPokemons) {
                this.inifiniteScroll.complete();
                this.inifiniteScroll.disabled = true;
                return;
            }

            const newPokemons = this.pokedexService.getPokemons(this.from, this.to);

            this.pokemons.push(...newPokemons);
            this.from = this.to;
            this.to   = this.to + 20;
        }, 1000);

        this.inifiniteScroll.complete();
    }
}
