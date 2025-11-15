import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../interfaces/housinglocation';


@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}

// leccion 4 creacion de componente y implementacion de diseño
// leccion 5 creacion de un input propieda y tambien utilizar el metodo.required