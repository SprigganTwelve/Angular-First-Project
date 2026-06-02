import { Component, computed, inject, signal } from '@angular/core';
import { PokemonApiServices } from '../../services/pokemon.api';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-component.list',
  imports: [RouterLink],
  templateUrl: './pokemon.list.html',
  styleUrl: './pokemon.list.scss',
})
export class PokemonListComponent {
  private api = inject(PokemonApiServices);

  pokemons = toSignal(this.api.getList(), {initialValue: []});
  recherche = signal("");

  filtres = computed(() => {
    const q = this.recherche().toLowerCase().trim();
    return this.pokemons().filter(p => p.name.includes(q));
  });

  pageSlice = 18;
  pageSize = computed(()=> Math.ceil(this.filtres().length / this.pageSlice));

  index = signal<number>(1);
  paginatedPokemons = computed( ()=>{
      let tab;
      this.index.update(v => v- 1);
      const current =  this.index();
      
      if((current + this.pageSlice ) <= this.filtres().length)
        tab = this.filtres().slice(current - 1, current + this.pageSlice);
      else
        tab = this.filtres().slice(current - 1, current + (this.pageSlice - this.filtres().length));

      console.log("paginated pokemons",{tab})
      return tab;
    }
  );

  updatePaginationIndex (i: number){
    if(i <= this.filtres().length)
      this.index.update(()=>i)
  }

  onSearch(event: Event) {
    this.recherche.set((event.target as HTMLInputElement).value);
  }

}
