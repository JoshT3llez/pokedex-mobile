import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailsPageRoutingModule,
	],
	exports: [
		ObjectToArrayPipe
	],
  	declarations: [DetailsPage, ObjectToArrayPipe]
})
export class DetailsPageModule {}
