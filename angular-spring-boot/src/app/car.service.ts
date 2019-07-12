import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post(`${this.baseUrl}` + `/login`, {login,password});
  }

  loggin2(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/login`);
  }

  getCarsList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  createManufacturer(manufacturer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/manufacturer/create`, manufacturer);
  }

  getManufacturersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manufacturers`);
  }

  getUsersBylastName(lastname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lastname/${lastname}`);
  }

}
