import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient:HttpClient) { }

getVehicles():Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
}
//1 id 
deleteVehicle(id:string):Observable<any>{
  return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  //provide / at the end of url
}
filteredvehicles(term:string):Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
}
}
