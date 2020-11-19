import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {GenerationFilterComponent} from './generation-filter/generation-filter.component';


@NgModule({
  declarations: [GenerationFilterComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [GenerationFilterComponent]
})
export class ComponentsModule { }
