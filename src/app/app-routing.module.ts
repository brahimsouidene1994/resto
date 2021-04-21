import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'restaurants-category',
    pathMatch: 'full'
  },
  {
    path: 'restaurants-category',
    loadChildren: () => import('./restaurants/restaurants-category/restaurants-category.module').then( m => m.RestaurantsCategoryPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurants/restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'restaurants-details',
    loadChildren: () => import('./restaurants/restaurants-details/restaurants-details.module').then( m => m.RestaurantsDetailsPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./restaurants/add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'category-detail/:id',
    loadChildren: () => import('./restaurants/category-detail/category-detail.module').then( m => m.CategoryDetailPageModule)
  },
  {
    path: 'restaurant-add/:id',
    loadChildren: () => import('./restaurants/restaurant-add/restaurant-add.module').then( m => m.RestaurantAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
