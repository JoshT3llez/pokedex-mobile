import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    public pokemon: Pokemon;
    constructor() { }

    ngOnInit() {
        this.pokemon = history.state;
    }
}
