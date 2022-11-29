import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ViewUsPublicComponent } from './view-us-public/view-us-public.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    ViewUsPublicComponent,
    ViewUserInfoComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
