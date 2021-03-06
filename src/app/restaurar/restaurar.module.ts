import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurarPageRoutingModule } from './restaurar-routing.module';

import { RestaurarPage } from './restaurar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurarPageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [RestaurarPage]
})
export class RestaurarPageModule {}
