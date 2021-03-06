import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetalheComponent } from './restaurant-detalhe/restaurant-detalhe.component';
import { MenuComponent } from './restaurant-detalhe/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detalhe/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detalhe/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detalhe/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetalheComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    //Se estiver no módulo raiz importamos do método forRoot. PreloadAllModules é a estratégia para acerragor os módulos
    //em backgroung quando os módulos principais são acarregados
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule, 
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    //Informando um SERVICE no providers toda a aplicação terá acesso. Obs: services são SINGLETONS
    //RestaurantsService,
    //ShoppingCartService,
    //Mudança da linguagem para pt-BR
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    //OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
