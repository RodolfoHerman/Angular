import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetalheComponent } from './restaurant-detalhe/restaurant-detalhe.component';
import { MenuComponent } from './restaurant-detalhe/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detalhe/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detalhe/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detalhe/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detalhe/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from './order/order.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetalheComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    //Se estiver no módulo raiz importamos do me´todo forRoot
    RouterModule.forRoot(ROUTES),
    FormsModule
    
  ],
  providers: [
    //Informando um SERVICE no providers toda a aplicação terá acesso. Obs: services são SINGLETONS
    RestaurantsService,
    ShoppingCartService,
    //Mudança da linguagem para pt-BR
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
