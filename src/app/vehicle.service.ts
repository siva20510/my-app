import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  //baseUrl:string="/assets/vehicles.json";

  constructor(private httpClient:HttpClient) { }

getVehicles():Observable<Vehicle[]>{
  return this.httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page=1");
}
//to get data id website url to view data in new page
getVehicle(id:string):Observable<Vehicle>{
  return this.httpClient.get<Vehicle>(this.baseUrl+"/"+id);
}



//1 id 
deleteVehicle(id:string):Observable<Vehicle>{
  return this.httpClient.delete<Vehicle>(this.baseUrl+"/"+id);
  //provide / at the end of url
}
filteredvehicles(term:string):Observable<Vehicle[]>{
  return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term);
}
getSortvehicles(column:string, order:string):Observable<Vehicle[]>{
  return this.httpClient.get<Vehicle[]>(this.baseUrl+"?sortBy="+column+"&order="+order);
}
getPagedVehicles(page:number):Observable<Vehicle[]>{
  return this.httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page="+page);
}
getVehicleWithParams(term:string, column:string, order:string, page:number):Observable<Vehicle[]>{
  return this.httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term+"&sortBy="+column+"&order="+order+"&limit=10&page="+page);
}
createVehicl(vehicle:Vehicle):Observable<Vehicle>{
  return this.httpClient.post<Vehicle>(this.baseUrl,vehicle);
}
//to edit the vehicle data and update it
editVehicle(id:string,vehicle:Vehicle):Observable<Vehicle>{
  return this.httpClient.put<Vehicle>(this.baseUrl+"/"+id,vehicle);
}
}
