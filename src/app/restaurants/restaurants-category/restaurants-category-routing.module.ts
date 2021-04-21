import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsCategoryPage } from './restaurants-category.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsCategoryPageRoutingModule {}
