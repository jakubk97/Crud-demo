import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class ShopcardService {

  shopcard: Array<Car> = [];

  constructor() { }
}
