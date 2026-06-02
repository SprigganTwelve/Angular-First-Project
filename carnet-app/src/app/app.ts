import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactManagerComponent } from './components/contact-manager-component/contact-manager-component';

@Component({
  selector: 'app-root',
  imports: [ContactManagerComponent],
  template: '<app-contact-manager />',
})
export class App {
  protected readonly title = signal('carnet-app');
}
