import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PokeCardComponent } from './poke-card.component';



@NgModule({
  declarations: [
    PokeCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    PokeCardComponent
  ]
})
export class PokeCardModule { }
