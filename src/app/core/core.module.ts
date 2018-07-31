import { NgModule } from "@angular/core";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { ShoppingCartService } from "../restaurant-detalhe/shopping-cart/shopping-cart.service";
import { OrderService } from "../order/order.service";
import { NotificationService } from "../shared/messages/notification.service";

@NgModule({
    providers: [RestaurantsService, ShoppingCartService, OrderService, NotificationService ]
})
export class CoreModule {}