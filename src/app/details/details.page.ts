import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokedexService } from '../services/pokedex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector    : 'app-details',
    templateUrl : './details.page.html',
    styleUrls   : ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    public pokemon: Pokemon;

    constructor(private pokedexService: PokedexService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            this.pokemon = this.pokedexService.getPokemon(params.pokemonId - 1);
        });
    }

    ngOnInit() {

    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }
}
