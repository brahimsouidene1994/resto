import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  ngForm: any;
  isSubmitted = false;

  constructor(
    private categoryService : CategoryService,
    private router : Router)
    {
      this.ngForm = {
        name: '',
        image :''
      };
     }

  ngOnInit() {
    console.log('list', this.categoryService.getCategories())

  }


  addCategorie(myForm : NgForm){
    this.isSubmitted = true
    console.log('test',  myForm.controls.name.value, myForm.controls.image.value)
    this.categoryService.addCategorie(new Category(4,myForm.controls.name.value, myForm.controls.image.value ))
    this.router.navigate(['/restaurants-category'])
    console.log('list', this.categoryService.getCategories())
  }

  noSubmit(e) {
    e.preventDefault();
  }

}
