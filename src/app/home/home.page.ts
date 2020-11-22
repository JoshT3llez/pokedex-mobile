import { Component, ViewChild } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { IonInfiniteScroll, IonSearchbar, PopoverController } from '@ionic/angular';
import { Router} from "@angular/router";
import { Pokemon } from "../interfaces/pokemon.interface";
import { GenerationFilterComponent } from '../components/generation-filter/generation-filter.component';

@Component({
    selector      : 'app-home',
    templateUrl   : 'home.page.html',
    styleUrls     : ['home.page.scss'],
})
export class HomePage {

    @ViewChild(IonInfiniteScroll) inifiniteScroll: IonInfiniteScroll;
    @ViewChild(IonSearchbar) searchBar: IonSearchbar;

    public pokemons     : Pokemon[] = [];
    public filterText   : string    = '';
    public from         : number    = 20;
    public to           : number    = 40;
    public generationId : number    = 0;

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
            this.pokemons = this.pokedexService.getPokemonsByName(event.detail.value, this.generationId)
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

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component       : GenerationFilterComponent,
            event           : ev,
            translucent     : true,
            animated        : true,
            mode            : 'ios',
            backdropDismiss : true
        });

        await popover.present();

        const {data}        = await popover.onWillDismiss();
        const keys          = this.pokedexService.getGenerationKeys(data.generationId);
        this.from           = keys[0];
        this.to             = keys[0] + 20;
        this.generationId   = data.generationId;
        this.pokemons       = this.pokedexService.getPokemons(this.from, this.to);
        this.from           = this.to;
        this.to             = this.to + 20;
    }
}
