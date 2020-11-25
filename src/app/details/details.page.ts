import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokedexService } from '../services/pokedex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector    : 'app-details',
    templateUrl : './details.page.html',
    styleUrls   : ['./details.page.scss'],
})
export class DetailsPage {

    public pokemon: Pokemon;
    public segment: string = 'stats';

    constructor(private pokedexService: PokedexService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            const pokemonId = params.pokemonId - 1;
            this.pokemon    = this.pokedexService.getPokemon(pokemonId);
        });
    }

    segmentChanged(ev: any) {
        this.segment = ev.detail.value;
    }
}
