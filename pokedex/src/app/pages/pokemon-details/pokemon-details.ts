import { Component, inject, input } from '@angular/core';
import { PokemonApiServices } from '../../services/pokemon.api';
import { RouterLink } from '@angular/router';
import { FavorisService } from '../../services/favoris.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  imports: [RouterLink],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.scss',
})
export class PokemonDetailComponent {
  private api = inject(PokemonApiServices);
  favoris = inject(FavorisService);

  name = input.required<string>();

  pokemon = toSignal(
    toObservable(this.name).pipe(
      switchMap(n => this.api.getByName(n))
    )
  );
}