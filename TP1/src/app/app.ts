import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello';
import { ProfileComponent } from './profile/profile';
import { CitationComponent } from './citation/citation';
import { MeteoComponent } from './meteo/meteo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, ProfileComponent, CitationComponent, MeteoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
