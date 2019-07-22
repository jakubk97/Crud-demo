import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/auth/signin';
  private signupUrl = 'http://localhost:8080/auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: User): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

}
