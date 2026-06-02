import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  private httpClient = inject(HttpClient);

  private _favoris = signal<string[]>([]);
  
  favoris = this._favoris.asReadonly();
  nombre = computed(()=> this._favoris().length)

  estFavori(name: string){
    return this.favoris().includes(name);
  }

  basculer(name: string) {
    this._favoris.update(list =>
      list.includes(name) ? list.filter(n => n !== name) : [...list, name]
    );
  }
}
