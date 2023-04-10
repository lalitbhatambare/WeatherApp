import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
    // apikey = '7e502e305629309648416698761f0203';
  constructor(private http: HttpClient) { }

  getWeatherDateByCoords(searchCity:any){
    console.log('api param',searchCity)
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=7e502e305629309648416698761f0203`;
      return this.http.get(apiUrl);
    }
}
