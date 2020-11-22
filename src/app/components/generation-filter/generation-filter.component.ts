import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector    : 'app-generation-filter',
    templateUrl : './generation-filter.component.html',
    styleUrls   : ['./generation-filter.component.scss'],
})
export class GenerationFilterComponent {

    public generations = [
        { id: 0, name: 'Todos' },
        { id: 1, name: '1ra Gen' },
        { id: 2, name: '2da Gen' },
        { id: 3, name: '3ra Gen' },
        { id: 4, name: '4ta Gen' },
        { id: 5, name: '5ta Gen' },
        { id: 6, name: '6ta Gen' },
        { id: 7, name: '7ma Gen' },
        { id: 8, name: '8va Gen' }
    ];

    constructor(public popoverController: PopoverController) {}

    onClick(valor: number) {
        this.popoverController.dismiss({
            generationId: valor
        });
    }
}
