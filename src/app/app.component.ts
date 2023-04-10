import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: any;
  searchCity: any = "Pune";
  searchText;
  lat;
  lng;
  // Position:any;
  constructor(private weatherService: WeatherService) { }
  // ngOnInit() {


  // }

  // ngOnChange(){
  //   this.getWhether();
  // }
  getWhether() {
    this.weatherService.getWeatherDateByCoords(this.searchCity).subscribe(res => {
      this.weatherData = res;
      console.log(this.weatherData);
    })
  }

  getVal(event) {
    console.log(event.target.value)
    this.searchCity = event.target.value;
    console.log(this.searchCity)
    if (this.searchCity !== "") {
      this.getWhether();

    }


  }

  
}
