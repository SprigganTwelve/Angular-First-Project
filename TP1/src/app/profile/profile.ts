import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  nom = "Dali";
  metier = "Mangaka";
  photo = 'https://i.pravatar.cc/150?img=12';

  contacter() {
    alert(`Contacter ${this.nom}`);
  }
}
