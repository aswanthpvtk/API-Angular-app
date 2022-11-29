import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ViewUsPublicComponent } from './view-us-public/view-us-public.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const myRoutes:Routes = [
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"us",
    component:ViewUsPublicComponent
  },
  {
    path:"info",
    component:ViewUserInfoComponent
  },
  {
    path:"pro",
    component:ViewProductComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    ViewUsPublicComponent,
    ViewUserInfoComponent,
    ViewProductComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
