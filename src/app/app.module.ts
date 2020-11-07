import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodItemComponent } from './food-list/food-item/food-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { ToggleDropdownDirective } from './directives/toggle-dropdown.directive';
import { LoginComponent } from './login/login.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FoodItemComponent,
    FoodListComponent,
    ToggleDropdownDirective,
    LoginComponent,
    FoodCartComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
