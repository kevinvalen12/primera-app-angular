import { Injectable } from '@angular/core';
import { HousingLocationInfo } from '../interfaces/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
   const data = await fetch(this.url);
   return (await data.json()) ?? [];
   
  }
  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? [];
  }

  // formulario
  submitApplication(firmsName: string, lastName: string, email: string){
    // console.log(
    //   `Homes application received: firstName: ${firmsName}, lastName: ${lastName}, email: ${email}`
    // );
  }
  
}
 