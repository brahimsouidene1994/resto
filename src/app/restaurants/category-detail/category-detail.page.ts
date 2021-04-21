import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Restaurant } from 'src/app/model/restaurant';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit, DoCheck {

  indice : number;
  category : Category;



  constructor(
    private categoryService : CategoryService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ){    }
  ngOnInit() {
    this.activatedRoute.params.subscribe(idF=>{
      this.indice=parseInt(idF.id);

      })

      if(!isNaN(this.indice)){
        console.log("indice" , this.indice)
      }

      this.category = this.categoryService.getCategories()[this.indice]
  }

  ngDoCheck(){
    this.category = this.categoryService.getCategories()[this.indice]
  }

  showDetail(resto : Restaurant){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(resto)
      }
    };
    this.router.navigate(['/restaurants-details'], navigationExtras);
  }
}
