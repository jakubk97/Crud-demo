import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  loggin(login: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/login`, {login,password});
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomersBylastName(lastname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lastname/${lastname}`);
  }

}
