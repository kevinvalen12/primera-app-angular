import { Component, inject } from '@angular/core';
// importacion de componentes housinglocation
import { HousingLocation } from '../housing-location/housing-location';
//importar interfaz
import type { HousingLocationInfo } from '../interfaces/housinglocation';
//importar servicio
import { HousingService } from '../services/housing.service'; 
// <app-housing-location />  home.html

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
  ,
})

export class Home {
  // [] indica un array
  // correjido housingLocationList
  housingLocationList: HousingLocationInfo[] = [];
  HousingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];

  filterResults(text: string) {    
    if (!text) {      
      this.filteredLocationList = this.housingLocationList;      
      return;    
    }    
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>      
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),    
    );  
  }

  constructor(){
    this.HousingService
      .getAllHousingLocations()
      .then((housingLocationList : HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList =housingLocationList;  
      }
    )
  }
}
// la leccion 3 explica como crear un componete y agregarle un filtro y boton a este componen
// lecccion 4 como se crea una interfaz para crear un dato 
//leccion 8 aprendi como se utiliza el for para repetir datos dinamicos