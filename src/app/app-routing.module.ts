import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodListComponent } from './food-list/food-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'foodlist', component: FoodListComponent},
  {path:'cart', component: FoodCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
