import { Injectable } from "@angular/core";

import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

//Obs: usamos o @Injectable() para informar que o SERVICE receberá obejtos por CDI, ex.: Http
@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {

        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json());
    }

}