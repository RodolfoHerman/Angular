import { NgModule } from "@angular/core";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { ShoppingCartService } from "../restaurant-detalhe/shopping-cart/shopping-cart.service";
import { OrderService } from "../order/order.service";
import { NotificationService } from "../shared/messages/notification.service";
import { LoginService } from "../security/login/login.service";

@NgModule({
    providers: [
        RestaurantsService, 
        ShoppingCartService, 
        OrderService, 
        NotificationService,
        LoginService 
    ]
})
export class CoreModule {}