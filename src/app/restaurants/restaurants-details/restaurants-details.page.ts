import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';

@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.page.html',
  styleUrls: ['./restaurants-details.page.scss'],
})
export class RestaurantsDetailsPage implements OnInit {

  input_data : Restaurant

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.input_data = JSON.parse(params.special);
        console.log('test', this.input_data)
      }
    });
   }

  ngOnInit() {
  }

}
