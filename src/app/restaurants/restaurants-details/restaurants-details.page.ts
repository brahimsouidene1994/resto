import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.page.html',
  styleUrls: ['./restaurants-details.page.scss'],
})
export class RestaurantsDetailsPage implements OnInit {

  input_data : Restaurant;
  indexOfCategory : number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService : RestaurantService
    ) {
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.input_data = JSON.parse(params.special);
        this.indexOfCategory = this.input_data.cat_id;
        console.log('test', this.input_data)
      }
    });
  }

  async deleteResto(id : number){
   try{
      if(confirm("Are you sure to delete ")) {
        console.log("Implement delete functionality here");
        const {err} = await this.restaurantService.deleteOneRestaurant(id) as any;
        if(!err)
           console.log("restaurant deleted");
        this.router.navigate([`/category-detail/${this.indexOfCategory}`]);
      }
    } catch(err){}

  }

}
