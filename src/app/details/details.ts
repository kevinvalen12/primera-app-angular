import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HousingLocationInfo } from '../interfaces/housinglocation';
import { first } from 'rxjs';


@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  // ActivatedRoute funcion que permite al router tener acceso de los datos sobre la ruta actual
  route: ActivatedRoute = inject(ActivatedRoute);
  //  Ahora incluye una llamada a la HousingService Para pasar el parámetro de ruta como un argumento a la getHousingLocationById Función de servicio Ahora incluye una llamada a la HousingService Para pasar el parámetro de ruta como un argumento a la getHousingLocationById Función de servicio
  housingService = inject(HousingService)
  housingLocation: HousingLocationInfo | undefined;

  applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
    
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
// lession 11 agregar ruta para mostrar pagina de detalles
// leccion 12 agregar formularios en angular y funciones de formulario 
