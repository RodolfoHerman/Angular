import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detalhe',
  templateUrl: './restaurant-detalhe.component.html'
})
export class RestaurantDetalheComponent implements OnInit {

  restaurant: Restaurant;
  
  //O 'ActivatedRoute' captura o parâmetro da url para ser passado para a função
  constructor(private restaurantServive: RestaurantsService,
              private rout: ActivatedRoute) { }

  ngOnInit() {

    //Existe duas forma de capturar o parâmetro da url. Primeira como 'snapshot' que busca o parâmetro naquele momento e a outra é pelo 'subscribe' que fica observando a troca de roa. Como acessaremos essa url uma vez para expor os itens do retaurante não é preciso usar o 'subscribe' (reactive)
    this.restaurantServive.restaurantById(this.rout.snapshot.params['id'])
          .subscribe(restaurant => this.restaurant = restaurant);
  }

}
