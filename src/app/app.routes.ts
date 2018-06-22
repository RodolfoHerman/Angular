import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetalheComponent } from './restaurant-detalhe/restaurant-detalhe.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetalheComponent},
    {path: 'about', component: AboutComponent}
]