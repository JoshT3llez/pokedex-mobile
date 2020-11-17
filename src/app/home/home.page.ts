import {Component, ViewChild} from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import {IonInfiniteScroll, IonSearchbar, PopoverController} from '@ionic/angular';
import {Pokemon} from "../interfaces/pokemon.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild(IonInfiniteScroll) inifiniteScroll: IonInfiniteScroll;
    @ViewChild(IonSearchbar) searchBar: IonSearchbar;

    public pokemons: Pokemon[] = [];
    public filterText: string = '';
    public from: number = 20;
    public to: number = 40;

    constructor(private pokedexService: PokedexService, private router: Router, public popoverController: PopoverController) {
        this.pokemons = this.pokedexService.getPokemons();
    }

    details(pokemon) {
        this.router.navigateByUrl("/details/"+pokemon.id);
    }

    onSearchChange(event) {
        if(event.detail.value === '') {
            this.pokemons = this.pokedexService.getPokemons();
        } else {
            this.pokemons = this.pokedexService.getPokemonsByName(event.detail.value)
        }
    }

    loadData(event) {
        if (this.searchBar.value === '') {
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
        } else {
            this.inifiniteScroll.complete();
            this.inifiniteScroll.disabled = true;
            return;
        }
    }

    // async presentPopover(ev: any) {
    //     const popover = await this.popoverController.create({
    //         component: PopoverComponent,
    //         cssClass: 'my-custom-class',
    //         event: ev,
    //         translucent: true
    //     });
    //     return await popover.present();
    // }
}
