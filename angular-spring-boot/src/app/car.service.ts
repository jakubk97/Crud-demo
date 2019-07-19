import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';
import { Manufacturer } from './manufacturer';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:8080/car';

  constructor(private http: HttpClient) { }

  loggin(login: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { login, password });
  }

  loggin2(): Observable<any> {
    return this.http.get(`${this.baseUrl}/login`);
  }

  getCarsList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  createManufacturer(manufacturer: Manufacturer): Observable<Object> {
    return this.http.post(`${this.baseUrl}/manufacturer/create`, manufacturer);
  }

  createCar(car: Car): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, car, { responseType: 'text' });
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  buyCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/buy/${id}`, value);
  }

  search(car: Car, pricefrom: string, priceto: string): Observable<any> {
    console.log(car);
    console.log(car.manufacturer);
    console.log(pricefrom);
    console.log(priceto);
    let headers = new HttpHeaders().set('Content', 'applicationparams');
    let params = new HttpParams().set('model', car.model).set('body', car.body)
      .set('color', car.color).set('status', car.status).set('capacity', car.capacity).set('name', car.manufacturer.name)
      .set('pricefrom', pricefrom).set('priceto', priceto);
    console.log(headers);
    console.log(params);
    return this.http.get(`${this.baseUrl}/search`, { headers: headers, params: params });
  }

  getSearchManufacturer(manufacturer: Manufacturer): Observable<any> {
    return this.http.get(`${this.baseUrl}/${manufacturer.id}`);
  }

  getModelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/models`);
  }

  getBodyList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/body`);
  }

  getColorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/color`);
  }

  getCapacityList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/capacity`);
  }

  getManufacturersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manufacturers`);
  }

  getUsersBylastName(lastname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lastname/${lastname}`);
  }

}
