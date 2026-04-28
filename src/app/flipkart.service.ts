import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private httpClient:HttpClient) { }
  getF():Observable<any>{
    return this.httpClient.get("https://fakestoreapi.com/products");
  }
}
