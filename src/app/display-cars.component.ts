import { Component, OnInit } from '@angular/core';
import { CarsApiService } from './services/cars-api.service'
import { Car } from './models/car'

@Component({
  selector: 'display-cars',
  templateUrl: './display-cars.component.html',
  styleUrls: ['./display-cars.component.css']
})

//This class is use to consume the CarApiService
export class DisplayCarsComponent implements OnInit {

  cars: any
  //Injecting CarsApiService Service into the contructor
  constructor(private _carsApiService: CarsApiService) { }

  ngOnInit() {
    //subscribing the observables receive from CarsApiService
    this._carsApiService.getCars()
      .subscribe(
        data => {
          this.cars = data
        }
      );
  }
}


