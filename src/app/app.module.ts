import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodStatusComponent } from './components/food-status/food-status.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodStatusComponent,
    EmployeeDetailsComponent,
    OrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
