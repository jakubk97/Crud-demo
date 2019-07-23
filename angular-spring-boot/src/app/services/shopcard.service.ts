import { Injectable } from '@angular/core';
import { Car } from '../car';

const user = '';

@Injectable({
  providedIn: 'root'
})
export class ShopcardService {

  shopcard: Array<Car> = [];

  constructor() { }

  public saveUser(u: string) {
    window.sessionStorage.setItem(user, u);
  }

  public getUser(): string {
    return sessionStorage.getItem(user);
  }

}
