import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetalheComponent } from './restaurant-detalhe/restaurant-detalhe.component';
import { MenuComponent } from './restaurant-detalhe/menu/menu.component';
import { ReviewsComponent } from './restaurant-detalhe/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetalheComponent,
        //Rotas filhas para o componente
        children: [
            //Informar a rota padrão restaurants/id/???? quando for vazia '' .. pathMatch indica se a URL for restaurants/id/reviews ou restaurants/id/menu não ocorrerá mais o redirect para 'menu'
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'order', component: OrderComponent},
    {path: 'about', component: AboutComponent}
]