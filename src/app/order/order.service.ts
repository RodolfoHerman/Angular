import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/observable"
import "rxjs/add/operator/map";


import { ShoppingCartService } from "../restaurant-detalhe/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detalhe/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { MEAT_API } from "../app.api";


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient) {}


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

        return this.http.post<Order>(`${MEAT_API}/orders`, order).map(order => order.id);
    }

}