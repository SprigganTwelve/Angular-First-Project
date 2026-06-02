import { Component } from '@angular/core';

@Component({
  selector: 'app-meteo',
  imports: [],
  templateUrl: './meteo.html',
  styleUrl: './meteo.css',
})
export class MeteoComponent {
   meteo = {
     ville: "Paris",
     temperature: 25,
     condition: "Ensoleillé",
     humidity: 25,
     vent: "Fort"
   }
}
