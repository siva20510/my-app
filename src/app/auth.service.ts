import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  login(user:any){
    return this.httpClient.post("https://api.escuelajs.co/api/v1/auth/login",user);
  }
}
