import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http"
import { Observable } from "rxjs/observable"
import "rxjs/add/operator/map";


import { ShoppingCartService } from "../restaurant-detalhe/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detalhe/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { MEAT_API } from "../app.api";


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: Http) {}


    cartItems(): CartItem[] {

        return this.cartService.items;
    }

    increaseQty(item: CartItem): void {

        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem): void {

        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem): void {

        this.cartService.removeItem(item);
    }

    itemsValue(): number {

        return this.cartService.total();
    }

    clear() {

        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<String> {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
                    .map(resp => resp.json());
    }

}