import { Component } from '@angular/core';
// importacion de componentes housinglocation
import { HousingLocation } from '../housing-location/housing-location';
//importar interfaz
import type { HousingLocationInfo } from '../interfaces/housinglocation';

// <app-housing-location />  home.html

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';  
  
  housingLocation: HousingLocationInfo = {    
    id: 9999,    
    name: 'Test Home',    
    city: 'Test city',    
    state: 'ST',    
    photo: `${this.baseUrl}/example-house.jpg`,    
    availableUnits: 99,    
    wifi: true,    
    laundry: false,
  }
}

// la leccion 3 explica como crear un componete y agregarle un filtro y boton a este componen
// lecccion 4 como se crea una interfaz para crear un dato 