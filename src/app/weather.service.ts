import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private a:HttpClient) { }
  getweather():Observable<any>{
    return this.a.get("https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true");
  }

}
