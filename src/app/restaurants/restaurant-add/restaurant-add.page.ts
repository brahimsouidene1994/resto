import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Restaurant } from 'src/app/model/restaurant';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.page.html',
  styleUrls: ['./restaurant-add.page.scss'],
})
export class RestaurantAddPage  {

  ngForm: any;
  isSubmitted = false;
  indice : number


  constructor(
    public alertController: AlertController,
    private categoryService : CategoryService,
    private router : Router,
    private activatedRoute : ActivatedRoute,)
     {
      this.ngForm = {
        id :'',
        name: '',
        adresse:'',
        image :''
      };
    }

  ionViewWillEnter() {
    this.activatedRoute.params.subscribe(idF=>{
      this.indice=parseInt(idF.id);

      })

      if(!isNaN(this.indice)){
        console.log("indice" , this.indice)
      }
  }

  addRestaurant(myForm : NgForm){
    this.isSubmitted = true
    this.categoryService
            .addRestaurant(this.indice,
              new Restaurant(
                myForm.controls.id.value,
                myForm.controls.name.value,
                myForm.controls.adresse.value,
                myForm.controls.image.value ))
    this.presentAlert()
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
  }
}
