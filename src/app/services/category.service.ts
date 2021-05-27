import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Restaurant } from '../model/restaurant';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = [

  ]
  constructor(private httpC : HttpClient) { }


  addRestaurant(indice : number, resto : Restaurant){
    this.categories[indice].list_restaurants.push(resto)
  }

  getAllCategorie(){
    return new Promise((resolve, reject) => {
      this.httpC.get('http://localhost:3010/category-list')
        .forEach(data =>
          {
            resolve(data)
          }

        ).catch((err) => {
          reject(err);
        });
    });
  }
  getOneCategorie(index : number){
    return new Promise((resolve, reject) => {
      this.httpC.get(`http://localhost:3010/category/${index}`)
        .forEach(data =>
          {
            resolve(data)
          }

        ).catch((err) => {
          reject(err);
        });
    });
  }
  addCategorie(categorie : Category){
    return new Promise((resolve, reject) => {
      console.log(categorie)
      this.httpC.post('http://localhost:3010/category/add', categorie)
        .forEach(data =>{
          console.log(data)
          resolve(data)
        }
        ).catch((err) => {
          console.log(err)
          reject(err);
        });
    });
  }

}
