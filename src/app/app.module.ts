import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {CarsApiService} from './services/cars-api.service'
import {DisplayCarsComponent} from './display-cars.component'


import { AppComponent } from './app.component';
import { OrderByPipe } from '../pipes/orderByPipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCarsComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  
  // Declaring the Service into the provider so that
  // it is available to all the components
  providers: [CarsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
