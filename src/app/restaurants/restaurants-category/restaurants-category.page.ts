import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-restaurants-category',
  templateUrl: './restaurants-category.page.html',
  styleUrls: ['./restaurants-category.page.scss'],
})
export class RestaurantsCategoryPage implements OnInit, DoCheck {

  categories : Category[]
  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories()
  }

  ngDoCheck(){
    this.categories = this.categoryService.getCategories()
  }

  goToAddCategory(){
    this.router.navigate(['/add-category'])
  }

}
