import { Component, inject } from '@angular/core';
import { FavorisService } from '../../services/favoris.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favoris',
  imports: [RouterLink],
  templateUrl: './favoris.html',
  styleUrl: './favoris.scss',
})
export class FavorisComponent {
    favoris = inject(FavorisService);
}
