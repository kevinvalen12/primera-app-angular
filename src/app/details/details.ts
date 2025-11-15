import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HousingLocationInfo } from '../interfaces/housinglocation';


@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  // ActivatedRoute funcion que permite al router tener acceso de los datos sobre la ruta actual
  route: ActivatedRoute = inject(ActivatedRoute);
  //  Ahora incluye una llamada a la HousingService Para pasar el parámetro de ruta como un argumento a la getHousingLocationById Función de servicio Ahora incluye una llamada a la HousingService Para pasar el parámetro de ruta como un argumento a la getHousingLocationById Función de servicio
  housingService = inject(HousingService)
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
}
// lession 11 agregar ruta para mostrar pagina de detalles
