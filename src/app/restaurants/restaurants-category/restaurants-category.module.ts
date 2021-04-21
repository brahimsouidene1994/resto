import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsCategoryPageRoutingModule } from './restaurants-category-routing.module';

import { RestaurantsCategoryPage } from './restaurants-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsCategoryPageRoutingModule
  ],
  declarations: [RestaurantsCategoryPage]
})
export class RestaurantsCategoryPageModule {}
