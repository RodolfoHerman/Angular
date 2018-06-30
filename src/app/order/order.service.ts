import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detalhe/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detalhe/shopping-cart/cart-item.model";


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) {}


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

}