import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  // getCustomer(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  // createCustomer(customer: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/create`, customer);
  // }

  // updateCustomer(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteCustomer(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getCustomersList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  // getCustomersList(): Observable<any> {
  //   return this.http.get(`http://localhost:8080/users`);
  // }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

  loggin(login: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/login`, {login,password});
  }

  loggin2(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/login`);
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUsersBylastName(lastname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lastname/${lastname}`);
  }

    createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
}
