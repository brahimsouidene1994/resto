import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = [
      new Category(1, "Italian" , "https://images-na.ssl-images-amazon.com/images/I/81muevvzu8L._AC_SL1500_.jpg"),
      new Category(2,"Frensh","https://c.files.bbci.co.uk/117CC/production/_108582617_041057304-1.jpg"),
      new Category(3,"Marroc","https://i.pinimg.com/originals/85/08/e5/8508e5c2a620e6fbdddb9153b18d130a.jpg")
  ]
  constructor() { }

  getCategories(){
    return [...this.categories]
  }

  addCategorie(cat : Category){
    this.categories.push(cat)
  }

  addRestaurant(indice : number, resto : Restaurant){
    this.categories[indice].list_restaurants.push(resto)
  }
}
