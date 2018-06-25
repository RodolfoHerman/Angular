import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


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
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    //Se estiver no módulo raiz importamos do me´todo forRoot
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    //Informando um SERVICE no providers toda a aplicação terá acesso. Obs: services são SINGLETONS
    RestaurantsService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
