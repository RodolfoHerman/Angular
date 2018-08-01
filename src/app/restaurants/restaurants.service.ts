import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { ErrorHandler } from "../app.error.error-handlers";
import { MenuItem } from "../restaurant-detalhe/menu-item/menu-item.model";

//Obs: usamos o @Injectable() para informar que o SERVICE receberá obejtos por CDI, ex.: Http
@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {

        let params: HttpParams = undefined;

        if(search) {

            params = new HttpParams().set('q', search);
        }

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params});
    }

    restaurantById(id: string): Observable<Restaurant> {

        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    reviewsOfRestaurant(id: string): Observable<any> {

        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]> {

        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }

}