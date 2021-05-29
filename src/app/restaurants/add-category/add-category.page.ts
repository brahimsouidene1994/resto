import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private router : Router,
    private alertController : AlertController
    )
    {
      this.ngForm = {
        name: '',
        image :''
      };
     }

  ngOnInit() {

  }
  async addCategorie(f: NgForm){
    try{
      //const obj={name:f.value.name,image:f.value.image}
      const cat = new Category( f.value.name,  f.value.image);
      console.log(cat)
      const  {err}=await this.categoryService.addCategorie(cat) as any;
      this.presentAlert();
      if(!err)
        console.log("added");
    } catch (error) {
      return error;

    }
    }

  noSubmit(e) {
    e.preventDefault();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'Ajout avec succée',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate([`/restaurants-category`]);
  }
}
