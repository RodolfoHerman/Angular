import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  //utiliando o PIPE ASYNC para realizar o subscribe
  reviews: Observable<any>;

  constructor(private restaurantsService: RestaurantsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //Estamos em um componente filho e queremos acessar uma rota filha, para isso recuperamos a activatedRoute do parent e depois pegamos o parâmtro id
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.activatedRoute.parent.snapshot.params['id']);
  }

}
