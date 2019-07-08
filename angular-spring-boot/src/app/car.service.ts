import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getCarsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getManufacturersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manufacturers`);
  }

  getUsersByManufacturerID(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/idm/${id}`);
  }

  getUsersBylastName(lastname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lastname/${lastname}`);
  }

}
