import { Injectable } from '@angular/core';
import * as pokedex from '../../assets/data/es/pokedex.json';
import * as types from '../../assets/data/types.json';
import * as items from '../../assets/data/items.json';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

    public totalPokemons = pokedex.default.pokemons.length;

    constructor() {}
    
    getPokemons(from: number = 0, to: number = 20) {
        return pokedex.default.pokemons.slice(from, to);
    }

    getPokemon(pokemonId: number) {
        return pokedex.default.pokemons[pokemonId];
    }

    returnTypes() {
        return types.default;
    }

    private getGenerationKeys(generationId) {
        const keys: number[] = [];
        switch (generationId) {
            case 1:
                keys[0] = 0;
                keys[1] = 151;
                break;

            case 2:
                keys[0] = 151;
                keys[1] = 251;
                break;

            case 3:
                keys[0] = 251;
                keys[1] = 386;
                break;

            case 4:
                keys[0] = 386;
                keys[1] = 493;
                break;

            case 5:
                keys[0] = 493;
                keys[1] = 649;
                break;

            case 6:
                keys[0] = 649;
                keys[1] = 721;
                break;

            case 7:
                keys[0] = 721;
                keys[1] = 809;
                break;

            case 8:
                keys[0] = 809;
                keys[1] = 893;
                break;
        }

        return keys;
    }
}
